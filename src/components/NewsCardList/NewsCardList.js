import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Результаты поиска</h2>
      <div className="news-card-list__cards">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <button type="button" className="news-card-list__btn-show-more">Показать еще</button>
    </section>
  );
}

export default NewsCardList;
