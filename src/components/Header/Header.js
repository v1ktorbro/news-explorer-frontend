import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ onMain }) {
  return (
    <header className={onMain ? 'header header_main' : 'header'}>
      <Link to="/main" className={onMain ? 'header__logo header__logo_main' : 'header__logo'}>NewsExplorer</Link>
      <Navigation onMain />
    </header>
  );
}

export default Header;
