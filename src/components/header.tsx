import React from "react";
import styles from "../css/header.module.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className={`${styles.header}`}>
        <nav className={`${styles.grid}`}>
          <ul>
            <li><Link className={styles.menuLogo} to="/">DanMae</Link></li>
            <li><Link className={`${styles.menuText} ${styles.item1}`} to="/">home</Link></li>
            <li><Link className={`${styles.menuText} ${styles.item2}`} to="/portfolio">portfolio</Link></li>
            <li><Link className={`${styles.menuText} ${styles.item3}`} to="/about">about</Link></li>
            <li><Link className={`${styles.menuText} ${styles.item4}`} to="/contact">contact</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;