import React from "react";

import Counter from "../counter/counter";
import ContentWrapper from "../contentWrapper/contentWrapper";
import fire from "../../assets/fire-icon.svg";
import github from "../../assets/GitHub-Mark-Light-32px.png";
import style from "./header.module.scss";
import { formatDate } from "../../utils/formatDate";

const Header = ({
  currentCo2,
  currentTemp,
  seaLevelTrend,
  seaIceMinimumTrend,
  lastUpdatedAt,
}: {
  currentCo2: number;
  currentTemp: number;
  seaLevelTrend: number;
  seaIceMinimumTrend: number;
  lastUpdatedAt: Date;
}) => (
  <header className={style.header}>
    <div>
      <ContentWrapper className={style.contentWrapper}>
        <h1>
          <img alt="fire icon" height="20px" src={fire.src} />
          {` `}
          IsEarthStillWarming.com
        </h1>
        <nav>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rosslh/isearthstillwarming.com"
          >
            <img src={github.src} alt="risks of climate change" />
          </a>
        </nav>
      </ContentWrapper>
    </div>
    <Counter
      currentCo2={currentCo2}
      currentTemp={currentTemp}
      seaLevelTrend={seaLevelTrend}
      seaIceMinimumTrend={seaIceMinimumTrend}
    />
    <div className={style.attribution}>
      This website is kept updated with data from
      {` `}
      <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
        NASA
      </a>
      ,{` `}
      <a
        href="https://scripps.ucsd.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Scripps Institution of Oceanography
      </a>
      , and{" "}
      <a
        href="https://www.star.nesdis.noaa.gov/sod/lsa/index.php"
        target="_blank"
        rel="noopener noreferrer"
      >
        NOAA Laboratory for Satellite Altimetry
      </a>
      .
      <div className={style.lastUpdated}>
        Last updated on {formatDate(lastUpdatedAt)}
      </div>
    </div>
  </header>
);

export default Header;
