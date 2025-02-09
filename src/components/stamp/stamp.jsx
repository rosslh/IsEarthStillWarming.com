import React from "react";
import PropTypes from "prop-types";
import { rotate } from "unitransform";
import style from "./stamp.module.scss";
import { red } from "../../utils/colors";
import classNames from "classnames";

const getColor = (isGreen) => (isGreen ? rotate(red, 115) : red);

const Stamp = ({ children, green }) => (
  <div>
    <div
      id="stamp"
      className={classNames(style.stamp, { [style.green]: green })}
    >
      {children}
    </div>
  </div>
);

Stamp.propTypes = {
  green: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

export default Stamp;
