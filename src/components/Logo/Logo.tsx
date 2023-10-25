import React from "react";
import { Row } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./Logo.less";

interface IProps extends IBasicProps {
  showLogo?: boolean;
  showName?: boolean;
}

export const Logo = (props: IProps) => {
  const { className = "", showLogo = true, showName = true } = props;

  return (
    <div className={`logo ${className}`}>
      <Row align="middle">
        {showLogo && <ShoppingOutlined className="logo__icon" />}
        {showName && <div className="logo__text">Fashion Shop</div>}
      </Row>
    </div>
  );
};
