import React from "react";

const ContentWrapper = ({ children, style }) => (
  <div
    css={`
      max-width: 800px;
      width: 80%;
      margin: 0 auto;
      ${style}
    `}
  >
    {children}
  </div>
);

export default ContentWrapper;
