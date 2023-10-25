import React from "react";
import { Checkbox, Col, Modal, Row, Space } from "antd";

import { AppButton } from "../../components/AppButton/AppButton";
import { Container } from "../../components/Container/Container";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import {
  CartBox,
  CartBoxInput,
  CartBoxHeading,
  CartBoxDescription,
  CartBoxRadioGroup,
  CartBoxBill,
} from "../../components/CartBox/CartBox";

import "./Checkout.less";

export const Checkout = () => {
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
    <section className="checkout">
      <PageHeading
        type="section"
        title="Checkout"
        menu={["Home", "Checkout"]}
      />
      <Container>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={16} lg={10}>
            <CartBox>
              <CartBoxHeading heading="Billing" />

              <Space
                className="checkout__input-group"
                direction="vertical"
                size="large"
              >
                <Space>
                  <CartBoxInput placeholder="First Name" />
                  <CartBoxInput placeholder="Last Name" />
                </Space>
                <CartBoxInput placeholder="Company" />
                <CartBoxInput placeholder="Country" />
                <CartBoxInput placeholder="Address Line 1" />
                <CartBoxInput placeholder="Address Line 2" />
                <CartBoxInput placeholder="Zip Code" />
                <CartBoxInput placeholder="City / Town" />
                <CartBoxInput placeholder="Province" />
                <CartBoxInput placeholder="Zip Code" />
                <CartBoxInput placeholder="Phone No." />
                <CartBoxInput placeholder="Email" />

                <Space direction="vertical">
                  <Checkbox>Terms and conditions</Checkbox>
                  <Checkbox>Subscribe to our newsletter</Checkbox>
                </Space>
              </Space>
            </CartBox>
          </Col>
          <Col xs={24} sm={16} lg={10}>
            <CartBox>
              <div className="checkout__input-group">
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
              </div>

              <CartBoxHeading heading="Payment" />
              <CartBoxRadioGroup
                radios={[
                  {
                    label: "Payal",
                    value: "",
                  },
                  {
                    label: "Cash on Delivery",
                    value: "",
                  },
                  {
                    label: "Credit Card",
                    value: "",
                  },
                ]}
              />
              <CartBoxDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda dolore esse voluptatem magni earum itaque optio
                officia reiciendis incidunt.
              </CartBoxDescription>
              <AppButton type="primary" size="large" fluid>
                <div onClick={showModal}> PLACE ORDER</div>
              </AppButton>
            </CartBox>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
