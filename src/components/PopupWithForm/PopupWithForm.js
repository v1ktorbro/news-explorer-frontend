import './PopupWithForm.css';
import React from 'react';
import { Link } from 'react-router-dom';

function PopupWithForm({ name, children, title }) {
  return (
    <section className={`popup popup-${name}`}>
      <form className="popup__container">
        <span className="popup__close" />
        <h2 className="popup__title">{ title }</h2>
        { children }
      </form>
    </section>
  );
}

export default PopupWithForm;
