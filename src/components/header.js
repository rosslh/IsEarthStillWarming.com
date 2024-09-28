import React from "react";
import PropTypes from "prop-types";
import { lighten } from "unitransform";
import { css } from "@emotion/react";

import Counter from "./counter";
import { red, redDark } from "../utils/colors";
import { formatDate } from "../utils/formatDate";
import ContentWrapper from "./contentWrapper";
import fire from "../../public/assets/fire-icon.svg";

const Header = ({
  currentCo2,
  currentTemp,
  seaLevelTrend,
  seaIceMinimumTrend,
  lastUpdatedAt,
}) => (
  <header
    css={css`
      background-color: ${red};
      color: white !important;
      a {
        color: white !important;
      }
      box-shadow: inset 0 -6rem 12rem -6rem ${redDark}44,
        0px 4px 8px 0px rgba(34, 34, 34, 0.3);
      border-radius: 0% 0% 50% 50% / 0% 0% 0.8rem 0.8rem;
      margin-bottom: 1.75rem;
    `}
  >
    <div
      css={css`
        background-color: ${redDark};
      `}
    >
      <ContentWrapper
        style={`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <h1
          css={css`
            margin: 0;
            padding: 0 !important;
            line-height: 40px;
            font-size: 20px;
            display: flex;
            align-items: center;
            font-weight: 600;
          `}
        >
          <img
            css={css`
              margin-right: 0.6rem;
            `}
            alt="fire icon"
            height="20px"
            src={fire}
          />
          {` `}
          IsEarthStillWarming.com
        </h1>
        <nav
          css={css`
            a {
              display: flex;
              align-items: center;
              &:first-of-type {
                margin-left: 0;
              }
            }
          `}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rosslh/isearthstillwarming.com"
          >
            <img
              css={css`
                height: 20px;
              `}
              src={`assets/GitHub-Mark-Light-32px.png`}
              alt="risks of climate change"
            />
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
    <div
      css={css`
        color: ${lighten(red, 48)};
        font-size: 15px !important;
        text-align: center;
        margin: 0 auto;
        padding: 2rem 1rem;
        font-family: "Open Sans", sans-serif !important;
        max-width: 530px;
      `}
    >
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
      <div
        css={css`
          margin-top: 1rem;
        `}
      >
        Last updated on {formatDate(lastUpdatedAt)}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  currentCo2: PropTypes.number.isRequired,
  currentTemp: PropTypes.number.isRequired,
  seaLevelTrend: PropTypes.number.isRequired,
  seaIceMinimumTrend: PropTypes.number.isRequired,
};

export default Header;
