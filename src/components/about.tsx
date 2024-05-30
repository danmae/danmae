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
            <h1>Hi, ich bin Daniel!</h1>
            <p>Ich bin Informatiker/Webentwickler aus Berlin.
                Ich entwickle Webseiten und helfe Ihnen digitale Lösungen für Ihr Unternehmen zu gestalten.</p>             
            <a href="/uploads/cv-ger.pdf" target="_blank"><button><img src="images/icons/download.png" width="12%"/>Lebenslauf</button></a>
            <a href="https://www.linkedin.com/in/daniel-maelzer-3934541a7/details/certifications/" target="_blank"><button><img src="images/icons/download.png" width="12%"/>Zertifikate</button></a>
          </div>
        </div>

      <h1 className="serviceHeading">Services</h1>

      <div className="services-section">
        <div className="wordpress">
          <img className="serviceIcon" src="images/services/wordpress-logo.png"/>
          <h2 className="serviceSubHeading">Wordpress</h2>
          <p>Eine Webseite für das eigene Geschäft oder Webshop mit Warenwirtschaftssystem für den großen Verlag, Ich biete Ihnen eine sorglose und transparente Komplettlösung.</p>      
        </div>
        <div className="seo">
          <img className="serviceIcon" src="images/services/analysis.png"/>
          <h2 className="serviceSubHeading">SEO</h2>
          <p>Ich baue mit Ihnen robuste SEO Strategien, damit Ihr Business noch erfolgreicher im Web wird. Durch den Einsatz von Analyse Tools können Sie den Fortschritt bequem von Zuhause verfolgen.</p>      
        </div>
        <div className="maintenance">
          <img className="serviceIcon" src="images/services/tools.png"/>
          <h2 className="serviceSubHeading">Maintenance</h2>
          <p>Ich kümmere mich gerne um die Weiterentwicklung, Umgestaltung, Wartung oder Neu-Installation Ihrer WordPress Webseite. Ich stehe Ihnen auch ohne Umwege beratend zur Verfügung.</p>      
        </div>
        <div className="hosting">
          <img className="serviceIcon" src="images/services/database.png"/>
          <h2 className="serviceSubHeading">Hosting</h2>
          <p>Ich optimiere die Ladezeiten ihrer Webseite und kümmere mich dabei um das optimale Hostingangebot, regelmäßige Sicherungen oder den eigenen E-Mailserver.</p>      
        </div>
      </div>

      </div>
    );
  }
}
export default About;
