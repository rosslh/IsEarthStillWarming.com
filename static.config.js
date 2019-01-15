import axios from "axios";
import csv from "csvtojson";

const dateFromYear = year => Math.trunc(Number(year));

const minYear = 1700;

const getData = async () => {
  let { data: co2 } = await axios.get(
    "http://scrippsco2.ucsd.edu/assets/data/atmospheric/merged_ice_core_mlo_spo/merged_ice_core_yearly.csv"
  );
  co2 = await csv({ noheader: true }).fromString(co2.replace(/".*"\n/g, ""));
  co2 = co2
    .filter(
      x =>
        x.field1 &&
        x.field2 &&
        !isNaN(x.field1) &&
        !isNaN(x.field2) &&
        dateFromYear(x.field1) > minYear
    )
    .map(x => ({
      year: dateFromYear(x.field1),
      co2: Math.trunc(Number(x.field2))
    }));

  let { data: temp } = await axios.get(
    "https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt"
  );
  temp = await csv({ noheader: true }).fromString(
    temp
      .replace(/[\t\v\f\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g, ",")
      .replace(/,,+/g, ",")
  );
  temp = temp
    .filter(
      x =>
        x.field1 &&
        x.field3 &&
        !isNaN(x.field1) &&
        !isNaN(x.field3) &&
        dateFromYear(x.field1) > minYear
    )
    .map(x => ({
      year: dateFromYear(x.field1),
      temp: Number(x.field3)
    }));
  return { temp, co2 };
};

export default {
  getSiteData: () => ({
    title: "Global Climate Indicators"
  }),
  getRoutes: async () => {
    const { temp, co2 } = await getData();
    const latestCo2Year = Math.max(...co2.map(x => x.year));
    const latestTempYear = Math.max(...temp.map(x => x.year));
    const tenYearWarming =
      Math.round(
        (temp.find(x => x.year === latestTempYear).temp -
          temp.find(x => x.year === latestTempYear - 10).temp) *
          100
      ) / 100;
    return [
      {
        path: "/",
        component: "src/pages/index.js",
        getData: () => ({
          co2: co2.map(x => [x.year, x.co2]),
          temp: temp.map(x => [x.year, x.temp]),
          latestCo2Year,
          latestTempYear,
          tenYearWarming,
          latestCo2Value: co2.find(x => x.year === latestCo2Year).co2,
          latestTempValue: temp.find(x => x.year === latestTempYear).temp
        })
      }
    ];
  }
};
