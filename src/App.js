import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Routes from './Routes';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import styles from './app.module.scss';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <div className={styles.container}>
          <Routes />
        </div>
      </Router >
    </>
  )
}

export default App;