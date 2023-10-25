import React from "react";
import { Button, Dropdown, Menu, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { LOGIN_TOKEN } from "../../constants";
import "./HeaderUser.less";

export const HeaderUser = () => {
  const logOut = () => {
    localStorage.removeItem(LOGIN_TOKEN);
    window.location.reload();
  };

  const menu = (
    <Menu>
      <Menu.Item {...{ onClick: logOut }}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Row justify="center">
      <Dropdown overlay={menu}>
        <Button
          className="app-header__btn"
          type="text"
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Row>
  );
};
