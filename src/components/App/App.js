import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <>
      <Header />
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
