import React, { useState, useCallback } from "react";

// Create a Context
export const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const openModalWithData = useCallback((payload) => {
    setIsOpen(true);
    setData(payload);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setData(null);
  }, []);
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <ModalContext.Provider
      value={{ isOpen, openModalWithData, closeModal, modalData: data }}
    >
      {children}
    </ModalContext.Provider>
  );
}
