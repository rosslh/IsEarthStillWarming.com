import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import React, { memo } from 'react';
import { citations } from './reflist';

const Cite = ({ name }) => (
  <sup
    css={css`
      font-weight: regular;
      padding: 0 1px;
    `}
  >
    <a href={`#ref-${name}`}>{citations.findIndex((x) => x.name === name) + 1}</a>
  </sup>
);

Cite.propTypes = { name: PropTypes.string.isRequired };

export default memo(Cite);
