import React from "react";
import { rotate } from "unitransform";

const getColor = isGreen => (isGreen ? rotate("#b7292f", 115) : "#b7292f");

const Stamp = ({ children, green }) => (
  <div>
    <div
      css={`
        font-size: 3rem;
        font-weight: bold;
        display: inline-block;
        padding: 0.2rem 0.8rem;
        text-transform: uppercase;
        border-radius: 1rem;
        letter-spacing: 2px;
        font-family: Courier, Lucida Sans Typewriter, Lucida Typewriter,
          monospace !important;
        color: ${getColor(green)};
        border: 0.5rem double ${getColor(green)};
        transform: rotate(${green ? "-" : ""}3deg);
        font-size: 2rem;
        margin: 0.5rem 2rem 2rem;
      `}
    >
      {children}
    </div>
  </div>
);

export default Stamp;
