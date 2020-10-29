import './Register.css';
import '../Login/Login.css'; //переиспользуем стили компонента Login
import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function Register() {
  return (
    <PopupWithForm name="register" title="Регистрация">
        <span className="login__signature-input login__signature-input_email">Email</span>
        <input type="email" className="login__input login__input_email" placeholder="Введите почту" />
        <span className="login__signature-input login__signature-input_password">Пароль</span>
        <input type="password" className="login__input login__input_email" placeholder="Введите пароль" />
        <span className="login__signature-input login__signature-input_name">Имя</span>
        <input type="text" className="login__input login__input_name" placeholder="Введите свое имя" />
        <button type="submit" disabled="true" className="login__btn-submit login__btn-submit_active">Зарегистрироваться</button>
        <div className="login__block-link">
          <span className="login__issue">
            или
            <Link to="/register" className="login__link"> Войти</Link>
          </span>
        </div>
    </PopupWithForm>
  );
}

export default Register;
