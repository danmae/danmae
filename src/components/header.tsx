import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="grid">
          <ul>
            <li><Link className="menu-logo" to="/">DanMae</Link></li>
            <li><Link className="menu-text item-1" to="/">home</Link></li>
            <li><Link className="menu-text item-2" to="/portfolio">portfolio</Link></li>
            <li><Link className="menu-text item-3" to="/about">about</Link></li>
            <li><Link className="menu-text item-4" to="/contact">contact</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;