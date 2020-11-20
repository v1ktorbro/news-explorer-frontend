import './SavedNews.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ cards, onArticleDelete }) {
  return (
    <section className="saved-news">
      <div className="saved-news__cards">
        {cards.map((card) => (
          <NewsCard
            savedCard
            key={card._id}
            card={card}
            onArticleDelete={onArticleDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedNews;
