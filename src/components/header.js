import React from "react";
import { lighten } from "unitransform";

import Counter from "../components/counter";
import { red, redDark } from "../assets/colors";
import ContentWrapper from "./contentWrapper";

const Header = props => (
  <header
    css={`
      background-color: ${red};
      color: white !important;
      a {
        color: white !important;
      }
      box-shadow: inset 0 -6rem 12rem -6rem ${redDark}44,
        0px 4px 8px 0px rgba(34, 34, 34, 0.3);
      border-radius: 0% 0% 30% 30% / 0% 0% 5% 5%;
      z-index: 4;
      margin-bottom: 1.5rem;
    `}
  >
    <div
      css={`
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
          css={`
            margin: 0;
            padding: 0 !important;
            line-height: 40px;
            font-size: 20px;
            font-weight: 600;
          `}
        >
          IsEarthStillWarming.com
        </h1>
        <nav
          css={`
            a {
              display: inline-block;
              margin: 0 6px;
              &:first-child {
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
            GitHub
          </a>
        </nav>
      </ContentWrapper>
    </div>
    <Counter {...props} />
    <div
      css={`
        color: ${lighten(red, 40)};
        font-size: 15px !important;
        text-align: center;
        margin: 0;
        padding: 2rem;
        font-family: "Open Sans", sans-serif !important;
      `}
    >
      This website is kept up-to-date with climate data provided by NASA and
      Scripps Institution of Oceanography
    </div>
  </header>
);

export default Header;
