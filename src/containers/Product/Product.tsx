import React, { useEffect } from "react";
import { Col, Row, Image, Space, Modal } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { fetchProductById } from "../../store/slices/productsSlice";

import { Container } from "../../components/Container/Container";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { ProductPrice } from "../../components/ProductPrice/ProductPrice";
import { ProductRating } from "../../components/ProductRating/ProductRating";
import { ProductSize } from "../../components/ProductSize/ProductSize";
import { ProductButton } from "../../components/ProductButton/ProductButton";
import { ProductName } from "../../components/ProductName/ProductName";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";

import "./Product.less";

export const Product = () => {
  let { id } = useParams<{ id: string }>();

  const product = useAppSelector((state) => state.products.product);
  const dispatch = useAppDispatch();

  const {
    category,
    name,
    image,
    rating,
    reviews,
    price,
    sizes,
    desc,
  } = product;

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

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
    <section className="product">
      <PageHeading type="section" title="Product Page" menu={[category]} />
      <Container>
        <Space direction="vertical" size="large">
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} md={12} lg={9}>
              <Image src={image} />
            </Col>
            <Col xs={24} md={12} lg={9}>
              <Space direction="vertical" size="large">
                <ProductName name={name} category={category} />

                <Space size="large">
                  <ProductRating className="product__rating" rating={rating} />
                  <div className="product__review">
                    {rating} out of ({reviews}) Reviews
                  </div>
                </Space>

                <ProductPrice
                  className="product__price"
                  price={price}
                  size="large"
                />

                <ProductSize sizes={sizes} />

                <p className="product__description">{desc}</p>

                <Row className="product__btn-group">
                  <Col className="product__btn" span={12} onClick={showModal}>
                    <ProductButton
                      icon={<HeartOutlined />}
                      onClick={() => {}}
                    />
                  </Col>
                  <Col className="product__btn" span={12} onClick={showModal}>
                    <ProductButton
                      icon={<ShoppingCartOutlined />}
                      onClick={() => {}}
                    />
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} lg={9}>
              <FeatureCard
                icon="https://preview.colorlib.com/theme/littlecloset/images/boxes_1.png"
                title="Size Guide"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </Col>
            <Col xs={24} lg={9}>
              <FeatureCard
                icon="https://preview.colorlib.com/theme/littlecloset/images/icon_3.svg"
                title="Shipping"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </Col>
          </Row>
        </Space>
      </Container>
    </section>
  );
};
