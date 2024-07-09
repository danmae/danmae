import React from "react";
import styles from "../css/landingzone.module.css";
import { motion } from "framer-motion";  
import * as animations from "../js/animations.js";

class LandingZone extends React.Component {
  render() {
    return (
      <div>
        <motion.div variants={animations.fadeInAnimationVariant1} initial="initial" whileInView="animate" viewport={{once:true}} className={`${styles.frame}`}>
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

        <div className={`${styles.links}`}>
          <motion.div variants={animations.fadeInAnimationVariant1} initial="initial" whileInView="animate" viewport={{once:true}}>
          <a href="/contact">
            <img
              className={`${styles.icon}`}
              src={process.env.PUBLIC_URL + "/images/icons/mail.png"}
              alt="Mail Icon"
            />
          </a>
          </motion.div>
          <motion.div variants={animations.fadeInAnimationVariant2} initial="initial" whileInView="animate" viewport={{once:true}}>
          <a
            target="_blank" rel="noreferrer"
            href="https://de.linkedin.com/in/daniel-maelzer-3934541a7"
          >
            <img
              className={`${styles.icon}`}
              src={process.env.PUBLIC_URL + "/images/icons/linkedin.png"}
              alt="LinkedIn Icon"
            />
          </a>
          </motion.div>
          <motion.div variants={animations.fadeInAnimationVariant3} initial="initial" whileInView="animate" viewport={{once:true}}>
          <a target="_blank" rel="noreferrer" href="https://www.xing.com/profile/Daniel_Maelzer">
            <img
              className={`${styles.icon}`}
              src={process.env.PUBLIC_URL + "/images/icons/xing.png"}
              alt="Xing Icon"
            />
          </a>
          </motion.div>
        </div>
      </div>
    );
  }
}
export default LandingZone;
