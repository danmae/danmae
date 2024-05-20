import React from "react";
import "../css/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="impressum">
          <a href="/impressum.html">Impressum</a>
        </div>

        {
          /* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
        <script src="js/main.js"></script>
        <script src="js/jquery-2.1.1.js"></script>
        <script src="js/main.js"></script>
        */
        }
      </div>
    );
  }
}
export default Footer;
