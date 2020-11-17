import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ searchWithError }) {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Результаты поиска</h2>
      { searchWithError
        ? <p className="news-card-list__description-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p> : (
          <>
            <div className="news-card-list__cards">
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
            <button type="button" className="news-card-list__btn-show-more">Показать еще</button>
          </>
        )}
    </section>
  );
}

export default NewsCardList;
