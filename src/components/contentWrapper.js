import React from 'react';

const ContentWrapper = ({ children, style }) => (
  <div
    css={`
      max-width: 850px;
      width: 80%;
      margin: 0 auto;
      @media (max-width: 700px) {
        width: 90%;
      }
      ${style}
    `}
  >
    {children}
  </div>
);

export default ContentWrapper;
