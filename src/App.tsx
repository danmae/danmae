import React from "react";
import Header from "./components/header";
import LandingZone from "./components/landingzone";
import Footer from "./components/footer";
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Impressum from "./components/impressum";
import Datenschutz from "./components/datenschutz";
import CookieConsent from "react-cookie-consent";
import "./css/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingZone />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <CookieConsent
        enableDeclineButton
        declineButtonText="Ablehnen"
        onDecline={() => {
          window.location.href = "https://www.google.de/search?q=how+to+create+a+website+myself";
        }}
        location="bottom"
        buttonText="Akzeptieren"
        cookieName="omnomnom"
        style={{ background: "#3CA4DC",opacity: ".6", color: "#fff" }}
        buttonStyle={{ background: "#ffffff", color:"#000000"}}
        expires={30}>
        Diese Webseite nutzt Cookies zur Verbesserung der User-Experience. <Link className="cookielink" to="/datenschutz">Mehr Infos</Link>{" "}
      </CookieConsent>
      <Footer />
    </div>
  );
}

export default App;
