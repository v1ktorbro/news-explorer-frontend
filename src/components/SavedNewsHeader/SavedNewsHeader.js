import './SavedNewsHeader.css';
import React from 'react';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <span className="saved-news-header__info">Сохранённые статьи</span>
      <h2 className="saved-news-header__title">Витёк, у вас 5 сохранённых статей</h2>
      <span className="saved-news-header__keyword">
        По ключевым словам:
        <span className="saved-news-header__keyword-style"> Природа, Тайга и 2-м другим</span>
      </span>
    </section>
  );
}

export default SavedNewsHeader;
