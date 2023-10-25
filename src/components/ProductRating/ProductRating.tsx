import React from "react";
import { Rate } from "antd";
import { IBasicProps } from "../../interfaces/IBasicProps";

import "./ProductRating.less";

interface IProps extends IBasicProps {
  rating: number;
}

export const ProductRating = (props: IProps) => {
  const { className = "", rating } = props;

  return (
    <Rate
      className={`product-rating ${className}`}
      disabled
      allowHalf
      value={rating}
    />
  );
};
