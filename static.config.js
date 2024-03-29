import axios from "axios";
import csv from "csvtojson";
import https from "https";

const dateFromYear = (year) => Math.trunc(Number(year));

const minYear = 1700;

const getTemp = async () => {
  let { data: temp } = await axios.get(
    `https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      },
    }
  );

  temp = await csv({ noheader: true }).fromString(
    temp
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

  let { data: co2 } = await axios.get(
    `https://scrippsco2.ucsd.edu/assets/data/atmospheric/merged_ice_core_mlo_spo/merged_ice_core_yearly.csv`,
    { httpsAgent: agent }
  );

  co2 = await csv({ noheader: true }).fromString(co2.replace(/".*"\n/g, ``));

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
  const { data: slr } = await axios.get(
    `https://www.star.nesdis.noaa.gov/sod/lsa/SeaLevelRise/slr/slr_sla_gbl_free_all_66.csv`
  );

  const regexp = /#trend = ([0-9.]+) mm\/year/;

  const results = [...slr.match(regexp)];

  return Number(results[1]);
};

const getIceMelt = async () => {
  let { data: iceMelt } = await axios.get(
    `https://climate.nasa.gov/system/internal_resources/details/original/2264_N_09_extent_v3.0.csv`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      },
    }
  );

  iceMelt = await csv({ noheader: true }).fromString(
    iceMelt.replace(/".*"\n/g, ``)
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
