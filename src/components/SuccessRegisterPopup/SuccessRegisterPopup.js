import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SuccessRegisterPopup({ onLogin, isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Пользователь успешно зарегистрирован!"
      name="success-register"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="login__block-link">
        <span className="login__issue">
          <Link to="/" onClick={onLogin} className="login__link"> Войти</Link>
        </span>
      </div>
    </PopupWithForm>
  );
}

export default SuccessRegisterPopup;
