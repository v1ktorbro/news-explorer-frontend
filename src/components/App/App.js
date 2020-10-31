import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);

  const handleLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <>
      <Login isOpen={isLoginPopupOpen} onClose={closeAllPopups} />
      <Header onMain onLogin={handleLoginPopup} />
      <Main />
      <NewsCardList />
      <About />
      <SavedNewsHeader />
      <SavedNews />
      <Footer />
    </>
  );
}

export default App;
