import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ backgroundColor: "#1b1f2300" }}
            animate={{ backgroundColor: "#1b1f23dd" }}
            exit={{ backgroundColor: "#1b1f2300" }}
            transition={{
              bounce: false,
              duration: 0.3,
            }}
            key="backdrop"
            className="nui-modal--root"
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0, y: -20, filter: "blur(3px)" }}
              animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                bounce: false,
                duration: 0.3,
              }}
              key="content"
              exit={{ scale: 1, opacity: 0, y: 20, filter: "blur(5px)" }}
              className="nui-modal--wrapper"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
