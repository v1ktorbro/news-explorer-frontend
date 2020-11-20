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
import mainApi from '../../utils/MainApi';
import SuccessRegisterPopup from '../SuccessRegisterPopup/SuccessRegisterPopup';
import auth from '../../utils/Auth';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isSearchingNews, setIsSearcinghNews] = React.useState(false);
  const [isNothingSearch, setIsNothingSearch] = React.useState(false);
  const [isNewsSearchSuccess, setIsNewsSearchSuccess] = React.useState(false);
  const [isNewsSearchError, setIsNewsSearchError] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([]);
  const [savedNewsCards, setSavedNewsCards] = React.useState([]);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [registerSuccessPopupOpen, setRegisterSuccessPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

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
    setRegisterSuccessPopupOpen(false);
  };

  const handleSuccessRegisterPopup = () => {
    setRegisterSuccessPopupOpen(false);
    handleLoginPopup();
  };

  const handleSearchNewsSubmit = (requestWord) => {
    localStorage.setItem('requestOfUser', requestWord);
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

  React.useEffect(() => {
    const lastRequest = localStorage.getItem('requestOfUser');
    if (lastRequest) {
      handleSearchNewsSubmit(lastRequest);
    }
  }, []);

  const handleSaveArticle = (dataOfArticle) => {
    mainApi.saveArticle(dataOfArticle).then((res) => {
      if (res) {
        mainApi.getSavedArticlesOfUser().then((savedCardsFromApi) => {
          setSavedNewsCards(savedCardsFromApi);
        }); /* если новая карточка сохранилась в БД, то обновляем стейт с сохр карточками */
      }
    }).catch((err) => console.log(err));
  };

  const handleDeleteArticle = (idSavedOfCard) => {
    mainApi.deleteArticle(idSavedOfCard).then((res) => {
      if (res) {
        mainApi.getSavedArticlesOfUser().then((savedCardsFromApi) => {
          setSavedNewsCards(savedCardsFromApi);
        }); /* если карточка удалилась из БД, то обновляем стейт с сохр карточками */
      }
    }).catch((err) => console.log(err));
  };

  const handleRegister = (dataOfInputs) => {
    auth.register(dataOfInputs).then((res) => {
      if (res) {
        setIsRegisterPopupOpen(false);
        setRegisterSuccessPopupOpen(true);
      }
    }).catch((err) => console.log(err));
  };

  const handleLogin = (dataOfInputs) => {
    auth.login(dataOfInputs).then((res) => {
      if (res.status === 200) {
        auth.getInfoLogin().then((infoAboutCurrentUser) => {
          setCurrentUser(infoAboutCurrentUser);
          closeAllPopups();
          setLoggedIn(true);
        });
        mainApi.getSavedArticlesOfUser().then((savedCardsFromApi) => {
          setSavedNewsCards(savedCardsFromApi);
        });
      }
    }).catch((err) => console.log(err));
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Route exact path="/">
          <Login
            isOpen={isLoginPopupOpen}
            onClose={closeAllPopups}
            onRegister={handleRegisterPopup}
            handleLogin={handleLogin}
          />
          <Register
            isOpen={isRegisterPopupOpen}
            onClose={closeAllPopups}
            onLogin={handleLoginPopup}
            handleRegister={handleRegister}
          />
          { registerSuccessPopupOpen && (
          <SuccessRegisterPopup
            onClose={closeAllPopups}
            onLogin={handleSuccessRegisterPopup}
            isOpen={registerSuccessPopupOpen}
          />
          )}
          <Header onMain>
            <Navigation onMain loggedIn={loggedIn} onLogin={handleLoginPopup} />
          </Header>
          <Main
            onSearchNews={handleSearchNewsSubmit}
          />
          {isSearchingNews ? <Preloader search /> : <Preloader closed />}
          {isNothingSearch ? <Preloader /> : <Preloader closed />}
          {isNewsSearchSuccess && (
          <NewsCardList
            cards={newsCards}
            onArticleSave={handleSaveArticle}
          />
          )}
          {isNewsSearchError && <NewsCardList searchWithError />}
          <About />
        </Route>
        <ProtectedRoute
          path="/"
          loggedIn={loggedIn}
          onLogin={handleLoginPopup}
          Component={(
            <Route path="/saved-news">
              <Header>
                <Navigation loggedIn={loggedIn} savedNews />
              </Header>
              <SavedNewsHeader cards={savedNewsCards} />
              <SavedNews
                cards={savedNewsCards}
                onArticleDelete={handleDeleteArticle}
              />
            </Route>
            )}
        />
      </CurrentUserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
