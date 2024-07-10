import React from "react";
import styles from "../css/portfolio.module.css";
import {Row, Col, Container} from 'react-bootstrap';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h1 className={`${styles.portfolioText}`}>Portfolio</h1>
        <nav className={`${styles.mobileNav}`}>
          <a className={`${styles.mobiletext}`} href="/">zurück</a>
          <a className={`${styles.mobiletext}`} href="/about">about</a>
        </nav>
        <Container>
          <Row>
            <Col lg={4} xs={12} className="my-2"><a href="https://kinder-jahre.com/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/kinderjahre.jpg"} alt="Kinderjahre"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://kenntnisreich-kindertagesstaetten.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/kenntnisreich-kindertagesstaetten.jpg"} alt="Kenntnisreich Kindertagesstätten"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://aundotherapie.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/aundotherapie.jpg"} alt="AundO Therapie Berlin"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://kinderstubeonline.com/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/kinderstube.jpg"} alt="Kinderstube Online"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://kinderstubeonline.com/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/kinderstube.jpg"} alt="Kinderstube Online"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://berlinerstadtkinder.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/stadtkinder.jpg"} alt="Berliner Stadtkinder"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://schwimmerei-berlin.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/schwimmerei.jpg"} alt="Schwimmerei Berlin"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://bodo-niggemann.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/bodoniggemann.jpg"} alt="Bodo Niggemann"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://naturkosmetik-potsdam.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/ashamal.jpg"} alt="Naturkosmetik Ashamal"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/berlindelights.jpg"} alt="Berlin Delights"/></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://playground21.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/playground21.jpg"} alt="Playground 21"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://www.emmaundlukas.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/emmaundlukas.jpg"} alt="Emma und Lukas"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://yourtimeyourmoment-fotografie.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/yourtimeyourmoment.jpg"} alt="Your Time Your Moment Fotografie"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://kuz-berlin.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/kuz.jpg"} alt="KUZ Gesundheitstechnik Berlin"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://www.kayasphysio.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/kayascoaching.jpg"} alt="KayasPhysio"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://comfort-sugaring.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/sugaring.jpg"} alt="Comfort Sugaring"/></a></Col>
            <Col lg={4} xs={12} className="my-2"><a href="https://www.insidertrip.de/" target="blank"><img className={`${styles.gridItem}`} src={process.env.PUBLIC_URL + "/images/projects/insidertrip.jpg"} alt="Insidertrip"/></a></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Portfolio;
