import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
  const [isMenuOpen, openMenu] = useState(false);

  const toggleMenu = () => {
    openMenu(!isMenuOpen);
  }

  return (
    <nav className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerLogo} onClick={() => openMenu(false)}>
          <Link to="/">Firengy</Link>
        </div>

        <div className={isMenuOpen ? styles.headerNavActive : styles.headerNav}>
          <Link className={styles.headerLink} to="/products" onClick={() => openMenu(false)}>
            Products
          </Link>
          <Link className={styles.headerLink} to="/myItems" onClick={() => openMenu(false)}>
            My Items
          </Link>
        </div>
      </div>
      <button className={styles.navBtn} onClick={() => toggleMenu()}>
        <span className={isMenuOpen ? styles.navBtnItemActive : styles.navBtnItem}></span>
      </button>
    </nav >
  )
}

export default Header;