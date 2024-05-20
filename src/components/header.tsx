import React from "react";
import "../css/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="grid">
          <ul>
            <li><a className="menu-logo" href="">DanMae</a></li>
            <li><a className="menu-text" href="">home</a></li>
            <li><a className="menu-text" href="">portfolio</a></li>
            <li><a className="menu-text" href="">about</a></li>
            <li><a className="menu-text" href="">contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;


{
  /**
   * <div>
        <nav className="">
          <div className="topnav">
            <a className="" href="/index.html">DanMae</a>
            <div className="topnav-right">
              <a href="/index.html">home</a>
              <a href="/portfolio.html">portfolio</a>
              <a href="/about.html">about</a>
              <a href="mailto:daniel@lostingravity.de">contact</a>
            </div>
          </div>
        </nav>
      </div>
   * 
   */
}