import React from "react";
import { Typography } from "antd";
import { IBasicProps } from "../../interfaces/IBasicProps";
import "./ProductName.less";
import { Link } from "react-router-dom";

interface IProps extends IBasicProps {
  size?: "" | "large";
  name: string;
  category: string;
}

export const ProductName = (props: IProps) => {
  const { name, category } = props;
  const { Text } = Typography;

  return (
    <div className="product-name">
      <Text className="product-name__name">{name}</Text>
      <br />
      <Text className="product-name__category">
        In{" "}
        <Link to="/category" className="product-name__category-link">
          {category}
        </Link>
      </Text>
    </div>
  );
};
