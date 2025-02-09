import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./contentWrapper.module.scss";

const ContentWrapper = ({ children, className }) => (
  <div className={classNames(style.contentWrapper, className)}>{children}</div>
);

ContentWrapper.propTypes = {
  children: PropTypes.any,
  style: PropTypes.string,
};

export default ContentWrapper;
