import React from "react";
import "../css/landingzone.css";

class LandingZone extends React.Component {
  render() {
    return (
      <div>
        <div className="frame">
          <div className="picture">
            <img className="frame-picture" src={process.env.PUBLIC_URL + "/images/profile.png"} width="225px" alt="Daniel Maelzer"/>
          </div>
          <div className="text">
            <h1>Hi, ich bin Daniel.</h1>
            <h2>Ich bin <span style={{ color: "#FF4093" }}>Webentwickler</span> und <span style={{ color: "#FF7F1D" }}>Problemlöser</span>.</h2>
            <h2>Schau dir doch mal meine Arbeiten an.</h2>
          </div>
          <div className="buttons">
            <a href="/about"><button className="about">about</button></a>
            <a href="/portfolio"><button className="portfolio">portfolio</button></a>
          </div>
        </div>

        <div className="links">
          <a target="_blank" href="mailto:daniel@lostingravity.de">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/images/icons/mail.png"}
              alt="Mail Icon"
            />
          </a>
          <a
            target="_blank"
            href="https://de.linkedin.com/in/daniel-maelzer-3934541a7"
          >
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/images/icons/linkedin.png"}
              alt="LinkedIn Icon"
            />
          </a>
          <a target="_blank" href="https://www.xing.com/profile/Daniel_Maelzer">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/images/icons/xing.png"}
              alt="Xing Icon"
            />
          </a>
        </div>
      </div>
    );
  }
}
export default LandingZone;
