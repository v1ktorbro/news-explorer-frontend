import './Register.css';
import '../Login/Login.css'; // переиспользуем стили компонента Login
import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register({ isOpen, onClose, onLogin }) {
  return (
    <PopupWithForm name="register" title="Регистрация" isOpen={isOpen} onClose={onClose}>
      <span className="login__signature-input login__signature-input_email">Email</span>
      <input type="email" className="login__input login__input_email" placeholder="Введите почту" />
      <span className="login__signature-input login__signature-input_password">Пароль</span>
      <input type="password" className="login__input login__input_email" placeholder="Введите пароль" />
      <span className="login__signature-input login__signature-input_name">Имя</span>
      <input type="text" className="login__input login__input_name" placeholder="Введите свое имя" />
      <button type="submit" disabled className="login__btn-submit">Зарегистрироваться</button>
      <div className="login__block-link">
        <span className="login__issue">
          или
          <Link to="/" onClick={onLogin} className="login__link"> Войти</Link>
        </span>
      </div>
    </PopupWithForm>
  );
}

export default Register;
