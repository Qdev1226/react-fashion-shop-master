import React from "react";
import { Drawer } from "antd";

import "./HeaderDrawer.less";
import { IBasicProps } from "../../interfaces/IBasicProps";

interface IProps extends IBasicProps {
  visible: boolean;
  onClose: () => void;
}

export const HeaderDrawer = (props: IProps) => {
  const { children, onClose, visible } = props;

  return (
    <Drawer
      className="header-drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      {children}
    </Drawer>
  );
};
