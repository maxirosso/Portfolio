import React, { useRef } from 'react';
import './contacto.css';
import InstagramIcon from '../../assets/instagram_icon.png';
import LinkednIcon from '../../assets/linkedn_icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_613gaq1', 'template_trylgmd', form.current, 'rmvTtVQhx4smZDjgs')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert(`Failed to send email. Error: ${error.text}`);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Mis Clientes</h1>
        <p className='clientDesc'>
          El servicio al cliente es absolutamente personalizado se contempla cada detalle de su actividad.
        </p>
        <div className="clientImgs">
          <img src="" alt="" className='clientImg' />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contactame</h1>
        <span className='contactDesc'>Por favor rellena el formulario para discutir cualquier oportunidad de trabajo.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Tu Nombre' name='your_name' required />
          <input type="email" className="email" placeholder='Tu Email' name='your_email' required />
          <textarea className='msg' name="message" rows="5" placeholder='Tu Mensaje' required></textarea>
          <button type='submit' value='Send' className="submitBtn">Enviar</button>
          <div className="links">
            <a href="https://www.instagram.com/maxirosso3/" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/maximo-rosso/" target="_blank" rel="noopener noreferrer">
              <img src={LinkednIcon} alt="Linkedn" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
