import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styles from '../styles/Header.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__content}>
      <h1 className={styles.header__title}><Link to="/">Weather Finder</Link></h1>
      <span>{ moment().format('MMMM Do, YYYY') }</span>
    </div>
  </header>
);

export default Header;