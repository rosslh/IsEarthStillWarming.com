import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import "../node_modules/modern-normalize/modern-normalize.css";

function App() {
  return (
    <Root>
      <div
        css={`
          @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Spectral:400,400i");
          padding: 2rem;
          line-height: 1.6;
          *:not(p) {
            font-family: "Open Sans", sans-serif;
          }
          p {
            font-family: "Spectral", serif;
            font-size: 18px;
            * {
              font-family: "Spectral", serif;
            }
          }
          h1 {
            padding: 1.75rem 0 1rem;
          }
          h2 {
            padding: 1.25rem 0 0;
            font-weight: 600;
          }
          h3 {
            padding: 0.75rem 0 0;
            font-weight: 600;
          }
        `}
      >
        <div
          css={`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
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
            <Link to="/">Home</Link>
            {/* <Link to="/about">About</Link> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/rosslh/isearthstillwarming.com"
            >
              Github
            </a>
          </nav>
          <div>
            <Routes />
          </div>
        </div>
      </div>
    </Root>
  );
}

export default App;
