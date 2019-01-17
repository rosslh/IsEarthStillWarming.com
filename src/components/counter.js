import React from "react";
import PropTypes from "prop-types";
import ContentWrapper from "./contentWrapper";

const Counter = ({ currentCo2, currentTemp }) => (
  <ContentWrapper
    style={`
      padding: 0;
      margin-top: 2.5rem;
      border-radius: 6px;
      text-align: center;
    `}
  >
    <div
      css={`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        > div {
          flex-grow: 1
          min-height: 80px;
          padding: 0 1.5rem 0;
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
        <div>Atmospheric CO2</div>
        <strong id="currentCo2Counter">{currentCo2}ppm</strong>
      </div>
      <div>
        <div>Global temperature anomaly</div>
        <strong id="currentTempCounter">+{currentTemp}°C</strong>
      </div>
    </div>
  </ContentWrapper>
);

Counter.propTypes = {
  currentCo2: PropTypes.number.isRequired,
  currentTemp: PropTypes.number.isRequired
};

export default Counter;
