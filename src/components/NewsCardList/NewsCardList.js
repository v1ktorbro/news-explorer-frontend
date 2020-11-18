import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ searchWithError, cards, onArticleSave }) {
  const [loadIndexCards, setIsLoadIndexCard] = React.useState(3);

  const showMoreCards = () => {
    const btnShowMore = document.querySelector('.news-card-list__btn-show-more');
    setIsLoadIndexCard(loadIndexCards + 3);
    if (cards.length <= loadIndexCards + 3) {
      btnShowMore.classList.add('news-card-list__btn-show-more_closed');
    }
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Результаты поиска</h2>
      { searchWithError
        ? <p className="news-card-list__description-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p> : (
          <>
            <div className="news-card-list__cards">
              {cards.slice(0, loadIndexCards).map((card, index) => (
                <NewsCard
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  card={card}
                  onArticleSave={onArticleSave}
                />
              ))}
            </div>
            <button type="button" onClick={showMoreCards} className="news-card-list__btn-show-more">Показать еще</button>
          </>
        )}
    </section>
  );
}

export default NewsCardList;
