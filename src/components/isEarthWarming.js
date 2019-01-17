import React from "react";
import PropTypes from "prop-types";

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
      <div css={styles}>
        <Stamp>No</Stamp>
        <p>
          Over the past 10 years, Earth's average temperature has risen by{" "}
          <span id="tenYearWarming">{props.tenYearWarming}</span>°C.{citation}{" "}
          {props.latestTempValue < 2
            ? `At this rate, global warming will surpass the +${target}°C
              limit set by the Paris Climate Agreement by ${projectedYear}.`
            : ""}
        </p>
      </div>
    );
  } else if (warmedBy > 0) {
    return (
      <div css={styles}>
        <Stamp green>Maybe?</Stamp>
        <p>
          Over the past 10 years, Earth's temperature has only risen by{" "}
          <span id="tenYearWarming">{props.tenYearWarming}</span>°C.
          {citation}
        </p>
      </div>
    );
  }
  return (
    <div css={styles}>
      <Stamp green>Yes</Stamp>
      <p>
        Over the past 10 years, Earth's temperature has dropped by{" "}
        <span id="tenYearWarming">{Math.abs(props.tenYearWarming)}</span>°C.
        {citation}
      </p>
    </div>
  );
};

IsEarthWarming.propTypes = {
  tenYearWarming: PropTypes.number.isRequired,
  latestTempValue: PropTypes.number.isRequired
};

export default IsEarthWarming;
