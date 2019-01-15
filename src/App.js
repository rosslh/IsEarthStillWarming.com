import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import { Head } from "react-static";
import "../node_modules/modern-normalize/modern-normalize.css";

function App() {
  return (
    <Root>
      <Head>
        <meta property="og:title" content="Is Earth still warming?" />
        <meta
          property="og:description"
          content="Up-to-date global climate information"
        />
        <meta property="og:url" content="https://isearthstillwarming.com" />
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={require("./assets/apple-touch-icon.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={require("./assets/favicon-32x32.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={require("./assets/favicon-16x16.png")}
        />
        <link rel="manifest" href={require("./assets/site.webmanifest")} />
        <link
          rel="mask-icon"
          href={require("./assets/safari-pinned-tab.svg")}
          color="#cc0000"
        />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#fffafa" />
        <title>Is Earth still warming?</title>
      </Head>
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
              GitHub
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
