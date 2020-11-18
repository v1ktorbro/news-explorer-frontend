import './Register.css';
import '../Login/Login.css'; // переиспользуем стили компонента Login
import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register({
  isOpen, onClose, onLogin, handleRegister,
}) {
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const nameInputRef = React.useRef();

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleRegister({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      name: nameInputRef.current.value,
    });
  };

  return (
    <PopupWithForm name="register" onSubmit={onSubmit} title="Регистрация" isOpen={isOpen} onClose={onClose}>
      <span className="login__signature-input login__signature-input_email">Email</span>
      <input ref={emailInputRef} type="email" required className="login__input login__input_email" placeholder="Введите почту" />
      <span className="login__signature-input login__signature-input_password">Пароль</span>
      <input ref={passwordInputRef} type="password" required minLength="4" className="login__input login__input_email" placeholder="Введите пароль" />
      <span className="login__signature-input login__signature-input_name">Имя</span>
      <input ref={nameInputRef} type="text" required minLength="2" className="login__input login__input_name" placeholder="Введите свое имя" />
      <button type="submit" className="login__btn-submit">Зарегистрироваться</button>
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
