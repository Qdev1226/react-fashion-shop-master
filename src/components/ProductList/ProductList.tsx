import { Col, Row } from "antd";
import React from "react";

import { IBasicProps } from "../../interfaces/IBasicProps";
import { IProduct } from "../../interfaces/IProduct";
import { ProductCard } from "../ProductCard/ProductCard";

import "./ProductList.less";

interface IProps extends IBasicProps {
  productList?: IProduct[];
}

export const ProductList = (props: IProps) => {
  const { productList = [] } = props;

  return (
    <div style={{ paddingTop: 8 }}>
      <Row gutter={[24, 24]} justify="center">
        {productList.map((product) => (
          <Col key={product.id} xs={24} sm={18} md={12} lg={8} xl={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
