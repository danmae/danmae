import React from "react";
import "../css/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="impressum">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    );
  }
}
export default Footer;