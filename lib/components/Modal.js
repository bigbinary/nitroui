import React, { useEffect } from "react";
import classnames from "classnames";
import Portal from "./atoms/Portal";

const Modal = ({
  isOpen,
  onClose,
  size,
  className,
  autoHeight,
  autoWidth,
  showFooter,
  submitButtonProps,
  cancelButtonProps,
  showCloseButton = false,
  children,
  ...otherProps
}) => {
  return (
    <Portal className="nui-modal--portal">
      <div className="nui-modal--wrapper">{children}</div>
    </Portal>
  );
};

const Title = ({ children }) => {
  return <div className="nui-modal--title-wrapper">{children}</div>;
};

Modal.Title = Title;

export default Modal;
