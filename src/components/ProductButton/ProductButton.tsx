import { Button } from "antd";
import React, { ReactNode } from "react";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./ProductButton.less";

interface IProps extends IBasicProps {
  onClick: () => void;
  icon: ReactNode;
}

export const ProductButton = (props: IProps) => {
  const { className = "", onClick, icon } = props;

  return (
    <Button
      className={`product-btn ${className}`}
      icon={icon}
      onClick={onClick}
    />
  );
};
