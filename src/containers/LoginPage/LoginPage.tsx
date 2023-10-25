import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { Logo } from "../../components/Logo/Logo";
import { LOGIN_TOKEN } from "../../constants";
import { IBasicProps } from "../../interfaces/IBasicProps";

import "./LoginPage.less";

interface IProps extends IBasicProps {
  setToken: Function;
}

export const LoginPage = (props: IProps) => {
  const { setToken } = props;
  const { Item } = Form;
  const [form] = Form.useForm();

  const onSubmit = () => {
    const { username, password, remember } = form.getFieldsValue();
    const loginToken = username + password;

    setToken(loginToken);

    if (remember) {
      localStorage.setItem(LOGIN_TOKEN, loginToken);
    }
  };

  const formProps = {
    className: "login-page__form",
    form: form,
  };

  const usernameProps = {
    name: "username",
    rules: [{ required: true, message: "Please input your username!" }],
  };

  const passwordProps = {
    name: "password",
    rules: [{ required: true, message: "Please input your password!" }],
  };

  const rememberProps = {
    name: "remember",
    valuePropName: "checked",
  };

  return (
    <section className="login-page">
      <Row className="login-page__form-wrapper" justify="center" align="middle">
        <Col xs={24} sm={18} md={12} lg={8} xl={6}>
          <Form {...formProps}>
            <Item>
              <Logo className="form__logo" showName={false} />
              <Logo className="form__logo" showLogo={false} />
            </Item>
            <Item {...usernameProps}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Item>
            <Item {...passwordProps}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Item>
            <Item>
              <Item {...rememberProps} noStyle>
                <Checkbox className="form__remember">Remember me</Checkbox>
              </Item>
              <Button
                className="form__btn"
                type="primary"
                htmlType="submit"
                onClick={onSubmit}
              >
                Login
              </Button>
            </Item>
            <p className="form__tips">
              * Hello there! This is just a dummy login form. You can input
              anything to login :
              <span dangerouslySetInnerHTML={{ __html: ")" }} />
            </p>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
