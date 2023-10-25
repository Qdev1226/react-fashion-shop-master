import { Card, Col, InputNumber, Modal, Row, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { AppButton } from "../../components/AppButton/AppButton";
import {
  CartBox,
  CartBoxInput,
  CartBoxHeading,
  CartBoxDescription,
  CartBoxRadioGroup,
  CartBoxBill,
} from "../../components/CartBox/CartBox";
import { Container } from "../../components/Container/Container";

import "./Cart.less";

export const Cart = () => {
  const { Column } = Table;

  const { Meta } = Card;

  const dataSource = [
    {
      key: "1",
      product: "Cool Clothing with Brown Stripes",
      color: 32,
      size: "L",
      price: "$3.99",
      quantity: "2",
      total: "$3.99",
      img:
        "https://preview.colorlib.com/theme/littlecloset/images/cart_item_1.jpg",
    },
  ];

  const handleOnChange = () => {};

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
    <section className="cart">
      <Container>
        <Space direction="vertical">
          <Table
            dataSource={dataSource}
            pagination={false}
            scroll={{ x: "100%" }}
          >
            <Column title="Product" dataIndex="key" key="key" align="center" />
            <Column
              className="cart__product"
              title=""
              dataIndex="product"
              key="product"
              render={(product) => (
                <Card bordered={false} className="cart-product__card">
                  <Meta
                    avatar={
                      <img
                        src="https://preview.colorlib.com/theme/littlecloset/images/cart_item_1.jpg"
                        alt=""
                      />
                    }
                    title={product}
                    description="This is the description"
                  />
                </Card>
              )}
            />
            <Column
              title="Color"
              dataIndex="color"
              key="color"
              align="center"
            />
            <Column title="Size" dataIndex="size" key="size" align="center" />
            <Column
              title="Price"
              dataIndex="price"
              key="price"
              align="center"
            />
            <Column
              className="cart__column-quantity"
              title="Quantity"
              key="quantity"
              render={(data) => (
                <InputNumber
                  className="cart__input-quantity"
                  min={1}
                  max={10}
                  // value={data.quantity}
                  defaultValue={1}
                  onChange={handleOnChange}
                />
              )}
            />
            <Column
              title="Total"
              dataIndex="total"
              key="total"
              align="center"
            />
          </Table>
          <Space className="cart__btn-group" size="middle">
            <AppButton size="large">
              <div onClick={showModal}>Clear Cart</div>
            </AppButton>
            <Link to="/">
              <AppButton type="primary" size="large">
                Continue Shopping
              </AppButton>
            </Link>
          </Space>
        </Space>
      </Container>
      <Container>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={18} lg={12}>
            <CartBox>
              <CartBoxHeading heading="Coupon code" />
              <Space>
                <CartBoxInput />
                <AppButton type="primary" size="large">
                  <div onClick={showModal}>Apply</div>
                </AppButton>
              </Space>
              <CartBoxDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit neque doloribus odit natus earum recusandae dolor?
              </CartBoxDescription>

              <CartBoxHeading heading="Shipping Method" />
              <CartBoxRadioGroup
                radios={[
                  {
                    label: "Next Day Delivery",
                    value: "4.99",
                  },
                  {
                    label: "Standard Delivery",
                    value: "1.99",
                  },
                  {
                    label: "Personal Pickup",
                    value: "FREE",
                  },
                ]}
              />
            </CartBox>
          </Col>
          <Col xs={24} sm={18} lg={12}>
            <CartBox>
              <CartBoxHeading heading="Cart Total" />
              <CartBoxBill
                bills={[
                  {
                    label: "Next Day Delivery",
                    value: "4.99",
                  },
                  {
                    label: "Next Day Delivery",
                    value: "2.99",
                  },
                  {
                    label: "Personal Pickup",
                    value: "FREE",
                  },
                ]}
              />
              <AppButton type="primary" size="large" fluid>
                <Link to="/checkout"> PROCEED TO CHECKOUT</Link>
              </AppButton>
            </CartBox>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
