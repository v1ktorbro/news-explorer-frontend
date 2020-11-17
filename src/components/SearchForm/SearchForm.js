import './SearchForm.css';
import React from 'react';

function SearchForm({ onSearchNews }) {
  const inputRef = React.useRef();
  const [inputValue, setInputValue] = React.useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();
    const btnSubmitForm = document.querySelector('.search-form__btn-search');
    btnSubmitForm.disabled = true;
    onSearchNews(inputValue);
  };

  const showInputError = (element, formError) => {
    element.classList.add('search-form__input_type-error');
    formError.classList.add('search-form__input-error_active');
  };

  const hideInputError = (element, formError) => {
    element.classList.remove('search-form__input_type-error');
    formError.classList.remove('search-form__input-error_active');
  };

  const isValid = (evt) => {
    const formElement = document.querySelector('.search-form');
    const formInput = formElement.querySelector('.search-form__input');
    const formError = formElement.querySelector(`#${formInput.id}-error`);
    const btnSubmitForm = formElement.querySelector('.search-form__btn-search');
    setInputValue(evt.target.value);
    if (evt.target.validity.valid) {
      hideInputError(formInput, formError);
      btnSubmitForm.classList.remove('search-form__btn-search_inactive');
      formError.textContent = '';
      btnSubmitForm.disabled = false;
    } else {
      showInputError(formInput, formError);
      btnSubmitForm.classList.add('search-form__btn-search_inactive');
      btnSubmitForm.disabled = true;
    }

    if (evt.target.validity.valueMissing) {
      formError.textContent = 'Нужно ввести ключевое слово';
    } else {
      formError.textContent = formInput.validationMessage;
    }
  };

  const onBlur = (evt) => {
    const formElement = document.querySelector('.search-form');
    const formInput = formElement.querySelector('.search-form__input');
    const formError = formElement.querySelector(`#${formInput.id}-error`);
    const btnSubmitForm = formElement.querySelector('.search-form__btn-search');
    hideInputError(formInput, formError);
    btnSubmitForm.classList.remove('search-form__btn-search_inactive');
    formError.textContent = '';
    formInput.value = '';
  };

  return (
    <form onSubmit={onSubmit} noValidate className="search-form">
      <input ref={inputRef} required minLength="3" onBlur={(evt) => { onBlur(evt); }} onChange={(evt) => { isValid(evt); }} type="text" className="search-form__input" id="search-input" placeholder="Введите тему новости" />
      <span className="search-form__input-error" id="search-input-error" />
      <button disabled type="submit" className="search-form__btn-search">Искать</button>
    </form>
  );
}

export default SearchForm;
