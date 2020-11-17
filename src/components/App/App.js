/* eslint-disable no-console */
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Preloader from '../Preloader/Preloader';
import newsApi from '../../utils/NewsApi';

function App() {
  const [isSearchingNews, setIsSearcinghNews] = React.useState(false);
  const [isNothingSearch, setIsNothingSearch] = React.useState(false);
  const [isNewsSearchSuccess, setIsNewsSearchSuccess] = React.useState(false);
  const [isNewsSearchError, setIsNewsSearchError] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);

  const handleLoginPopup = () => {
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false);
  };

  const handleRegisterPopup = () => {
    setIsRegisterPopupOpen(true);
    setIsLoginPopupOpen(false);
  };

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
  };

  const handleSearchNewsSubmit = (requestWord) => {
    setIsSearcinghNews(true);
    setIsNewsSearchSuccess(false);
    setIsNothingSearch(false);
    setIsNewsSearchError(false);
    newsApi.getResultSearch(requestWord)
      .then((res) => {
        if (res.status === 'ok') {
          setIsSearcinghNews(false);
          setIsNewsSearchSuccess(true);
          setNewsCards(res.articles);
        } else {
          setIsNewsSearchError(true);
          setIsSearcinghNews(false);
        }
        if (res.totalResults === 0) {
          setIsNothingSearch(true);
          setIsNewsSearchSuccess(false);
        }
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Route exact path="/">
        <Login
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegisterPopup}
        />
        <Register
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onLogin={handleLoginPopup}
        />
        <Header onMain>
          <Navigation onMain loggedIn onLogin={handleLoginPopup} />
        </Header>
        <Main
          onSearchNews={handleSearchNewsSubmit}
        />
        {isSearchingNews ? <Preloader search /> : <Preloader closed />}
        {isNothingSearch ? <Preloader /> : <Preloader closed />}
        {isNewsSearchSuccess && <NewsCardList cards={newsCards} />}
        {isNewsSearchError && <NewsCardList searchWithError />}
        <About />
      </Route>
      <Route path="/saved-news">
        <Header>
          <Navigation loggedIn />
        </Header>
        <SavedNewsHeader />
        <SavedNews />
      </Route>
      <Footer />
    </>
  );
}

export default App;
