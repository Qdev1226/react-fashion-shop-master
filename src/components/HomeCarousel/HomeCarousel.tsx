import React from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Col, Row, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { ProductCard } from "../ProductCard/ProductCard";
import { BlurBackground } from "../BlurBackground/BlurBackground";

import { IBasicProps } from "../../interfaces/IBasicProps";
import { ICarouselItem } from "../../interfaces/ICarouselItem";

import "./HomeCarousel.less";
interface ICarouselProps extends IBasicProps {
  carouselItems: ICarouselItem[];
}

export const HomeCarousel = (props: ICarouselProps) => {
  const { carouselItems } = props;

  const carousel: any = React.useRef(null);

  const CarouselItem = (props: any) => {
    const { item } = props;
    const { heading, subHeading, products } = item;

    const { Title } = Typography;

    const nextItem = () => {
      carousel.current.next();
    };

    const prevItem = () => {
      carousel.current.next();
    };

    return (
      <div className="home-carouse__item">
        <Button
          className="item__button item__button--left"
          icon={<LeftOutlined />}
          onClick={prevItem}
        />
        <Button
          className="item__button item__button--right"
          icon={<RightOutlined />}
          onClick={nextItem}
        />
        <BlurBackground image={products[1].image} />
        <Row justify="center">
          <Col span={24}>
            <Title className="item__heading">{heading}</Title>
            <Title className="item__sub-heading" level={2}>
              {subHeading}
            </Title>
          </Col>
        </Row>
        <Row align="middle" gutter={24} justify="center">
          <Col xs={0} sm={0} md={6} lg={5}>
            <Link to={`/product/${products[0].id}`}>
              <img className="item-image" src={products[0].image} alt="" />
            </Link>
          </Col>
          <Col xs={20} sm={12} md={8} lg={8} xl={6}>
            <ProductCard product={products[1]} />
          </Col>
          <Col xs={0} sm={0} md={6} lg={5}>
            <Link to={`/product/${products[2].id}`}>
              <img className="item-image" src={products[2].image} alt="" />
            </Link>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Carousel
      ref={carousel}
      {...{
        autoplay: false,
        className: "home-carousel",
      }}
    >
      {carouselItems.map((item) => (
        <CarouselItem key={item.heading} item={item} />
      ))}
    </Carousel>
  );
};
