import React from "react";
import ContentWrapper from "../contentWrapper/contentWrapper";
import CO2 from "../co2/co2";
import style from "./counter.module.scss";

const Counter = ({
  currentCo2,
  currentTemp,
  seaLevelTrend,
  seaIceMinimumTrend,
}: {
  currentCo2: number;
  currentTemp: number;
  seaLevelTrend: number;
  seaIceMinimumTrend: number;
}) => (
  <ContentWrapper className={style.contentWrapper}>
    <div className={style.counter}>
      <div>
        <div>
          Atmospheric
          {` `}
          <CO2 />
        </div>
        <strong id="currentCo2Counter">
          {currentCo2}
          ppm
        </strong>
      </div>
      <div>
        <div>Temperature anomaly</div>
        <strong id="currentTempCounter">
          +{currentTemp}
          °C
        </strong>
      </div>
      <div>
        <div>Global Sea Level</div>
        <strong id="seaLevelTrendCounter">
          +{seaLevelTrend}
          mm / year
        </strong>
      </div>
      <div>
        <div>Arctic Sea Ice Minimum</div>
        <strong id="seaIceMinimumTrendCounter">
          {seaIceMinimumTrend}% / year
        </strong>
      </div>
    </div>
  </ContentWrapper>
);

export default Counter;
