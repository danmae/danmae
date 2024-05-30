import React from "react";
import "../css/portfolio.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h1 className="portfolio-text">Portfolio</h1>
        <nav className="mobileNav">
                <a className="mobiletext" href="/">zurück</a>
                <a className="mobiletext" href="/about">about</a>
            </nav>
        <div className="portfolio-grid">
        <a href="https://kinder-jahre.com/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kinderjahre.jpg"} alt="Kinderjahre"/></a>
        <a href="https://kenntnisreich-kindertagesstaetten.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kenntnisreich-kindertagesstaetten.jpg"} alt="Kenntnisreich Kindertagesstätten"/></a>
        <a href="https://aundotherapie.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/aundotherapie.jpg"} alt="AundO Therapie Berlin"/></a>
        <a href="https://kinderstubeonline.com/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kinderstube.jpg"} alt="Kinderstube Online"/></a>
        <a href="https://berlinerstadtkinder.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/stadtkinder.jpg"} alt="Berliner Stadtkinder"/></a>
        <a href="https://schwimmerei-berlin.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/schwimmerei.jpg"} alt="Schwimmerei Berlin"/></a>
        <a href="https://bodo-niggemann.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/bodoniggemann.jpg"} alt="Bodo Niggemann"/></a>
        <a href="https://naturkosmetik-potsdam.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/ashamal.jpg"} alt="Naturkosmetik Ashamal"/></a>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/berlindelights.jpg"} alt="Berlin Delights"/>
        <a href="https://playground21.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/playground21.jpg"} alt="Playground 21"/></a>
        <a href="https://www.emmaundlukas.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/emmaundlukas.jpg"} alt="Emma und Lukas"/></a>
        <a href="https://yourtimeyourmoment-fotografie.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/yourtimeyourmoment.jpg"} alt="Your Time Your Moment Fotografie"/></a>
        <a href="https://kuz-berlin.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kuz.jpg"} alt="KUZ Gesundheitstechnik Berlin"/></a>
        <a href="https://www.kayasphysio.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kayascoaching.jpg"} alt="KayasPhysio"/></a>
        <a href="https://comfort-sugaring.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/sugaring.jpg"} alt="Comfort Sugaring"/></a>
        <a href="https://www.insidertrip.de/" target="blank"><img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/insidertrip.jpg"} alt="Insidertrip"/></a>
        
        </div>
      </div>
    );
  }
}
export default Portfolio;
