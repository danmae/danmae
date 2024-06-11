import React, { useState, useRef } from 'react';
import "../css/contact.css";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [capVal, setCapVal] = useState<any | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const [buttonmsg, setButtonmsg] = useState("Senden");
  const [schriftfarbe, setSchriftfarbe] = useState('rgb(255, 127, 29)');
  const [border, setBorder] = useState('1px solid lightgray');

  // Function called on submit that uses emailjs to send email of valid contact form
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setButtonmsg("Nachricht wird gesendet...");
    e.preventDefault();
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID as string, process.env.REACT_APP_TEMPLATE_ID as string, form.current!, process.env.REACT_APP_USER_ID as string)
      .then(
        () => {
          setButtonmsg("Nachricht wurde Gesendet");
          setSchriftfarbe('green');
          setBorder('1px solid green');
          form.current!.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <nav className="mobileNav">
        <a className="mobiletext" href="/">zurück</a>
        <a className="mobiletext" href="/about">about</a>
      </nav>
      <h1 className='contact-heading'>Du hast eine Frage?</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className='contact'>
        <input type="text" name="name" placeholder='Name'required/>
        <input type="text" name="phone" placeholder='Telefonnummer'required/>
        <input type="email" name="mail" placeholder='E-Mail'required/>
        <textarea name="anfrage" placeholder='Deine Nachricht'required/>
        <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY as string} onChange={(val) => setCapVal(val)}/>
        <input type="submit" disabled={!capVal} value={buttonmsg} style={{color: schriftfarbe, border: border}}/>
        </div>
      </form>
    </div>

  );
};

export default Contact;