import axios from "axios";
import csv from "csvtojson";
import https from "https";
import fs from "fs/promises";
import path from "path";
import regression, { type DataPoint } from "regression";

const dateFromYear = (year: string) => Math.trunc(Number(year));

const minYear = 1700;

const readCachedData = async (filename: string) => {
  try {
    const filePath = path.join("./dataCaches", filename);
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    console.warn(`Error reading cached file ${filename}:`, error);
    return null;
  }
};

const writeCachedData = async (filename: string, data: string) => {
  try {
    if (process.env.CI) {
      console.log("CI environment detected, skipping cache write");
      return;
    }
    const filePath = path.join("./dataCaches", filename);
    await fs.writeFile(filePath, data, "utf-8");
    console.log(`Successfully updated cache file: ${filename}`);
  } catch (error) {
    console.error(`Error writing to cache file ${filename}:`, error);
  }
};

const getTemp = async () => {
  let tempData;
  try {
    const response = await axios.get(
      `https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt`,
      {
        timeout: 10000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        },
      }
    );
    tempData = response.data;
    await writeCachedData("temp.txt", tempData);
  } catch (_error) {
    console.warn("Error fetching temperature data, using cached data");
    tempData = await readCachedData("temp.txt");
    if (!tempData) {
      throw new Error(
        "Failed to fetch temperature data and no cache available"
      );
    }
  }

  let temp = await csv({ noheader: true }).fromString(
    tempData
      .replace(/[\t\v\f\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g, `,`)
      .replace(/,,+/g, `,`)
  );

  temp = temp
    .filter(
      (x) =>
        x.field1 &&
        x.field3 &&
        !isNaN(x.field1) &&
        !isNaN(x.field3) &&
        dateFromYear(x.field1) > minYear
    )
    .map((x) => ({ x: dateFromYear(x.field1), y: Number(x.field3) }));

  const latestTempYear = Math.max(...temp.map((value) => value.x));

  const tenYearWarming =
    Math.round(
      (temp.find((value) => value.x === latestTempYear).y -
        temp.find((value) => value.x === latestTempYear - 10).y) *
        100
    ) / 100;

  return { temp, latestTempYear, tenYearWarming };
};

type NoaaEntry = { x: number; y: number; count: number };
type NoaaEntries = Record<number, NoaaEntry>;

const getCo2 = async () => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  // Fetch Scripps CO2 data
  let scrippsCo2Data;
  try {
    const response = await axios.get(
      `https://scrippsco2.ucsd.edu/assets/data/atmospheric/merged_ice_core_mlo_spo/merged_ice_core_yearly.csv`,
      {
        timeout: 10000,
        httpsAgent: agent,
      }
    );
    scrippsCo2Data = response.data;
    await writeCachedData("scripps-co2.csv", scrippsCo2Data);
  } catch (_error) {
    console.warn("Error fetching Scripps CO2 data, using cached data");
    scrippsCo2Data = await readCachedData("scripps-co2.csv");
    if (!scrippsCo2Data) {
      throw new Error(
        "Failed to fetch Scripps CO2 data and no cache available"
      );
    }
  }

  // Fetch NOAA CO2 data
  let noaaCo2Data;
  try {
    const response = await axios.get(
      "https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt",
      {
        timeout: 10000,
      }
    );
    noaaCo2Data = response.data;
    await writeCachedData("noaa-co2.txt", noaaCo2Data);
  } catch (_error) {
    console.warn("Error fetching NOAA CO2 data, using cached data");
    noaaCo2Data = await readCachedData("noaa-co2.txt");
    if (!noaaCo2Data) {
      throw new Error("Failed to fetch NOAA CO2 data and no cache available");
    }
  }

  // Process Scripps data
  let scrippsCo2 = await csv({ noheader: true }).fromString(
    scrippsCo2Data.replace(/".*"\n/g, ``)
  );

  scrippsCo2 = scrippsCo2
    .filter(
      (x) =>
        x.field1 &&
        x.field2 &&
        !isNaN(x.field1) &&
        !isNaN(x.field2) &&
        dateFromYear(x.field1) > minYear
    )
    .map((x) => ({
      x: dateFromYear(x.field1),
      y: Number(x.field2),
    }));

  // Process NOAA data
  const noaaCo2Lines = noaaCo2Data.split("\n");
  const noaaCo2 = noaaCo2Lines
    .filter((line: string) => !line.startsWith("#") && line.trim().length > 0)
    .map((line: string) => {
      const [year, _month, _date, average, _deseasonalized] = line
        .trim()
        .split(/\s+/);
      return {
        x: Number(year),
        y: Number(average),
      };
    })
    .filter(
      (entry: { x: number; y: number }) =>
        !isNaN(entry.x) && !isNaN(entry.y) && entry.x > minYear
    );

  // Group NOAA data by year and calculate yearly averages
  const noaaYearlyData = (
    Object.values(
      noaaCo2.reduce((acc: NoaaEntries, curr: { x: number; y: number }) => {
        if (!acc[curr.x]) {
          acc[curr.x] = { x: curr.x, y: curr.y, count: 1 };
        } else {
          acc[curr.x].y += curr.y;
          acc[curr.x].count += 1;
        }
        return acc;
      }, {} as NoaaEntries)
    ) as NoaaEntry[]
  ).map(({ x, y, count }) => ({
    x,
    y: y / count,
    count,
  }));

  // Merge both datasets
  const mergedYears = new Set([
    ...scrippsCo2.map((entry) => entry.x),
    ...noaaYearlyData.map((entry) => entry.x),
  ]);

  const co2 = Array.from(mergedYears)
    .map((year) => {
      const scrippsEntry = scrippsCo2.find((entry) => entry.x === year);
      const noaaEntry = noaaYearlyData.find((entry) => entry.x === year);

      if (scrippsEntry && noaaEntry) {
        return {
          x: year,
          y: Math.trunc((scrippsEntry.y + noaaEntry.y) / 2),
        };
      } else {
        return {
          x: year,
          y: Math.trunc((scrippsEntry?.y || noaaEntry?.y) as number),
        };
      }
    })
    .sort((a, b) => a.x - b.x);

  const latestCo2Year = Math.max(...co2.map((val) => val.x));

  return { co2, latestCo2Year };
};

const getSlr = async () => {
  let slrData;
  try {
    const response = await axios.get(
      `https://www.star.nesdis.noaa.gov/sod/lsa/SeaLevelRise/slr/slr_sla_gbl_free_all_66.csv`,
      {
        timeout: 10000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        },
      }
    );
    slrData = response.data;
    await writeCachedData("slr.csv", slrData);
  } catch (_error) {
    console.warn("Error fetching sea level rise data, using cached data");
    slrData = await readCachedData("slr.csv");
    if (!slrData) {
      throw new Error(
        "Failed to fetch sea level rise data and no cache available"
      );
    }
  }

  const lines = slrData.split("\n");
  const dataPoints = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("#") || line === "") {
      continue;
    }
    const values = line.split(",");
    const year = parseFloat(values[0]);
    let seaLevelAnomaly = null;
    for (let j = 1; j < values.length; j++) {
      if (values[j] && values[j] !== "") {
        seaLevelAnomaly = parseFloat(values[j]);
        break;
      }
    }
    if (!isNaN(year) && seaLevelAnomaly !== null && !isNaN(seaLevelAnomaly)) {
      dataPoints.push({ year, seaLevelAnomaly });
    }
  }

  const latestYear = dataPoints[dataPoints.length - 1].year;
  const cutoffYear = latestYear - 5;

  const recentDataPoints = dataPoints.filter(
    (point) => point.year >= cutoffYear
  );

  const regressionData: DataPoint[] = recentDataPoints.map((point) => [
    point.year,
    point.seaLevelAnomaly,
  ]);

  const result = regression.linear(regressionData);

  const yearlyChange = result.equation[0];

  return yearlyChange;
};

const getSeaIceMinimumTrend = async () => {
  let seaIceMinumumsData;
  try {
    const response = await axios.get(
      `https://climate.nasa.gov/system/internal_resources/details/original/2264_N_09_extent_v3.0.csv`,
      {
        timeout: 10000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        },
      }
    );
    seaIceMinumumsData = response.data;
    await writeCachedData("ice-melt.csv", seaIceMinumumsData);
  } catch (_error) {
    console.warn("Error fetching ice melt data, using cached data");
    seaIceMinumumsData = await readCachedData("ice-melt.csv");
    if (!seaIceMinumumsData) {
      throw new Error("Failed to fetch ice melt data and no cache available");
    }
  }

  let seaIceMinumums = await csv({
    noheader: true,
    headers: ["year", "mo", "data-type", "region", "extent", "area"],
  }).fromString(seaIceMinumumsData.replace(/".*"\n/g, ``));

  seaIceMinumums = seaIceMinumums
    .filter((x) => x.year && x.extent && !isNaN(x.year) && !isNaN(x.extent))
    .map((x) => ({ x: Number(x.year), y: Number(x.extent) }));

  const uniqueYears = [...new Set(seaIceMinumums.map((entry) => entry.x))].sort(
    (a, b) => a - b
  );

  const last5Years = uniqueYears.slice(-5);

  const last5YearsData = seaIceMinumums.filter((entry) =>
    last5Years.includes(entry.x)
  );

  if (last5YearsData.length < 2) {
    throw new Error("Not enough data to compute regression");
  }

  const regressionData: DataPoint[] = last5YearsData.map((entry) => [
    entry.x,
    entry.y,
  ]);

  const result = regression.linear(regressionData);

  const slope = result.equation[0];

  const averageExtent =
    last5YearsData.reduce((sum, entry) => sum + entry.y, 0) /
    last5YearsData.length;

  const percentageChangePerYear = (slope / averageExtent) * 100;

  return Math.round((percentageChangePerYear + Number.EPSILON) * 100) / 100;
};

export const getData = async () => {
  const { temp, latestTempYear, tenYearWarming } = await getTemp();
  const { co2, latestCo2Year } = await getCo2();
  const seaLevelTrend = await getSlr();
  const seaIceMinimumTrend = await getSeaIceMinimumTrend();
  return {
    co2,
    temp,
    latestCo2Year,
    latestTempYear,
    tenYearWarming,
    currentCo2: co2.find((value) => value.x === latestCo2Year)?.y,
    currentTemp: temp.find((value) => value.x === latestTempYear).y,
    seaIceMinimumTrend,
    seaLevelTrend,
    lastUpdatedAt: new Date(),
  };
};
