import './SearchForm.css';
import React from 'react';

function SearchForm() {
  return (
    <form className="search-form__form">
      <input type="text" className="search-form__input" placeholder="Введите тему новости" />
      <button type="button" className="search-form__btn-search">Искать</button>
    </form>
  );
}

export default SearchForm;
