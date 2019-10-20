import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { rotate } from 'unitransform';
import { red } from '../utils/colors';

const getColor = isGreen => (isGreen ? rotate(red, 115) : red);

const Stamp = ({ children, green }) => (
  <div>
    <div
      id="stamp"
      css={css`
        font-size: 3rem;
        min-width: 7rem;
        text-align: center;
        font-weight: bold;
        display: inline-block;
        padding: 0.2rem 0.8rem;
        text-transform: uppercase;
        border-radius: 12% / 22%;
        letter-spacing: 2px;
        font-family: Courier, Lucida Sans Typewriter, Lucida Typewriter,
          monospace !important;
        color: ${getColor(green)};
        border: 0.5rem double ${getColor(green)};
        transform: rotate(${green ? `-` : ``}3deg);
        font-size: 2rem;
        margin: 0.8rem 2rem;
      `}
    >
      {children}
    </div>
  </div>
);

Stamp.propTypes = {
  green: PropTypes.bool,
  children: PropTypes.any.isRequired
};

export default Stamp;