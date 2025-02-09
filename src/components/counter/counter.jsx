import React from "react";
import PropTypes from "prop-types";
import ContentWrapper from "../contentWrapper/contentWrapper";
import CO2 from "../co2/co2";
import style from "./counter.module.scss";

const Counter = ({
  currentCo2,
  currentTemp,
  seaLevelTrend,
  seaIceMinimumTrend,
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

Counter.propTypes = {
  currentCo2: PropTypes.number.isRequired,
  currentTemp: PropTypes.number.isRequired,
  seaLevelTrend: PropTypes.number.isRequired,
  seaIceMinimumTrend: PropTypes.number.isRequired,
};

export default Counter;
