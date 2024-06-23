import React from "react";
import styles from "../css/landingzone.module.css";
import { motion } from "framer-motion";  

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.01
    }
  }
}

class LandingZone extends React.Component {
  render() {
    return (
      <div>
        <motion.div variants={fadeInAnimationVariant} initial="initial" whileInView="animate" viewport={{once:true}} className={`${styles.frame}`}>
          <div className={`${styles.picture}`}>
            <img src={process.env.PUBLIC_URL + "/images/profile.png"} width="225px" alt="Daniel Maelzer"/>
          </div>
          <div className={`${styles.text}`}>
            <h1>Hi, ich bin Daniel.</h1>
            <h2>Ich bin <span style={{ color: "#FF4093" }}>Webentwickler</span> und <span style={{ color: "#FF7F1D" }}>Problemlöser</span>.</h2>
            <h2>Schau dir doch mal meine Arbeiten an.</h2>
          </div>
          <div className={`${styles.buttons}`}>
            <a href="/about"><button className={`${styles.about}`}>about</button></a>
            <a href="/portfolio"><button className={`${styles.portfolio}`}>portfolio</button></a>
          </div>
        </motion.div>

        <motion.div variants={fadeInAnimationVariant} initial="initial" whileInView="animate" viewport={{once:true}} className={`${styles.links}`}>
          <a href="/contact">
            <img
              className={`${styles.icon}`}
              src={process.env.PUBLIC_URL + "/images/icons/mail.png"}
              alt="Mail Icon"
            />
          </a>
          <a
            target="_blank"
            href="https://de.linkedin.com/in/daniel-maelzer-3934541a7"
          >
            <img
              className={`${styles.icon}`}
              src={process.env.PUBLIC_URL + "/images/icons/linkedin.png"}
              alt="LinkedIn Icon"
            />
          </a>
          <a target="_blank" href="https://www.xing.com/profile/Daniel_Maelzer">
            <img
              className={`${styles.icon}`}
              src={process.env.PUBLIC_URL + "/images/icons/xing.png"}
              alt="Xing Icon"
            />
          </a>
        </motion.div>
      </div>
    );
  }
}
export default LandingZone;
