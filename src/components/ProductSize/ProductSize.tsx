import { Space } from "antd";
import React from "react";
import { IBasicProps } from "../../interfaces/IBasicProps";

import "./ProductSize.less";

interface IProps extends IBasicProps {
  sizes?: string[];
}

export const ProductSize = (props: IProps) => {
  const defaultSize = ["XS", "S", "M", "L", "XL", "XXL"];
  const { sizes = defaultSize } = props;

  const getClassName = (sizes: string[], size: string) => {
    if (sizes.includes(size)) {
      return "product-size product-size--default";
    }
    return "product-size product-size--disable";
  };

  return (
    <div className="product-size-group">
      <div className="product-size__title">Select Size</div>
      <Space size="middle" wrap={true}>
        {defaultSize.map((size) => (
          <div key={size} className={getClassName(sizes, size)}>
            {size}
          </div>
        ))}
      </Space>
    </div>
  );
};
