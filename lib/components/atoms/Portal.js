import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, className = "root-portal", el = "div" }) => {
  const container = document.createElement(el);

  container.classList.add(className);

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
