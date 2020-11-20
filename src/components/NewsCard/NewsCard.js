/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './NewsCard.css';
import React from 'react';

function NewsCard({
  savedCard, card, loggedIn, onArticleSave, onArticleDelete,
}) {
  const dateCreateNews = (dateISO8601) => new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateISO8601));

  const findCurrentBtnOfCard = (evt) => evt.target.querySelector('.news-card__hint-login');

  const hintShow = (evt) => {
    if (findCurrentBtnOfCard(evt) && !loggedIn) {
      findCurrentBtnOfCard(evt).classList.remove('news-card__hint-login_closed');
    }
  };

  const hintHide = (evt) => {
    if (findCurrentBtnOfCard(evt) && !loggedIn) {
      findCurrentBtnOfCard(evt).classList.add('news-card__hint-login_closed');
    }
  };

  const savedCardNews = (evt) => {
    /* надо будет добавить какой-нибудь пропс типа loggenIn
    и если этот пропс false то добавить тумблер */
    /* так же выключить кнопку */
    onArticleSave(card);
    const cardHintBlock = evt.target.closest('.news-card__btn-block');
    const hitnElement = cardHintBlock.querySelector('.news-card__hint-login');
    hitnElement.classList.toggle('news-card__hint-login_closed');
  };

  const deleteSavedCard = () => {
    onArticleDelete(card._id);
  };

  return (
    <div className="news-card">
      <div className="news-card__block-image">
        <img src={savedCard ? card.image : card.urlToImage} className="news-card__image-main" onClick={() => window.open(card.url)} alt="фото карточки" />
        { savedCard && (
        <div className="news-card__keyword-block">
          <span className="news-card__keyword-text">{card.keyword}</span>
        </div>
        ) }
        <div
          className="news-card__btn-block"
          onMouseEnter={(evt) => hintShow(evt)}
          onMouseLeave={(evt) => hintHide(evt)}
        >
          <button onClick={savedCard ? deleteSavedCard : (evt) => { savedCardNews(evt); }} className={savedCard ? 'news-card__btn-delete' : 'news-card__btn-bookmark'} aria-label="bookmark" type="button" />
          <div className="news-card__hint-login news-card__hint-login_closed">
            <span className="news-card__text-hint">{ savedCard ? 'Убрать из сохранённых' : 'Войдите,  чтобы сохранять статьи' }</span>
          </div>
        </div>
      </div>
      <div className="news-card__info-block" onClick={() => window.open(card.url)}>
        <span className="news-card__date">{savedCard ? dateCreateNews(card.date) : dateCreateNews(card.publishedAt)}</span>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__description">{savedCard ? card.text : card.description}</p>
        <span className="news-card__source">{savedCard ? card.source : card.source.name}</span>
      </div>
    </div>
  );
}

export default NewsCard;
