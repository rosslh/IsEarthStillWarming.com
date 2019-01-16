import React from "react";
import { Link } from "@reach/router";
import Counter from "../components/counter";
import { red, redDark } from "../assets/colors";

const Header = props => (
  <header
    css={`
      background-color: ${red};
      color: white !important;
      a {
        color: white !important;
      }
      box-shadow: 0px 4px 8px 0px rgba(34, 34, 34, 0.2);
      border-radius: 0% 0% 30% 30% / 0% 0% 5% 5%;
      border-bottom: 4px solid ${redDark};
    `}
  >
    <div
      css={`
        max-width: 800px;
        width: 80%;
        margin: 0 auto;
      `}
    >
      <div
        css={`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <h1
          css={`
            margin: 0;
            font-size: 25px;
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
      </div>
      <Counter {...props} />
    </div>
  </header>
);

export default Header;
