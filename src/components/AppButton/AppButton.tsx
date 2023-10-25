import React from "react";
import { Button } from "antd";
import { ButtonType } from "antd/lib/button";
import { SizeType } from "antd/lib/config-provider/SizeContext";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./AppButton.less";

interface IProps extends IBasicProps {
  fluid?: boolean;
  type?: ButtonType;
  size?: SizeType;
}

export const AppButton = (props: IProps) => {
  const {
    className = "",
    children,
    size = "middle",
    type,
    fluid = false,
  } = props;

  return (
    <Button
      className={`app-btn ${className} ${fluid ? "app-btn--fluid" : ""}`}
      type={type}
      size={size}
    >
      {children}
    </Button>
  );
};
