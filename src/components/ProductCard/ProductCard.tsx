import React from "react";
import { Card, Col, Row, Space } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { IBasicProps } from "../../interfaces/IBasicProps";
import { IProduct } from "../../interfaces/IProduct";

import "./ProductCard.less";
import { ProductRating } from "../ProductRating/ProductRating";
import { ProductPrice } from "../ProductPrice/ProductPrice";
import { ProductButton } from "../ProductButton/ProductButton";
import { Link } from "react-router-dom";

interface IProps extends IBasicProps {
  product: IProduct;
}

export const ProductCard = (props: IProps) => {
  const { Meta } = Card;
  const { product } = props;
  const { image, name, category, rating, price, id } = product;

  const onClick = () => {
    console.log("onClick :");
  };

  return (
    <Link to={`/product/${id}`}>
      <Card
        className="product-card"
        cover={<img alt={name} src={image} />}
        actions={[
          <ProductButton
            className="product-card__btn"
            icon={<HeartOutlined />}
            onClick={onClick}
          />,
          <ProductButton
            className="product-card__btn"
            icon={<ShoppingCartOutlined />}
            onClick={onClick}
          />,
        ]}
      >
        <Row gutter={[6, 6]}>
          <Col span={16}>
            <Meta title={name} description={`in ${category}`} />
          </Col>
          <Col className="product-card__meta-right" span={8}>
            <Space direction="vertical">
              <ProductRating className="product-card__rating" rating={rating} />
              <ProductPrice className="product-card__price" price={price} />
            </Space>
          </Col>
        </Row>
      </Card>
    </Link>
  );
};
