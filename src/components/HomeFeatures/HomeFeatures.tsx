import React from "react";
import { Col, Row } from "antd";

import { FeatureCard } from "../FeatureCard/FeatureCard";

import "./HomeFeatures.less";

export const HomeFeatures = () => {
  return (
    <section className="home-features">
      <Row align="middle" gutter={[0, 12]}>
        <Col xs={24} lg={8}>
          <FeatureCard
            icon="https://preview.colorlib.com/theme/littlecloset/images/icon_1.svg"
            title="Secure Payments"
          />
        </Col>
        <Col xs={24} lg={8}>
          <FeatureCard
            type="primary"
            icon="https://preview.colorlib.com/theme/littlecloset/images/icon_2.svg"
            title="Premium Products"
          />
        </Col>
        <Col xs={24} lg={8}>
          <FeatureCard
            icon="https://preview.colorlib.com/theme/littlecloset/images/icon_3.svg"
            title="Fast & Free Delivery"
          />
        </Col>
      </Row>
    </section>
  );
};
