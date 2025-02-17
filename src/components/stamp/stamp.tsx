import React, { type ReactNode } from "react";
import style from "./stamp.module.scss";
import classNames from "classnames";

const Stamp = ({
  children,
  green,
}: {
  children: ReactNode;
  green?: boolean;
}) => (
  <div>
    <div
      id="stamp"
      className={classNames(style.stamp, { [style.green]: green })}
    >
      {children}
    </div>
  </div>
);

export default Stamp;
