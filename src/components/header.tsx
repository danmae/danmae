import React from "react";
import "../css/index.css";

class Header extends React.Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default Header;
