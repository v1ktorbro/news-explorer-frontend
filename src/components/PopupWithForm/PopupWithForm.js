import './PopupWithForm.css';
import React from 'react';
import { Link } from 'react-router-dom';

function PopupWithForm({ children, title }) {
  return (
    <section className="popup popup_closed">
      <form className="popup__container">
        <span className="popup__close" />
        <h2 className="popup__title">{ title }</h2>
        { children }
 {/*        <span className="popup__signature-input popup__signature-input_email">Email</span>
        <input type="email" className="popup__input popup__input_email" placeholder="Введите почту" />
        <span className="popup__signature-input popup__signature-input_password">Пароль</span>
        <input type="password" className="popup__input popup__input_email" placeholder="Введите пароль" />
        <button type="submit" disabled="true" className="popup__btn-submit popup__btn-submit_active">Войти</button>
        <div className="popup__block-link">
          <span className="popup__issue">
            или
            <Link to="/register" className="popup__link"> Зарегистрироваться</Link>
          </span>
        </div> */}
      </form>
    </section>
  );
}

export default PopupWithForm;
