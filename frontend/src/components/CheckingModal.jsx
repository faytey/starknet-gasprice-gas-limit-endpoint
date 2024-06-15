"use client";
import { ActualFeesContext } from "@/context/ActualFeesContext";
import React, { useContext, useEffect } from "react";

const CheckingModal = ({ isOpen, onClose, children }) => {
  const { setIcon, setOpen } = useContext(ActualFeesContext);
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const modalClass = isOpen
    ? "fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-lg z-[999] bg-opacity-50 bg-black  overflow-auto"
    : "hidden";

  return (
    <div
      className={modalClass}
      onClick={() => {
        onClose();
        setOpen(false);
        setIcon(true);
      }}
    >
      <div
        onClick={handleClick}
        className="absolute bg-white md:p-8 p-12 rounded-lg shadow-xl z-[999] max-w-screen-xl"
        role="dialog"
        aria-modal="true"
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CheckingModal;
