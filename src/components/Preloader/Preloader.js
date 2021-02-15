import './Preloader.css';
import React from 'react';

function Preloader({ search, closed }) {
  return (
    <section className={`preloader ${closed && 'preloader_closed'}`}>
      <span className={search ? 'preloader__circle' : 'preloader__error-result'} />
      {!search && <h2 className="preloader__title">Ничего не найдено</h2>}
      <span
        className={search ? 'preloader__description' : 'preloader__description preloader__description_error-result'}
      >
        {search ? 'Идет поиск новостей...' : 'К сожалению по вашему запросу ничего не найдено.'}
      </span>
    </section>
  );
}

export default Preloader;
