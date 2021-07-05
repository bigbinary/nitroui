import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
    <Portal>
      <motion.div
        initial={{ backgroundColor: "#1b1f2300" }}
        animate={{ backgroundColor: "#1b1f2380" }}
        transition={{
          bounce: false,
          duration: 0.3,
        }}
        initial={{ backgroundColor: "#1b1f2300" }}
        className="nui-modal--portal"
      >
        <motion.div
          initial={{ scale: 1, opacity: 0, y: -20, filter: "blur(5px)" }}
          animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            bounce: false,
            duration: 0.2,
          }}
          initial={{ scale: 1, opacity: 0, y: -20, filter: "blur(5px)" }}
          className="nui-modal--wrapper"
        >
          {children}
        </motion.div>
      </motion.div>
    </Portal>
  );
};

const Title = ({ children }) => {
  return <h3 className="nui-modal--title">{children}</h3>;
};

const Body = ({ children }) => {
  return <div className="nui-modal--body">{children}</div>;
};

Modal.Title = Title;
Modal.Body = Body;

export default Modal;
