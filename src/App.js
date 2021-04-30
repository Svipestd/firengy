import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Routes from './Routes.jsx';
import styles from './app.module.scss';
import ScrollToTop from './components/scrollToTop/scrollToTop.jsx';

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