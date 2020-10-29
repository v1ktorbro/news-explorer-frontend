import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  return (
    <>
      <PopupWithForm />
      <Header />
      <Main />
      <NewsCardList />
      <About />
      <Footer />
    </>
  );
}

export default App;
