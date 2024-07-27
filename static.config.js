import axios from "axios";
import csv from "csvtojson";
import https from "https";
import fs from "fs/promises";
import path from "path";

const dateFromYear = (year) => Math.trunc(Number(year));

const minYear = 1700;

const readCachedData = async (filename) => {
  try {
    const filePath = path.join("./dataCaches", filename);
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    console.warn(`Error reading cached file ${filename}:`, error);
    return null;
  }
};

const writeCachedData = async (filename, data) => {
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
  } catch (error) {
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

const getCo2 = async () => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  let co2Data;
  try {
    const response = await axios.get(
      `https://scrippsco2.ucsd.edu/assets/data/atmospheric/merged_ice_core_mlo_spo/merged_ice_core_yearly.csv`,
      {
        timeout: 10000,
        httpsAgent: agent,
      }
    );
    co2Data = response.data;
    await writeCachedData("co2.csv", co2Data);
  } catch (error) {
    console.warn("Error fetching CO2 data, using cached data");
    co2Data = await readCachedData("co2.csv");
    if (!co2Data) {
      throw new Error("Failed to fetch CO2 data and no cache available");
    }
  }

  let co2 = await csv({ noheader: true }).fromString(
    co2Data.replace(/".*"\n/g, ``)
  );

  co2 = co2
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
      y: Math.trunc(Number(x.field2)),
    }));

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
  } catch (error) {
    console.warn("Error fetching sea level rise data, using cached data");
    slrData = await readCachedData("slr.csv");
    if (!slrData) {
      throw new Error(
        "Failed to fetch sea level rise data and no cache available"
      );
    }
  }

  const regexp = /#trend = ([0-9.]+) mm\/year/;

  const results = [...slrData.match(regexp)];

  return Number(results[1]);
};

const getIceMelt = async () => {
  let iceMeltData;
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
    iceMeltData = response.data;
    await writeCachedData("ice-melt.csv", iceMeltData);
  } catch (error) {
    console.warn("Error fetching ice melt data, using cached data");
    iceMeltData = await readCachedData("ice-melt.csv");
    if (!iceMeltData) {
      throw new Error("Failed to fetch ice melt data and no cache available");
    }
  }

  let iceMelt = await csv({ noheader: true }).fromString(
    iceMeltData.replace(/".*"\n/g, ``)
  );

  iceMelt = iceMelt
    .filter(
      (x) =>
        x.field1 &&
        x.field5 &&
        !isNaN(x.field1) &&
        !isNaN(x.field5) &&
        dateFromYear(x.field1) > minYear
    )
    .map((x) => ({ x: dateFromYear(x.field1), y: Number(x.field5) }));

  const latestIceMeltYear = Math.max(...iceMelt.map((val) => val.x));

  return { iceMelt, latestIceMeltYear };
};

export default {
  getRoutes: async () => {
    const { temp, latestTempYear, tenYearWarming } = await getTemp();
    const { co2, latestCo2Year } = await getCo2();
    const slrTrend = await getSlr();
    const { iceMelt, latestIceMeltYear } = await getIceMelt();
    return [
      {
        path: `/`,
        template: `src/pages/index.js`,
        getData: () => ({
          co2,
          temp,
          latestCo2Year,
          latestTempYear,
          tenYearWarming,
          latestCo2Value: co2.find((value) => value.x === latestCo2Year).y,
          latestTempValue: temp.find((value) => value.x === latestTempYear).y,
          latestIceMeltValue: iceMelt.find(
            (value) => value.x === latestIceMeltYear
          ).y,
          slrTrend,
        }),
      },
    ];
  },
};
