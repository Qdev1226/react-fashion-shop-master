import React from "react";
import { Link } from "react-router-dom";
import { Menu, Modal } from "antd";

import "./FooterMenu.less";
import { RightOutlined } from "@ant-design/icons";

export const FooterMenu = () => {
  const showModal = () => {
    Modal.info({
      title: "Sorry!",
      content: (
        <div>
          <p>Only Contact page is available at the moment! ( ^_^')</p>
        </div>
      ),
      centered: true,
    });
  };

  return (
    <div className="footer-menu">
      <Menu mode="vertical">
        <Menu.Item key="service" icon={<RightOutlined />}>
          <Link to="#" onClick={showModal}>
            Customer Service
          </Link>
        </Menu.Item>
        <Menu.Item key="policy" icon={<RightOutlined />}>
          <Link to="#" onClick={showModal}>
            Return Policy
          </Link>
        </Menu.Item>
        <Menu.Item key="guide" icon={<RightOutlined />}>
          <Link to="#" onClick={showModal}>
            Size Guide
          </Link>
        </Menu.Item>
        <Menu.Item key="term" icon={<RightOutlined />}>
          <Link to="#" onClick={showModal}>
            Term and Conditions
          </Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<RightOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
