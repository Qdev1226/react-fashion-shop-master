import React, { useState } from "react";
import { Col, Modal, Radio, Row, Space } from "antd";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import { PageHeading } from "../../components/PageHeading/PageHeading";
import { Container } from "../../components/Container/Container";
import {
  CartBox,
  CartBoxInput,
  CartBoxHeading,
  CartBoxDescription,
  CartBoxTextArea,
} from "../../components/CartBox/CartBox";

import "./Contact.less";
import { AppButton } from "../../components/AppButton/AppButton";

export const Contact = () => {
  const [location, setLocation] = useState<string>("HCM");

  const onChange = (event: any) => {
    setLocation(event.target.value);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const getLatitude = (location: string) => {
    switch (location) {
      case "HCM":
        return {
          lat: 10.7697,
          lng: 106.7027,
        };
      case "HN":
        return {
          lat: 21.0114,
          lng: 105.85,
        };
    }
  };

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
    <section className="contact">
      <PageHeading type="section" title="Contact Us" menu={[]} />
      <Container>
        <Row gutter={[24, 24]} justify="center">
          <Col md={12} xl={10}>
            <CartBox className="contact__box">
              <CartBoxHeading heading="How can we help?" />
              <CartBoxDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                explicabo non placeat, doloremque accusantium dicta soluta unde
                nostrum expedita blanditiis consequuntur eaque fuga aliquid
                amet! Veritatis eum ipsum iure illum.
              </CartBoxDescription>
              <CartBoxInput
                placeholder="Your Name"
                className="contact__input"
              />
              <CartBoxInput placeholder="Email" className="contact__input" />
              <CartBoxTextArea
                placeholder="Message"
                className="contact__textarea"
                autoSize={{ minRows: 6, maxRows: 10 }}
              />
              <AppButton type="primary" size="large" fluid>
                <div onClick={showModal}> SEND MESSAGE</div>
              </AppButton>
            </CartBox>
          </Col>
          <Col md={12} xl={10} className="contact__map-wrapper">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={getLatitude(location)}
                zoom={15}
              >
                <Marker position={getLatitude(location)} />
              </GoogleMap>
            )}
            <Radio.Group
              className="contact__address-group"
              value={location}
              onChange={onChange}
            >
              <Space direction="vertical">
                <Radio className="address" value={"HCM"}>
                  Bitexco Financial Tower (2 Hải Triều, Bến Nghé, Quận 1, TP. Hồ
                  Chí Minh)
                </Radio>
                <Radio className="address" value={"HN"}>
                  Vincom Center Ba Trieu (191 Bà Triệu, Lê Đại Hành, Hai Bà
                  Trưng, Hà Nội)
                </Radio>
              </Space>
            </Radio.Group>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              vero quisquam architecto, rem iure officia ipsam ab a voluptates
              qui magni. Fugit ipsam, alias minus itaque distinctio quas qui
              commodi!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
