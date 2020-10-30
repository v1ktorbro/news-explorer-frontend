import './SavedNews.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews() {
  return (
    <section className="saved-news">
      <NewsCard savedCard />
      <NewsCard savedCard />
      <NewsCard savedCard />
      <NewsCard savedCard />
      <NewsCard savedCard />
    </section>
  );
}

export default SavedNews;
