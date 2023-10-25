import React from "react";
import { Button, Row, Space } from "antd";

import {
  YoutubeFilled,
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
} from "@ant-design/icons";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./SocialMedia.less";

interface IProps extends IBasicProps {}

export const SocialMedia = (props: IProps) => {
  const { className = "" } = props;

  return (
    <Row align="middle" className={`social-media ${className}`}>
      <Space size="middle">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Button
            className="social-media__btn"
            shape="circle"
            icon={<FacebookFilled />}
          />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <Button
            className="social-media__btn"
            shape="circle"
            icon={<YoutubeFilled />}
          />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <Button
            className="social-media__btn"
            shape="circle"
            icon={<TwitterCircleFilled />}
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <Button
            className="social-media__btn"
            shape="circle"
            icon={<InstagramFilled />}
          />
        </a>
      </Space>
    </Row>
  );
};
