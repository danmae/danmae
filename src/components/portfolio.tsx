import React from "react";
import "../css/portfolio.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h1 className="portfolio-text">Portfolio</h1>
        <div className="portfolio-grid">
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kinderjahre.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kenntnisreich-kindertagesstaetten.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/aundotherapie.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kinderstube.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/stadtkinder.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/schwimmerei.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/bodoniggemann.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/ashamal.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/berlindelights.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/playground21.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/emmaundlukas.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/yourtimeyourmoment.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kuz.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/kayascoaching.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/sugaring.jpg"} alt="Kinderjahre"/>
        <img className="grid-item" src={process.env.PUBLIC_URL + "/images/projects/insidertrip.jpg"} alt="Kinderjahre"/>
        
        </div>
      </div>
    );
  }
}
export default Portfolio;
