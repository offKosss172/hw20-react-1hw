import './Modal.scss';
// import Button from '../Button/Button';




import React from 'react';
import PropTypes from 'prop-types';


function Modal({ header, closeButton, text, actions, isOpen, onClose, backgroundColor }) {
  const modalStyle = {
    backgroundColor: backgroundColor, // Устанавливаем фоновый цвет модального окна
  };

  return (
    isOpen && (
      <div className="modal-wrapper">
        <div className="modal">
          {closeButton && (
            <button type="button" className="modal-close" onClick={onClose}>
              Close
            </button>
          )}
          <div className="modal-box-top">
            <h4 className="modal-top-title">{header}</h4>
          </div>
          <div className="modal-window" style={modalStyle}> {/* Используем объект стилей */}
            <h4 className="modal-title">{text}</h4>
            <div className="modal-btn-window">{actions}</div>
          </div>
        </div>
      </div>
    )
  );
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  closeButton: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  actions: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired, // Добавляем PropTypes для backgroundColor
};

export default Modal;
