import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logoutImageBlackColor from '../../images/logout_black.svg';
import logoutImageWhiteColor from '../../images/logout_white.svg';
import CurrentUserContext from '../../context/CurrentUserContext';

function Navigation({
  onMain, loggedIn, onLogin, savedNews,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <nav className="navigation">
      <NavLink exact to="/" className={onMain ? 'navigation__link navigation__link_main' : 'navigation__link'} activeClassName={onMain ? 'navigation__link_active-main' : 'navigation__link_active'}>Главная</NavLink>
      { loggedIn && <NavLink to="/saved-news" className={onMain ? 'navigation__link navigation__link_main' : 'navigation__link'} activeClassName={onMain ? 'navigation__link_active-main' : 'navigation__link_active'}>Сохранённые статьи</NavLink>}
      <button type="button" name="logout" onClick={onLogin} className={loggedIn && savedNews ? 'navigation__btn-logout' : 'navigation__btn-login'}>
        { loggedIn ? currentUser.name : 'Авторизоваться'}
        { loggedIn && <img className="navigation__image-logout" alt="картинка logout" src={savedNews ? logoutImageBlackColor : logoutImageWhiteColor} />}
      </button>
    </nav>
  );
}

export default Navigation;
