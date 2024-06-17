import React from "react";
import styles from "../css/footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <div className={`${styles.impressum}`}>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    );
  }
}
export default Footer;