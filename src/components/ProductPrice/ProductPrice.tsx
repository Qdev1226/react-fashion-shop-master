import React from "react";
import { Typography } from "antd";
import { IBasicProps } from "../../interfaces/IBasicProps";
import "./ProductPrice.less";
import { getClassName } from "../../utils";

interface IProps extends IBasicProps {
  size?: "" | "large";
  price: number;
}

export const ProductPrice = (props: IProps) => {
  const { className = "", size = "", price } = props;
  const { Text } = Typography;

  const getPriceString = (price: number) => {
    return price.toString().split(".");
  };

  return (
    <Text
      className={`product-price ${className} 
      ${getClassName("product-price", size)}`}
      strong
    >
      ${getPriceString(price)[0]}
      {getPriceString(price)[1] && (
        <span className="product-price__minor">
          .{getPriceString(price)[1]}
        </span>
      )}
    </Text>
  );
};
