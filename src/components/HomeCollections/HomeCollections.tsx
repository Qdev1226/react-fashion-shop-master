import React from "react";
import { Col, Row, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

import "./HomeCollections.less";
import { BlurBackground } from "../BlurBackground/BlurBackground";
import { Link } from "react-router-dom";

export const HomeCollections = () => {
  const CollectionCard = (props: { image: string; title: string }) => {
    const { image, title } = props;

    return (
      <div className="home-collections__card">
        <BlurBackground image={image} />
        <Row className="card__details" align="middle" justify="end">
          <Col span={14}>
            <img className="card_image" src={image} alt="" />
            <Button
              size="large"
              className="card_btn"
              icon={<RightOutlined />}
              type="link"
            />
          </Col>
          <Col span={10}>
            <div className="card_name">{title}</div>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Row className="home-collections" gutter={[24, 24]} justify="center">
      <Col xs={24} md={12} xl={8}>
        <Link to="/category/clothes">
          <CollectionCard
            image="https://preview.colorlib.com/theme/littlecloset/images/box_1_img.jpg"
            title="Fashion Trends"
          />
        </Link>
      </Col>
      <Col xs={24} md={12} xl={8}>
        <Link to="/category/bag">
          <CollectionCard
            image="https://preview.colorlib.com/theme/littlecloset/images/box_2_img.jpg"
            title="Popular Choice"
          />
        </Link>
      </Col>
      <Col xs={24} md={12} xl={8}>
        <Link to="/category/shoe">
          <CollectionCard
            image="https://preview.colorlib.com/theme/littlecloset/images/box_3_img.jpg"
            title="Winter Collection"
          />
        </Link>
      </Col>
    </Row>
  );
};
