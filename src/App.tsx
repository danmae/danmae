import React from "react";
import Header from "./components/header";
import LandingZone from "./components/landingzone";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<LandingZone />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
