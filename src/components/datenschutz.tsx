import React from "react";
import styles from "../css/footer.module.css";

class Datenschutz extends React.Component {
  render() {
    return (
      <div>
        <h1 className="centered">Datenschutz</h1>
        <nav className={`${styles.mobileNav}`}>
          <a className={`${styles.mobiletext}`} href="/">zurück</a>
          <a className={`${styles.mobiletext}`} href="/about">about</a>
        </nav>
    <h2>1. Einleitung</h2>
    <p className={`${styles.justified}`}>Willkommen auf unserer Webseite. Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

    <h2>2. Verantwortlicher</h2>
    <p className={`${styles.justified}`}>Verantwortlicher für die Datenverarbeitung auf dieser Webseite ist:</p>
    <p>Daniel Maelzer<br></br>
    Mildred-Harnack-Str 7, 14480 Potsdam<br></br>
    daniel@lostingravity.de<br></br>
    01755959922</p>

    <h2>3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>

    <h3>a) Beim Besuch der Webseite</h3>
    <p className={`${styles.justified}`}>Beim Aufrufen unserer Webseite www.danmae.de werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Webseite gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p>
    
    <p className={`${styles.leftFloated}`}>- IP-Adresse des anfragenden Rechners,<br></br>
    - Datum und Uhrzeit des Zugriffs,<br></br>
    - Name und URL der abgerufenen Datei,<br></br>
    - Webseite, von der aus der Zugriff erfolgt (Referrer-URL),<br></br>
    - verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</p>

    <p>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
    
    <p className={`${styles.leftFloated}`}>- Gewährleistung eines reibungslosen Verbindungsaufbaus der Webseite,<br></br>
    - Gewährleistung einer komfortablen Nutzung unserer Webseite,<br></br>
    - Auswertung der Systemsicherheit und -stabilität sowie<br></br>
    - zu weiteren administrativen Zwecken.</p>

    <p className={`${styles.justified}`}>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung.</p>

    <h3>b) Bei der Nutzung unseres Kontaktformulars</h3>
    <p className={`${styles.justified}`}>Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Webseite bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.</p>
    <p className={`${styles.justified}`}>Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.</p>

    <h2>4. Cookies</h2>
    <p className={`${styles.justified}`}>Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.</p>
    <p className={`${styles.justified}`}>In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.</p>

    <h3>a) Google Analytics</h3>
    <p className={`${styles.justified}`}>Wir nutzen auf unserer Webseite Google Analytics, einen Webanalysedienst der Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Google Analytics verwendet sogenannte "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen.</p>
    <p className={`${styles.justified}`}>Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite wie</p>
    
    <p className={`${styles.leftFloated}`}>- Browser-Typ/-Version,<br></br>
    - verwendetes Betriebssystem,<br></br>
    - Referrer-URL (die zuvor besuchte Seite),<br></br>
    - Hostname des zugreifenden Rechners (IP-Adresse),<br></br>
    - Uhrzeit der Serveranfrage,</p>

    <p className={`${styles.justified}`}>werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Informationen werden verwendet, um die Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen zu Zwecken der Marktforschung und bedarfsgerechten Gestaltung dieser Internetseiten zu erbringen.</p>

    <h3>b) Opt-Out-Möglichkeit</h3>
    <p className={`${styles.justified}`}>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Webseite vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie ein Browser-Add-on herunterladen und installieren.</p>

    <h2>5. Rechte der betroffenen Person</h2>
    <p className={`${styles.justified}`}>Sie haben das Recht:</p>

    <p className={`${styles.justified, styles.leftFloated}`}>- gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen,<br></br>
    - gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,<br></br>
    - gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,<br></br>
    - gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,<br></br>
    - gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen,<br></br>
    - gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen,<br></br>
    - gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</p>

    <h2>6. Widerspruchsrecht</h2>
    <p className={`${styles.justified}`}>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.</p>

    <h2>7. Datensicherheit</h2>
    <p className={`${styles.justified}`}>Wir verwenden innerhalb des Webseiten-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.</p>

    <h2>8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
    <p className={`${styles.justified}`}>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2024. Durch die Weiterentwicklung unserer Webseite und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Webseite unter Link zur Datenschutzerklärung von Ihnen abgerufen und ausgedruckt werden.</p>

    <h2>9. Kontakt</h2>
    <p className={`${styles.justified}`}>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
    <p>Daniel Maelzer<br></br>
    Mildred-Harnack-Str 7, 14480 Potsdam<br></br>
    daniel@lostingravity.de<br></br>
    01755959922</p>
       </div>
    );
  }
}
export default Datenschutz;
