import './Main.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function Main({ setIsNewsSearchSuccess, setIsNewsSearchError }) {
  const [isSearchingNews, setIsSearcinghNews] = React.useState(false);
  const [isNothingSearch, setIsNothingSearch] = React.useState(false);

  return (
    <>
      <main className="main" id="main">
        <h1 className="main__title">Что творится в мире?</h1>
        <p className="main__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <SearchForm
          setIsNewsSearchSuccess={setIsNewsSearchSuccess}
          setIsSearcinghNews={setIsSearcinghNews}
          setIsNothingSearch={setIsNothingSearch}
          setIsNewsSearchError={setIsNewsSearchError}
        />
      </main>
      { isSearchingNews ? <Preloader search /> : <Preloader closed /> }
      { isNothingSearch ? <Preloader /> : <Preloader closed /> }
    </>
  );
}

export default Main;
