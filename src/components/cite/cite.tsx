import React, { memo } from "react";
import { citations } from "../reflist/reflist";
import style from "./cite.module.scss";

const Cite = ({ name }: { name: string }) => (
  <sup className={style.cite}>
    <a href={`#ref-${name}`}>
      {citations.findIndex((x) => x.name === name) + 1}
    </a>
  </sup>
);

export default memo(Cite);
