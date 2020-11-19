import './Register.css';
import '../Login/Login.css'; // переиспользуем стили компонента Login
import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useInput } from '../FormValidator/FormValidator';

function Register({
  isOpen, onClose, onLogin, handleRegister,
}) {
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const nameInputRef = React.useRef();

  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 4, maxLength: 8 });
  const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 8 });

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
      {(email.isDirty && email.isEmpty) && <span className="login__input-error">Поле не может быть пустым</span> }
      {(email.isDirty && email.isEmailError) && <span className="login__input-error">{email.error}</span> }
      <input onChange={(evt) => email.onChange(evt)} onBlur={(evt) => email.onBlur(evt)} value={email.value} ref={emailInputRef} type="email" required className="login__input login__input_email" placeholder="Введите почту" />
      <span className="login__signature-input login__signature-input_password">Пароль</span>
      {(password.isDirty && password.isEmpty) && <span className="login__input-error">Поле не может быть пустым</span> }
      {(password.isDirty && password.isMinLengthError) && <span className="login__input-error">{password.error}</span> }
      {(password.isDirty && password.isMaxLengthError) && <span className="login__input-error">Слишком длинный пароль</span> }
      <input onChange={(evt) => password.onChange(evt)} onBlur={(evt) => password.onBlur(evt)} value={password.value} ref={passwordInputRef} type="password" required minLength="4" className="login__input login__input_email" placeholder="Введите пароль" />
      <span className="login__signature-input login__signature-input_name">Имя</span>
      {(name.isDirty && name.isEmpty) && <span className="login__input-error">Поле не может быть пустым</span> }
      {(name.isDirty && name.isMinLengthError) && <span className="login__input-error">{name.error}</span> }
      {(name.isDirty && name.isMaxLengthError) && <span className="login__input-error">Слишком длиное имя</span> }
      <input onChange={(evt) => name.onChange(evt)} onBlur={(evt) => name.onBlur(evt)} value={name.value} ref={nameInputRef} type="text" required minLength="2" className="login__input login__input_name" placeholder="Введите свое имя" />
      <button type="submit" disabled={!email.inputValid || !password.inputValid || !name.inputValid} className={email.inputValid && password.inputValid && name.inputValid ? 'login__btn-submit login__btn-submit_active' : 'login__btn-submit'}>Зарегистрироваться</button>
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
