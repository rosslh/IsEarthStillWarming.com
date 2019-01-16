import React from "react";
import Stamp from "./stamp";
import Cite from "./cite";

const IsEarthWarming = props => {
  const warmedBy = props.tenYearWarming;
  const citation = <Cite name="tempData" />;
  const currentYear = new Date().getFullYear();
  const target = props.latestTempValue >= 1.5 ? 2 : 1.5;
  const projectedYear = Math.trunc(
    currentYear + (target - props.latestTempValue) / (props.tenYearWarming / 10)
  );
  const styles = `
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      > p {
        display: inline-block;
        flex-grow: 1;
        flex-shrink: 1;
        margin: 0;
        flex-basis: 400px;
      }
    `;
  if (warmedBy > 0.1) {
    return (
      <p css={styles}>
        <Stamp>Yes</Stamp>
        <p>
          Over the past 10 years, the Earth's average temperature has risen by{" "}
          {props.tenYearWarming}°C.{citation}{" "}
          {props.latestTempValue < 2
            ? `At this rate, global warming will surpass the +${target}°C
              limit set by the Paris Climate Agreement by ${projectedYear}.`
            : ""}
        </p>
      </p>
    );
  } else if (warmedBy > 0) {
    return (
      <p css={styles}>
        <Stamp green>Not signicantly.</Stamp>
        <p>
          Over the past 10 years, the Earth's temperature has only risen by{" "}
          {props.tenYearWarming}°C.
          {citation}
        </p>
      </p>
    );
  }
  return (
    <p css={styles}>
      <Stamp green>No</Stamp>
      <p>
        Over the past 10 years, the Earth's temperature has dropped by{" "}
        {Math.abs(props.tenYearWarming)}°C.{citation}
      </p>
    </p>
  );
};

export default IsEarthWarming;
