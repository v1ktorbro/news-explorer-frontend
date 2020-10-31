/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './PopupWithForm.css';
import React from 'react';

function PopupWithForm({
  name, children, title,
  isOpen, onClose,
}) {
  return (
    <section className={`popup popup-${name} ${!isOpen && 'popup_closed'}`}>
      <form className="popup__container">
        <span className="popup__close" onClick={onClose} />
        <h2 className="popup__title">{ title }</h2>
        { children }
      </form>
    </section>
  );
}

export default PopupWithForm;
