import './NewsCard.css';
import React from 'react';

const forestImage = require('../../images/news-card_forest.png');
const parkImage = require('../../images/news-card_park.png');
const taygaImage = require('../../images/news-card_tayga.png');

function NewsCard({ savedCard }) {
  return (
    <div className="news-card">
      <div className="news-card__block-image">
        <img src={parkImage} className="news-card__image-main" alt="фото карточки" />
        { savedCard && <div className="news-card__keyword-block">
          <span className="news-card__keyword-text">Природа</span>
        </div> }
        <button className={ savedCard ? "news-card__btn-delete" : "news-card__btn-bookmark" } aria-label="bookmark" type="button" />
        <div className="news-card__hint-login news-card__hint-login_closed">
          <span className="news-card__text-hint">{ savedCard ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи' }</span>
        </div>
      </div>
      <div className="news-card__info-block">
        <span className="news-card__date">2 августа, 2019</span>
        <h3 className="news-card__title">Национальное достояние – парки</h3>
        <p className="news-card__description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
        <span className="news-card__source">Лента.ру</span>
      </div>
    </div>
  );
}

export default NewsCard;
