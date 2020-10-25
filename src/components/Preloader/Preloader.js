import './Preloader.css';
import React from 'react';

function Preloader() {
  return (
    <section className="preloader preloader_closed">
      <span className="preloader__circle" />
      <span className="preloader__title">Идет поиск новостей...</span>
    </section>
  );
}

export default Preloader;
