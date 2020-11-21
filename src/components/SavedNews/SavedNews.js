import './SavedNews.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ cards, onArticleDelete, loggedIn }) {
  return (
    <section className="saved-news">
      <div className="saved-news__cards">
        {cards.map((card) => (
          <NewsCard
            savedCard
            key={card._id}
            card={card}
            onArticleDelete={onArticleDelete}
            loggedIn={loggedIn}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedNews;
