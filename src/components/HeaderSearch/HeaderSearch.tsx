import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./HeaderSearch.less";

interface IProps extends IBasicProps {}

export const HeaderSearch = (props: IProps) => {
  const { className = "" } = props;

  return (
    <Input
      className={`header__search ${className}`}
      allowClear
      size="large"
      placeholder="Search Item"
      suffix={<SearchOutlined onClick={() => alert("dsadasd")} />}
    />
  );
};
