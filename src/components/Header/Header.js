/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onMain, children }) {
  const toggleBurgerMenu = () => {
    const headerOnMain = document.querySelector('.header_main');
    const navigation = document.querySelector('.navigation');
    if (headerOnMain) {
      headerOnMain.classList.toggle('header_state-blind');
      navigation.classList.add('navigation_black-blind');
    }
    navigation.classList.toggle('navigation_open-blind');
    document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu_active');
  };

  return (
    <header className={onMain ? 'header header_main' : 'header'}>
      <Link to="/" className={onMain ? 'header__logo header__logo_main' : 'header__logo'}>NewsExplorer</Link>
      <span className={onMain ? 'header__burger-menu header__burger-menu_main' : 'header__burger-menu'} onClick={toggleBurgerMenu} />
      {children}
    </header>
  );
}

export default Header;
