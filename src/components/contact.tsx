import React, { useState } from 'react';
import "../css/contact.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [firma, setFirma] = useState('');
  const [anfrage, setAnfrage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Name: ${name}, Phone: ${phone}, Mail: ${mail}, Firma: ${firma}, Problem: ${anfrage}`);
  };

  return (
    <div>
      <nav className="mobileNav">
        <a className="mobiletext" href="/">zurück</a>
        <a className="mobiletext" href="/about">about</a>
      </nav>
      <h1 className='contact-heading'>Du hast eine Frage?</h1>
      <form onSubmit={handleSubmit}>
        <div className='contact'>
          <input className='' type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder='Name*' required/>
          <input className='' type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder='Telefonnummer'/>
          <input className='' type="text" id="firma" name="firma" value={firma} onChange={e => setFirma(e.target.value)} placeholder='Firma'/>
          <input className='' type="text" id="mail" name="mail" value={mail} onChange={e => setMail(e.target.value)} placeholder='E-Mail Adresse*' required/>
          <textarea className='' id="anfrage" name="anfrage" value={anfrage} onChange={e => setAnfrage(e.target.value)} placeholder='Dein Anliegen*' required/>
          <input className='' type="submit" value="Absenden"/>
        </div>
      </form>
    </div>

  );
};

export default Contact;