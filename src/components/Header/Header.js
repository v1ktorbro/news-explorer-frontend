import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ onMain, onLogin }) {
  return (
    <header className={onMain ? 'header header_main' : 'header'}>
      <Link to="/" className={onMain ? 'header__logo header__logo_main' : 'header__logo'}>NewsExplorer</Link>
      <Navigation onMain onLogin={onLogin} />
    </header>
  );
}

export default Header;
