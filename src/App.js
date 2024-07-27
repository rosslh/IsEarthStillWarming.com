import React from "react";
import { Root, Routes, addPrefetchExcludes, Head } from "react-static";
//
import { Router } from "@reach/router";

import { css, Global } from "@emotion/react";
import "modern-normalize/modern-normalize.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes([`dynamic`]);

function App() {
  return (
    <Root>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Spectral:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <title>Global warming information and data</title>
        <meta
          name="description"
          content="Up-to-date global climate information"
        />

        <meta itemProp="name" content="Global warming information and data" />
        <meta
          itemProp="description"
          content="Up-to-date global climate information"
        />
        <meta
          itemProp="image"
          content="https://isearthstillwarming.com/assets/siteImage.png"
        />

        <meta property="og:url" content="https://isearthstillwarming.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Global warming information and data"
        />
        <meta
          property="og:description"
          content="Up-to-date global climate information"
        />
        <meta
          property="og:image"
          content="https://isearthstillwarming.com/assets/siteImage.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Global warming information and data"
        />
        <meta
          name="twitter:description"
          content="Up-to-date global climate information"
        />
        <meta
          name="twitter:image"
          content="https://isearthstillwarming.com/assets/siteImage.png"
        />

        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={require(`../public/assets/apple-touch-icon.png`)}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={require(`../public/assets/favicon-32x32.png`)}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={require(`../public/assets/favicon-16x16.png`)}
        />
      </Head>
      <div
        css={css`
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
            padding: 1.75rem 0 0;
            font-weight: 600;
          }
          h3 {
            padding: 0.75rem 0 0;
            font-weight: 600;
          }
        `}
      >
        <Global
          styles={css`
            html {
              scroll-behavior: smooth;
            }
          `}
        />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
