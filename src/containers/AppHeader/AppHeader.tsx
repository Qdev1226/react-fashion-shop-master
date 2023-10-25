import React, { useState } from "react";
import { Row, Col, Layout, Affix, Button } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";

import { Logo } from "../../components/Logo/Logo";
import { HeaderMenu } from "../../components/HeaderMenu/HeaderMenu";
import { HeaderDrawer } from "../../components/HeaderDrawer/HeaderDrawer";
import { HeaderSearch } from "../../components/HeaderSearch/HeaderSearch";
import { HeaderContact } from "../../components/HeaderContact/HeaderContact";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";

import "./AppHeader.less";
import { HeaderUser } from "../../components/HeaderUser/HeaderUser";
import { Link } from "react-router-dom";

export const AppHeader = () => {
  const { Header } = Layout;

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Affix offsetTop={0}>
        <Header className="app-header">
          <Row className="app-header__content" align="middle">
            {/* Logo */}
            <Col xs={18} sm={18} md={8} lg={6} xl={5} xxl={4}>
              <Logo />
            </Col>

            {/* Menu and Drawer Button */}
            <Col xs={0} sm={0} md={6} lg={9} xl={10} xxl={10}>
              <HeaderMenu />
            </Col>
            <Col xs={2} sm={2} md={0} lg={0} xl={0} xxl={0}>
              <Row justify="center">
                <Button
                  className="app-header__btn"
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={showDrawer}
                />
              </Row>
            </Col>

            {/* Search Input */}
            <Col xs={0} sm={0} md={6} lg={7} xl={7} xxl={5}>
              <Row align="middle" justify="center">
                <HeaderSearch className="app-header__search" />
              </Row>
            </Col>

            {/* Icon */}
            <Col xs={2} sm={2} md={2} lg={1} xl={1} xxl={1}>
              <HeaderUser />
            </Col>
            <Col xs={2} sm={2} md={2} lg={1} xl={1} xxl={1}>
              <Row justify="center">
                <Link to="/cart" className="app-header_btn-wrapper">
                  <Button
                    className="app-header__btn"
                    type="text"
                    icon={<ShoppingCartOutlined />}
                  />
                </Link>
              </Row>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={3}>
              <Link to="/contact" className="app-header_btn-wrapper">
                <HeaderContact justify="space-around" />
              </Link>
            </Col>
          </Row>
        </Header>
      </Affix>
      <HeaderDrawer onClose={onClose} visible={visible}>
        <HeaderSearch />
        <HeaderMenu mode="vertical" />
        <HeaderContact />
        <SocialMedia />
      </HeaderDrawer>
    </>
  );
};
