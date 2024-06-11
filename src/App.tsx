import React from "react";
import Header from "./components/header";
import LandingZone from "./components/landingzone";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Impressum from "./components/impressum";
import Datenschutz from "./components/datenschutz";
import CookieConsent from "react-cookie-consent";

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
        onDecline={() => {
          alert("nay!");
        }}
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#ff4093",opacity: "0.5", color: "#fff" }}
        buttonStyle={{ background: "#ff7f1d", color:"white"}}
        expires={30}>
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Footer />
    </div>
  );
}

export default App;
