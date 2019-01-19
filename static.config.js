import axios from 'axios';
import csv from 'csvtojson';

const dateFromYear = year => Math.trunc(Number(year));

const minYear = 1700;

const getTemp = async () => {
  let { data: temp } = await axios.get(
    'https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt'
  );

  temp = await csv({ noheader: true }).fromString(
    temp
      .replace(/[\t\v\f\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g, ',')
      .replace(/,,+/g, ',')
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
    .map(x => [dateFromYear(x.field1), Number(x.field3)]);

  const latestTempYear = Math.max(...temp.map(x => x[0]));

  const tenYearWarming =
    Math.round(
      (temp.find(x => x[0] === latestTempYear)[1] -
        temp.find(x => x[0] === latestTempYear - 10)[1]) *
        100
    ) / 100;

  return { temp, latestTempYear, tenYearWarming };
};

const getCo2 = async () => {
  let { data: co2 } = await axios.get(
    'http://scrippsco2.ucsd.edu/assets/data/atmospheric/merged_ice_core_mlo_spo/merged_ice_core_yearly.csv'
  );

  co2 = await csv({ noheader: true }).fromString(co2.replace(/".*"\n/g, ''));

  co2 = co2
    .filter(
      x =>
        x.field1 &&
        x.field2 &&
        !isNaN(x.field1) &&
        !isNaN(x.field2) &&
        dateFromYear(x.field1) > minYear
    )
    .map(x => [dateFromYear(x.field1), Math.trunc(Number(x.field2))]);

  const latestCo2Year = Math.max(...co2.map(x => x[0]));

  return { co2, latestCo2Year };
};

export default {
  getRoutes: async () => {
    const { temp, latestTempYear, tenYearWarming } = await getTemp();

    const { co2, latestCo2Year } = await getCo2();

    return [
      {
        path: '/',
        component: 'src/pages/index.js',
        getData: () => ({
          co2,
          temp,
          latestCo2Year,
          latestTempYear,
          tenYearWarming,
          latestCo2Value: co2.find(x => x[0] === latestCo2Year)[1],
          latestTempValue: temp.find(x => x[0] === latestTempYear)[1]
        })
      }
    ];
  }
};
