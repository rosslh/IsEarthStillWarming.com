import React, { type ReactNode } from "react";
import classNames from "classnames";
import style from "./contentWrapper.module.scss";

const ContentWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={classNames(style.contentWrapper, className)}>{children}</div>
);

export default ContentWrapper;
