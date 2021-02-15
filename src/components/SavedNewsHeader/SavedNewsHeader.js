import './SavedNewsHeader.css';
import React from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';

function SavedNewsHeader({ cards }) {
  const currentUser = React.useContext(CurrentUserContext);

  const keys = Object.entries(cards.reduce((obj, item) => ({
    ...obj,
    [item.keyword.toLowerCase()]: (obj[item.keyword.toLowerCase()] || 0) + 1,
  }), {})).sort((a, b) => b[1] - a[1]).map((a) => a[0]);

  // eslint-disable-next-line no-nested-ternary
  const keysToShow = keys.splice(0, 2).map((s) => s[0].toUpperCase() + s.slice(1)).join(', ') + (keys.length ? keys.length > 1 ? ` и ${keys.length}-м другим` : ' и 1-му другому' : '');

  return (
    <section className="saved-news-header">
      <span className="saved-news-header__info">Сохранённые статьи</span>
      <h2 className="saved-news-header__title">{`${currentUser.name}, у вас ${cards.length} сохранённых статей`}</h2>
      <span className="saved-news-header__keyword">
        По ключевым словам:
        <span className="saved-news-header__keyword-style">
          {' '}
          {keysToShow}
        </span>
      </span>
    </section>
  );
}

export default SavedNewsHeader;
