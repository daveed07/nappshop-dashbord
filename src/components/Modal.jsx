import React from "react";
import StyledModal from "@styles/styledModal";

const Modal = ({ title, message, setShowModal, handleDelete }) => {
  return (
    <StyledModal>
      <div className="modal">
        <div className="modal-content">
          <div className="message-container">
            <h1>{title}</h1>
            <p>{message}</p>
          </div>
          <div className="button-container">
            <button
              className="cancel"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancelar
            </button>
            <button
              className="delete"
              onClick={() => {
                handleDelete();
                setShowModal(false);
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
