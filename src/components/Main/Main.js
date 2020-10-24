import './Main.css';
import React from 'react';

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Что творится в мире?</h1>
      <p className="main__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="main__form">
        <input type="text" className="main__input" placeholder="Введите тему новости" />
        <button type="button" className="main__btn-search">Искать</button>
      </form>
    </main>
  );
}

export default Main;
