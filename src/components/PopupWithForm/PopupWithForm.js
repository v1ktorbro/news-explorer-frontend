/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './PopupWithForm.css';
import React from 'react';

function PopupWithForm({
  name, children, title,
  isOpen, onClose, onSubmit,
}) {
  const overlayPopup = (evt) => {
    if (evt.target.classList.contains(`popup-${name}`)) {
      onClose();
    }
  };

  const handleEscPopup = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };
  document.addEventListener('keydown', handleEscPopup);

  return (
    <section onClick={overlayPopup} className={`popup popup-${name} ${!isOpen && 'popup_closed'}`}>
      <form onSubmit={onSubmit} className="popup__container">
        <span className="popup__close" onClick={onClose} />
        <h2 className="popup__title">{ title }</h2>
        { children }
      </form>
    </section>
  );
}

export default PopupWithForm;
