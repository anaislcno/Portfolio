import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Contact/Contact.scss"

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        console.log("message envoyé");
      }, (error) => {
        console.log(error.text);
      });
  };
    return (
      <div>
        <form ref={form} onSubmit={sendEmail}>
            <label>Nom</label>
            <input type="text" name="user_name" />
            <label>Prénom</label>
            <input type="text" name="user_firstname" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Sujet</label>
            <input type="text" name="subject" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
  
  export default Contact