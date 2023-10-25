import React from "react";
import { Button, Col, Input, Layout, Modal, Row, Space } from "antd";

import { Logo } from "../../components/Logo/Logo";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";

import "./AppFooter.less";
import { FooterMenu } from "../../components/FooterMenu/FooterMenu";
import { PlusOutlined } from "@ant-design/icons";

export const AppFooter = () => {
  const { Footer } = Layout;

  const showModal = () => {
    Modal.info({
      title: "Sorry!",
      content: (
        <div>
          <p>This function is not available at the moment... : (</p>
        </div>
      ),
      centered: true,
    });
  };

  return (
    <Footer className="app-footer">
      <Row gutter={[48, 64]}>
        {/* Shop description */}
        <Col xs={24} md={12} lg={8}>
          <Space size={"large"} direction="vertical">
            <Logo className="app-footer__logo" />
            <div className="app-footer__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              maiores mollitia odio totam. Natus perferendis dolores aliquam
              porro? Tempora explicabo quidem adipisci quam aliquam voluptatum,
              magni at sapiente minima aut!
            </div>
          </Space>
        </Col>

        {/* Menu description */}
        <Col xs={24} md={12} lg={8}>
          <h1 className="app-footer__heading">Support</h1>
          <FooterMenu />
        </Col>

        {/* Subcribe and Links */}
        <Col xs={24} md={12} lg={8}>
          <Space size={"large"} direction="vertical">
            <Row>
              <h1 className="app-footer__heading">Stay in Touch</h1>
              <Input
                allowClear
                className="app-footer__subscribe"
                size="large"
                placeholder="Subcribe to our latest news"
                suffix={
                  <Button
                    shape="circle"
                    icon={<PlusOutlined />}
                    onClick={showModal}
                  />
                }
              />
            </Row>
            <Row>
              <div>
                <h1 className="app-footer__heading">Social</h1>
                <SocialMedia className="app-footer__social-link" />
              </div>
            </Row>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};
