import React from "react";
import { IBasicProps } from "../../interfaces/IBasicProps";
import "./BlurBackground.less";

interface IProps extends IBasicProps {
  image: string;
}

export const BlurBackground = (props: IProps) => {
  const { image } = props;

  return (
    <div className="blur-background">
      <img className="blur-background__image" src={image} alt="" />
      <div className="blur-background__overlay"></div>
    </div>
  );
};
