import React from "react";
import { Button, Row } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

import "./HeaderContact.less";
import { IBasicProps } from "../../interfaces/IBasicProps";
import { RowProps } from "antd/lib/row";

interface IProps extends IBasicProps {
  justify?: RowProps["justify"];
}

export const HeaderContact = (props: IProps) => {
  const { justify = "start" } = props;

  return (
    <Row className="header-contact" align="middle" justify={justify}>
      <Button
        className="app-header__btn"
        type="text"
        icon={<PhoneOutlined className="header-contact__icon" />}
      />
      <div className="header-contact__phone-num">+1 912-252-7350</div>
    </Row>
  );
};
