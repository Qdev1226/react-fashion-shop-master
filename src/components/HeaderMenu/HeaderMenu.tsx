import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./HeaderMenu.less";

interface IProps extends IBasicProps {
  mode?: "vertical" | "horizontal" | "inline";
}

export const HeaderMenu = (props: IProps) => {
  const { mode = "horizontal" } = props;

  return (
    <div className="app-menu">
      <Menu mode={mode}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="clothes">
          <Link to="/category/clothes">Clothes</Link>
        </Menu.Item>
        <Menu.Item key="bag">
          <Link to="/category/bag">Bag</Link>
        </Menu.Item>
        <Menu.Item key="shoe">
          <Link to="/category/shoe">Shoe</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
