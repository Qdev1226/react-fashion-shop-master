import React from "react";
import { Typography, Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./PageHeading.less";
import { capitalize } from "../../utils";
import { Link } from "react-router-dom";

interface IProps extends IBasicProps {
  title: string;
  menu: string[];
  type?: "default" | "section";
}

export const PageHeading = (props: IProps) => {
  const { Title } = Typography;
  const { title, menu, type } = props;
  const location = useLocation();

  return (
    <div
      className={`page-heading ${
        type === "section" ? "page-heading--section" : ""
      }`}
    >
      <Title className="page-heading__title">{title}</Title>

      {Boolean(menu.length) && (
        <Breadcrumb className="page-heading__breadcrumb">
          {location.pathname !== "/" && (
            <Breadcrumb.Item key={"home"}>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          )}
          {menu.map((item) =>
            location.pathname.includes(item) ? (
              <Breadcrumb.Item key={item}>{capitalize(item)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={item}>
                <Link to={`/category/${item}`}>{capitalize(item)}</Link>
              </Breadcrumb.Item>
            )
          )}
        </Breadcrumb>
      )}
    </div>
  );
};
