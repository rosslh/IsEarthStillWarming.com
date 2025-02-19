import React from "react";
import Stamp from "../stamp/stamp";
import Cite from "../cite/cite";
import style from "./isEarthWarming.module.scss";

const IsEarthWarming = ({
  tenYearWarming,
  currentTemp,
}: {
  tenYearWarming: number;
  currentTemp: number;
}) => {
  const warmedBy = tenYearWarming;
  const citation = <Cite name="tempData" />;
  const currentYear = new Date().getFullYear();
  const target = currentTemp >= 1.5 ? 2 : 1.5;
  const projectedYear = Math.trunc(
    currentYear + (target - currentTemp) / (tenYearWarming / 10)
  );

  if (warmedBy > 0.1) {
    return (
      <div className={style.wrapper}>
        <Stamp>Yes</Stamp>
        <p>
          Over the past 10 years, Earth
          {`'`}s average temperature has risen by
          {` `}
          <span id="tenYearWarming">{tenYearWarming}</span>
          °C.
          {citation}
          {` `}
          {currentTemp < 2
            ? `At this rate, global warming will surpass the +${target}°C
              limit set by the Paris Climate Agreement by ${projectedYear}.`
            : ``}
        </p>
      </div>
    );
  }
  if (warmedBy > 0) {
    return (
      <div className={style.wrapper}>
        <Stamp green>Maybe?</Stamp>
        <p>
          Over the past 10 years, Earth
          {`'`}s temperature has only risen by
          {` `}
          <span id="tenYearWarming">{tenYearWarming}</span>
          °C.
          {citation}
        </p>
      </div>
    );
  }
  return (
    <div className={style.wrapper}>
      <Stamp green>No</Stamp>
      <p>
        Over the past 10 years, Earth
        {`'`}s temperature has dropped by
        {` `}
        <span id="tenYearWarming">{Math.abs(tenYearWarming)}</span>
        °C.
        {citation}
      </p>
    </div>
  );
};

export default IsEarthWarming;
