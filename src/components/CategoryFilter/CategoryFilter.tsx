import React from "react";
import { Menu, Tooltip } from "antd";
import { IBasicProps } from "../../interfaces/IBasicProps";

import "./CategoryFilter.less";

interface IProps extends IBasicProps {
  setFilter: Function;
}

export const CategoryFilter = (props: IProps) => {
  const { setFilter } = props;

  const handleClick = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="category-filter">
      <Menu mode="horizontal">
        <Menu.Item {...{ onClick: () => handleClick("") }}>All</Menu.Item>
        <Menu.Item {...{ onClick: () => handleClick("hot") }}>
          <Tooltip title="More than 50 reviews">Hot Products</Tooltip>
        </Menu.Item>
        <Menu.Item {...{ onClick: () => handleClick("rating") }}>
          <Tooltip title="More than 4 stars">Top Ratings</Tooltip>
        </Menu.Item>
        <Menu.Item {...{ onClick: () => handleClick("deal") }}>
          <Tooltip title="Less than $10">Good Deal</Tooltip>
        </Menu.Item>
      </Menu>
    </div>
  );
};
