import React from "react";
import { Avatar, Card, Space } from "antd";

import "./FeatureCard.less";
import { IBasicProps } from "../../interfaces/IBasicProps";
import { getClassName } from "../../utils";

interface IProps extends IBasicProps {
  icon: string;
  title: string;
  description?: string;
  type?: "primary" | "";
}

export const FeatureCard = (props: IProps) => {
  const { className, icon, title, description = "", type = "" } = props;
  const { Meta } = Card;

  const MyText = (props: any) => {
    const { title, description } = props;

    return (
      <Space
        direction="vertical"
        align={description === "" ? "center" : "start"}
      >
        <div className="feature-card__title">{title}</div>
        <div className="feature-card__description">{description}</div>
      </Space>
    );
  };

  return (
    <Card
      className={`feature-card ${className} 
      ${getClassName("feature-card", type)}`}
    >
      <Meta
        avatar={<Avatar shape="square" src={icon} />}
        title={<MyText title={title} description={description} />}
      />
    </Card>
  );
};
