import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { IBasicProps } from "../../interfaces/IBasicProps";

import "./CategorySorting.less";
import { capitalize } from "../../utils";

interface IProps extends IBasicProps {
  setSorter: Function;
}

export const CategorySorting = (props: IProps) => {
  const [sortingType, setType] = useState<string>("default");
  const { setSorter } = props;

  const handleClick = (sorter: string) => {
    setType(sorter);
    setSorter(sorter);
  };

  const menu = (
    <Menu>
      <Menu.Item {...{ onClick: () => handleClick("default") }}>
        Default
      </Menu.Item>
      <Menu.Item {...{ onClick: () => handleClick("name") }}>Name</Menu.Item>
      <Menu.Item {...{ onClick: () => handleClick("price") }}>Price</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className="category-sorting" overlay={menu}>
      <div>
        {capitalize(sortingType)} Sorting <DownOutlined />
      </div>
    </Dropdown>
  );
};
