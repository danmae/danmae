import React, { useState, useRef } from 'react';
import "../css/contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [buttonmsg, setButtonmsg] = useState("Senden");
  const [schriftfarbe, setSchriftfarbe] = useState('rgb(255, 127, 29)');
  const [border, setBorder] = useState('1px solid lightgray');
  // Function called on submit that uses emailjs to send email of valid contact form
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setButtonmsg("Nachricht wird gesendet...");
    e.preventDefault();
    emailjs
      .sendForm('service_hm798e3', 'template_etvwrb5', form.current!, '0gxTA7VVH76n-cfJ7')
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
        <input type="text" name="name" placeholder='Name'/>
        <input type="text" name="phone" placeholder='Telefonnummer'/>
        <input type="email" name="mail" placeholder='E-Mail'/>
        <textarea name="anfrage" placeholder='Deine Nachricht'/>
        <input type="submit" value={buttonmsg} style={{color: schriftfarbe, border: border}}/>
        </div>
      </form>
    </div>

  );
};

export default Contact;