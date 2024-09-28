import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

const ContentWrapper = ({ children, style }) => (
  <div
    css={css`
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

ContentWrapper.propTypes = {
  children: PropTypes.any,
  style: PropTypes.string,
};

export default ContentWrapper;
