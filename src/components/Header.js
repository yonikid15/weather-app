import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__content}>
      <h1 className={styles.header__title}><Link to="/">Weather Finder</Link></h1>
      <span>Aug 16, 2018</span>
    </div>
  </header>
);

export default Header;