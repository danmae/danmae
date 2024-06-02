import React from "react";
import "../css/about.css";

class About extends React.Component {
  render() {
    return (
      <div>
        
        <nav className="mobileNav">
          <a className="mobiletext" href="/">zurück</a>
          <a className="mobiletext" href="/portfolio">portfolio</a>
        </nav>

        <div className="about-intro">
          <div className="intro-picture">
            <img src={process.env.PUBLIC_URL + "/images/aboutme.jpg"} className="intro-image" width="50%"/>
          </div>
          <div className="intro-text">
            <h1 className="introHeading"><span style={{color: '#FF4093'}}>Hi</span>, ich bin <span style={{color: '#FF7F1D'}}>Daniel</span>!</h1>
            <p>Ich bin Informatiker/Webentwickler aus Berlin.
                Ich entwickle Webseiten und helfe Ihnen digitale Lösungen für Ihr Unternehmen zu gestalten.</p>             
            <div className="download-buttons">
              <div className="download-button-1">
                <a href="/uploads/cv-ger.pdf"><button className="about portfolio"><img src="images/icons/download.png" className="download-image" width="20px"/>Lebenslauf</button></a>
              </div>
              <div className="download-button-2">
                <a href="https://www.linkedin.com/in/daniel-maelzer-3934541a7/details/certifications/"><button className="portfolio"><img src="images/icons/download.png" className="download-image" width="20px"/>Zertifikate</button></a>
              </div>
            </div>
          </div>
        </div>

      <h1 className="serviceHeading"><span style={{color: '#FF7F1D'}}>Services</span></h1>

      <div className="services-section">
        <div className="wordpress">
          <img className="serviceIcon" src="images/services/wordpress-logo.png"/>
          <h2 className="serviceSubHeading">Wordpress</h2>
          <p className="serviceText">Eine Webseite für das eigene Geschäft oder Webshop mit Warenwirtschaftssystem für den großen Verlag, Ich biete Ihnen eine sorglose und transparente Komplettlösung.</p>      
        </div>
        <div className="seo">
          <img className="serviceIcon" src="images/services/analysis.png"/>
          <h2 className="serviceSubHeading">SEO</h2>
          <p className="serviceText">Ich baue mit Ihnen robuste SEO Strategien, damit Ihr Business noch erfolgreicher im Web wird. Durch den Einsatz von Analyse Tools können Sie den Fortschritt bequem von Zuhause verfolgen.</p>      
        </div>
        <div className="maintenance">
          <img className="serviceIcon" src="images/services/tools.png"/>
          <h2 className="serviceSubHeading">Maintenance</h2>
          <p className="serviceText">Ich kümmere mich gerne um die Weiterentwicklung, Umgestaltung, Wartung oder Neu-Installation Ihrer WordPress Webseite. Ich stehe Ihnen auch ohne Umwege beratend zur Verfügung.</p>      
        </div>
        <div className="hosting">
          <img className="serviceIcon" src="images/services/database.png"/>
          <h2 className="serviceSubHeading">Hosting</h2>
          <p className="serviceText">Ich optimiere die Ladezeiten ihrer Webseite und kümmere mich dabei um das optimale Hostingangebot, regelmäßige Sicherungen oder den eigenen E-Mailserver.</p>      
        </div>
      </div>

      </div>
    );
  }
}
export default About;
