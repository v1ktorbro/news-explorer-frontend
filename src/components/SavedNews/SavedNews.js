import './SavedNews.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews() {
  return (
    <section className="saved-news">
      <div className="saved-news__cards">
        <NewsCard savedCard />
        <NewsCard savedCard />
        <NewsCard savedCard />
        <NewsCard savedCard />
        <NewsCard savedCard />
      </div>
    </section>
  );
}

export default SavedNews;
