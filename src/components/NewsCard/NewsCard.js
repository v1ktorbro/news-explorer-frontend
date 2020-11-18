/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './NewsCard.css';
import React from 'react';

function NewsCard({ savedCard, card }) {
  const dateCreateNews = (dateISO8601) => {
    return new Intl.DateTimeFormat('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateISO8601));
  };

  return (
    <div className="news-card">
      <div className="news-card__block-image">
        <img src={card.urlToImage} className="news-card__image-main" onClick={() => window.open(card.url)} alt="фото карточки" />
        { savedCard && (
        <div className="news-card__keyword-block">
          <span className="news-card__keyword-text">Природа</span>
        </div>
        ) }
        <button className={savedCard ? 'news-card__btn-delete' : 'news-card__btn-bookmark'} aria-label="bookmark" type="button" />
        <div className="news-card__hint-login news-card__hint-login_closed">
          <span className="news-card__text-hint">{ savedCard ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи' }</span>
        </div>
      </div>
      <div className="news-card__info-block" onClick={() => window.open(card.url)}>
        <span className="news-card__date">{dateCreateNews(card.publishedAt)}</span>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__description">{card.description}</p>
        <span className="news-card__source">{card.source.name}</span>
      </div>
    </div>
  );
}

export default NewsCard;
