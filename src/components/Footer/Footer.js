import './Footer.css';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const githubIcon = require('../../images/github_icon.svg');
const facebookIcon = require('../../images/facebook_icon.svg');

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__signature">&copy; 2020 Supersite, Powered by News API</p>
      <nav className="footer__links footer__links_string">
        <ul className="footer__list footer__list_string">
          <li className="footer__list-item">
            <Link to="/#main" className="footer__link">Главная</Link>
          </li>
          <li className="footer__list-item">
            <a href="https://praktikum.yandex.ru/" target="_blank" rel="noopener noreferrer" className="footer__link">Яндекс.Практикум</a>
          </li>
        </ul>
      </nav>
      <nav className="footer__links footer__links_social-icons">
        <ul className="footer__list footer__list_social-icons">
          <li className="footer__list-item">
            <a href="https://github.com/v1ktorbro" target="_blank" rel="noopener noreferrer" className="footer__link">
              <img src={githubIcon} className="footer__social-icon footer__social-icon_github" alt="лого гитхаба" />
            </a>
          </li>
          <li className="footer__list-item">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer__link">
              <img src={facebookIcon} className="footer__social-icon footer__social-icon_facebook" alt="лого фейсбука" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
