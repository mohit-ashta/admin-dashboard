import React, { useState } from "react";
import Modal from "react-modal";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  category?: string;
  title?: string;
  para?: string;
  children?: any;
};

export const CommonModal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
  category,
  title,
  para,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
    },
  };
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={closeModal}>
      {children}
    </Modal>
  );
};
