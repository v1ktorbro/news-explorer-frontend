import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login() {
  return (
    <PopupWithForm title="Вход" name="login" >
        <span className="login__signature-input login__signature-input_email">Email</span>
        <input type="email" className="login__input login__input_email" placeholder="Введите почту" />
        <span className="login__signature-input login__signature-input_password">Пароль</span>
        <input type="password" className="login__input login__input_email" placeholder="Введите пароль" />
        <button type="submit" disabled="true" className="login__btn-submit login__btn-submit_active">Войти</button>
        <div className="login__block-link">
          <span className="login__issue">
            или
            <Link to="/register" className="login__link"> Зарегистрироваться</Link>
          </span>
        </div>
    </PopupWithForm>
  );
}

export default Login;