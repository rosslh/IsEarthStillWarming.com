import React from "react";

const Counter = ({ currentCo2, currentTemp }) => {
  return (
    <div
      css={`
        background-color: #fafafa;
        border: 1px solid #eee;
        padding: 0 1rem;
        border-radius: 6px;
        text-align: center;
        box-shadow: 0px 4px 8px 0px rgba(34, 34, 34, 0.2);
      `}
    >
      <h2>Climate vital signs</h2>
      <div
        css={`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        > div {
          flex-grow: 1
          min-height: 80px;
          padding: 0 1.5rem 2rem;
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
          <strong>{currentCo2}ppm</strong>
        </div>
        <div>
          <div>Global temperature deviation from average</div>
          <strong>+{currentTemp}°C</strong>
        </div>
      </div>
    </div>
  );
};

export default Counter;
