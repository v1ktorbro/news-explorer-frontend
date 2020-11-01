import './Preloader.css';
import React from 'react';

function Preloader({ success }) {
  return (
    <section className="preloader">
      <span className={success ? 'preloader__circle' : 'preloader__error-result'} />
      {!success && <h2 className="preloader__title">Ничего не найдено</h2>}
      <span
        className={success ? 'preloader__description' : 'preloader__description preloader__description_error-result'}
      >
        {success ? 'Идет поиск новостей...' : 'К сожалению по вашему запросу ничего не найдено.'}
      </span>
    </section>
  );
}

export default Preloader;
