import React, { FunctionComponent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    const modal = elRef.current;
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(modal);
    return () => {
      modalRoot.removeChild(modal);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
