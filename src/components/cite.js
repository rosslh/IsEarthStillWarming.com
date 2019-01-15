import React, { memo } from "react";
import { citations } from "./reflist";

const Cite = ({ name }) => (
  <sup
    css={`
      font-weight: regular;
      padding: 0 1px;
    `}
  >
    <a href={`#ref-${name}`}>{citations.findIndex(x => x.name === name) + 1}</a>
  </sup>
);

export default memo(Cite);
