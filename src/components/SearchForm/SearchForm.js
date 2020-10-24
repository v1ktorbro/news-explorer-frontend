import './SearchForm.css';
import React from 'react';

function SearchForm() {
  return (
    <form className="searchForm__form">
      <input type="text" className="searchForm__input" placeholder="Введите тему новости" />
      <button type="button" className="searchForm__btn-search">Искать</button>
    </form>
  );
}

export default SearchForm;
