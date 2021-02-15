import './Main.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

function Main() {
  return (
    <main className="main" id="main">
      <h1 className="main__title">Что творится в мире?</h1>
      <p className="main__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <SearchForm />
    </main>
  );
}

export default Main;
