import React, { useRef, useState, useEffect } from 'react';
import Mail from "../../assets/mail.svg"
import emailjs from '@emailjs/browser';
import "../Contact/Contact.scss"

function Contact() {

  // EmailJs config
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

  // Manual form validation
  const initialValues = { user_name:"", user_firstname:"", user_email:"", subject:"", message:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]:value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.user_name) {
      errors.user_name = "N'oubliez pas votre nom!";
    }
    if (!values.user_firstname) {
      errors.user_firstname = "N'oubliez pas votre prénom!";
    }
    if (!values.user_email) {
      errors.user_email = "N'oubliez pas votre adresse mail!";
    }
    else if (!regex.test(values.user_email)) {
      errors.user_email = "Cette adresse mail n'est pas valide";
    }
    if (!values.subject) {
      errors.subject = "N'oubliez pas me dire de quoi ça parle!";
    }
    if (!values.message) {
      errors.message = "N'oubliez pas votre message!";
    }
    else if (values.message.length < 25) {
      errors.message = "Ce message mériterait plus de caractères...";
    }
    return errors;
  };

  // Check validation and run emailJs if validation is ok 
  const runBoth = (e) => {
    handleSubmit(e);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendEmail();
    }
  };

    return (
      <div id="contact" className='contact'>
        <form className='form' ref={form} onSubmit={runBoth}>
          <div className='contact-me'>
            <h2 className='form__title'>ME CONTACTER</h2>
            <p>Vous pouvez aussi simplement m'envoyer un mail à cette adresse: <a className='form__link' href='mailto:anaislcno@gmail.com'>anaislcno@gmail.com</a></p>
          </div>
          <div className='form__names'>
            <div className='form__names--style'>
              <label className='form__label '>Nom</label>
              <input className='form__input' type="text" name="user_name" value={formValues.user_name} onChange={handleChange} placeholder='Nom' />
              <p>{formErrors.user_name}</p>
            </div>
            <div className='form__names--style'>
              <label className='form__label'>Prénom</label>
              <input className='form__input' type="text" name="user_firstname" value={formValues.user_firstname} onChange={handleChange} placeholder='Prénom' />
              <p>{formErrors.user_firstname}</p>
            </div>
          </div>
            <label className='form__label'>Email</label>
            <input className='form__input' type="email" name="user_email" value={formValues.user_email} onChange={handleChange} placeholder='unesuperadresse@gmail.com' />
            <p>{formErrors.user_email}</p>
            <label className='form__label'>Sujet</label>
            <input className='form__input' type="text" name="subject" value={formValues.subject} onChange={handleChange} placeholder='Une super idée' />
            <p>{formErrors.subject}</p>
            <label className='form__label'>Message</label>
            <textarea className='form__input' name="message" value={formValues.message} onChange={handleChange} placeholder='Une super idée avec plus de détails' />
            <p>{formErrors.message}</p>
            <input className='btn' type="submit" value="Envoyer" />
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="success">Votre message à bien été envoyé</div>
            ) : (
              <></>
            )}
        </form>
        <img className='form__img' src={Mail} alt='Mailbox'></img>
      </div>
    )
  }
  
  export default Contact