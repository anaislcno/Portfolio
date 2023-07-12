import React, { useRef } from 'react';
import Mail from "../../assets/mail.svg"
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
      <div id="contact" className='contact'>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <div className='contact-me'>
            <h2 className='form__title'>ME CONTACTER</h2>
            <p>Vous pouvez aussi simplement m'envoyer un mail à cette adresse: <a className='form__link' href='mailto:anaislcno@gmail.com'>anaislcno@gmail.com</a></p>
          </div>
          <div className='form__names'>
            <div className='form__names--style'>
              <label className='form__label '>Nom</label>
              <input className='form__input' type="text" name="user_name" placeholder='Nom' required />
            </div>
            <div className='form__names--style'>
              <label className='form__label'>Prénom</label>
              <input className='form__input' type="text" name="user_firstname" placeholder='Prénom' required/>
            </div>
          </div>
            <label className='form__label'>Email</label>
            <input className='form__input' type="email" name="user_email" placeholder='unesuperadresse@gmail.com' required/>
            <label className='form__label'>Sujet</label>
            <input className='form__input' type="text" name="subject" placeholder='Une super idée' required/>
            <label className='form__label'>Message</label>
            <textarea className='form__input' name="message" placeholder='Une super idée avec plus de détails' required/>
            <input className='btn' type="submit" value="Envoyer" />
        </form>
        <img className='form__img' src={Mail} alt='Mailbox'></img>
      </div>
    )
  }
  
  export default Contact