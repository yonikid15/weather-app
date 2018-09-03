import React from 'react';
import styles from '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      {/* Logo */}
      <div>
        yonikid
      </div>
      {/* Link to GitHub */}
      <div>
        view source
      </div>
    </footer>
  );
};

export default Footer;