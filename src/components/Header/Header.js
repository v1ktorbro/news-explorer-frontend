import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onMain, children }) {
  return (
    <header className={onMain ? 'header header_main' : 'header'}>
      <Link to="/" className={onMain ? 'header__logo header__logo_main' : 'header__logo'}>NewsExplorer</Link>
      {children}
    </header>
  );
}

export default Header;
