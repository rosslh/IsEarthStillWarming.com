import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import ContentWrapper from "./contentWrapper";
import CO2 from "./co2";

const Counter = ({
  currentCo2,
  currentTemp,
  seaLevelTrend,
  seaIceMinimumTrend,
}) => (
  <ContentWrapper
    style={`
      padding: 0;
      text-align: center;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        @media (max-width: 500px) {
          flex-direction: column;
          flex-wrap: none;
        }

        > div {
          flex-grow: 1
          min-height: 80px;
          padding: 2rem 1rem 0;
          > div {
            font-size: 0.9rem;
          }
          > strong {
            padding-top: 0.75rem;
            display: block;
            font-weight: bold;
            font-size: 1.5rem;
          }
        }
      `}
    >
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
