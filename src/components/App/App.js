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

function App() {
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
        <Main />
        <NewsCardList />
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
