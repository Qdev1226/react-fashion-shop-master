import React from "react";

import "./Container.less";
import { IBasicProps } from "../../interfaces/IBasicProps";

interface IProps extends IBasicProps {
  fluid?: boolean;
}

export const Container = (props: IProps) => {
  const { className = "", children, fluid } = props;

  return (
    <div
      className={`container ${className} ${fluid ? "container--fluid" : ""}`}
    >
      {children}
    </div>
  );
};
