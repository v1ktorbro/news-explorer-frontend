import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({ isOpen, onClose, onRegister }) {
  return (
    <PopupWithForm title="Вход" name="login" isOpen={isOpen} onClose={onClose}>
      <span className="login__signature-input login__signature-input_email">Email</span>
      <input type="email" className="login__input login__input_email" placeholder="Введите почту" />
      <span className="login__signature-input login__signature-input_password">Пароль</span>
      <input type="password" className="login__input login__input_email" placeholder="Введите пароль" />
      <button type="submit" disabled className="login__btn-submit">Войти</button>
      <div className="login__block-link">
        <span className="login__issue">
          или
          <Link to="/" onClick={onRegister} className="login__link"> Зарегистрироваться</Link>
        </span>
      </div>
    </PopupWithForm>
  );
}

export default Login;
