import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logoutImage from '../../images/logout.svg';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link navigation__link_active" activeClassName="">Главная</NavLink>
      <NavLink to="/" className="navigation__link" activeClassName="">Сохранённые статьи</NavLink>
      <button type="button" name="logout" className="navigation__btn-logout">
        Витёк
        <img className="navigation__image-logout" alt="картинка logout" src={logoutImage} />
      </button>
    </nav>
  );
}

export default Navigation;
