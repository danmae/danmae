import React from "react";
import styles from "../css/about.module.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <nav className={`${styles.mobileNav}`}>
          <a className={`${styles.mobiletext}`} href="/">zurück</a>
          <a className={`${styles.mobiletext}`} href="/portfolio">portfolio</a>
        </nav>
        <div className={`${styles.aboutIntro}`}>
          <div className={`${styles.introPicture}`}>
            <img src={process.env.PUBLIC_URL + "/images/aboutme.jpg"} className={`${styles.introImage}`} width="50%" alt="Profilbild Daniel Maelzer"/>
          </div>
          <div className={`${styles.introText}`}>
            <h1 className={`${styles.introHeading}`}><span style={{color: '#FF4093'}}>Hi</span>, ich bin <span style={{color: '#FF7F1D'}}>Daniel</span>!</h1>
            <p>Ich bin Informatiker/Webentwickler aus Berlin.
                Ich entwickle Webseiten und helfe Ihnen digitale Lösungen für Ihr Unternehmen zu gestalten.</p>             
            <div className={`${styles.downloadButtons}`}>
              <div className={`${styles.downloadButton1}`}>
                <a href="/uploads/cv-ger.pdf"><button className={`${styles.about}`}><img src="images/icons/download.png" className={`${styles.downloadImage}`} width="20px" alt="Download Lebenslauf"/>Lebenslauf</button></a>
              </div>
              <div className={`${styles.downloadButton2}`}>
                <a href="https://www.linkedin.com/in/daniel-maelzer-3934541a7/details/certifications/"><button className={`${styles.portfolio}`}><img src="images/icons/download.png" className={`${styles.downloadImage}`} width="20px" alt="Download Zertifikate"/>Zertifikate</button></a>
              </div>
            </div>
          </div>
        </div>

      <h1 className={`${styles.serviceHeading}`}><span style={{color: '#FF7F1D'}}>Services</span></h1>

      <div className={`${styles.servicesSection}`}>
        <div className={`${styles.wordpress}`}>
          <img className={`${styles.serviceIcon}`} src="images/services/wordpress-logo.png" alt="Wordpress as a Service"/>
          <h2 className={`${styles.serviceSubHeading}`}>Wordpress</h2>
          <p className={`${styles.serviceText}`}>Eine Webseite für das eigene Geschäft oder Webshop mit Warenwirtschaftssystem für den großen Verlag, Ich biete Ihnen eine sorglose und transparente Komplettlösung.</p>      
        </div>
        <div className={`${styles.seo}`}>
          <img className={`${styles.serviceIcon}`} src="images/services/analysis.png" alt="SEO - Suchmaschinenoptimierung"/>
          <h2 className={`${styles.serviceSubHeading}`}>SEO</h2>
          <p className={`${styles.serviceText}`}>Ich baue mit Ihnen robuste SEO Strategien, damit Ihr Business noch erfolgreicher im Web wird. Durch den Einsatz von Analyse Tools können Sie den Fortschritt bequem von Zuhause verfolgen.</p>      
        </div>
        <div className={`${styles.maintenance}`}>
          <img className={`${styles.serviceIcon}`} src="images/services/tools.png" alt="Wartung und Weiterentwicklung"/>
          <h2 className={`${styles.serviceSubHeading}`}>Maintenance</h2>
          <p className={`${styles.serviceText}`}>Ich kümmere mich gerne um die Weiterentwicklung, Umgestaltung, Wartung oder Neu-Installation Ihrer WordPress Webseite. Ich stehe Ihnen auch ohne Umwege beratend zur Verfügung.</p>      
        </div>
        <div className={`${styles.hosting}`}>
          <img className={`${styles.serviceIcon}`} src="images/services/database.png" alt="Hosting und Webseitenhosting"/>
          <h2 className={`${styles.serviceSubHeading}`}>Hosting</h2>
          <p className={`${styles.serviceText}`}>Ich optimiere die Ladezeiten ihrer Webseite und kümmere mich dabei um das optimale Hostingangebot, regelmäßige Sicherungen oder den eigenen E-Mailserver.</p>      
        </div>
      </div>

      </div>
    );
  }
}
export default About;
