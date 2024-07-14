import React from 'react';
import './works.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>Trabajos Realizados</h2>
      <div className='workItem'>
        <h3>Perfil de LinkedIn</h3>
        <p>Conéctate conmigo en LinkedIn para conocer más sobre mi experiencia y habilidades profesionales.</p>
        <a href='https://www.linkedin.com/in/maximo-rosso/' target='_blank' rel='noopener noreferrer' className='workLink'>
          <FaLinkedin className='workIcon' /> LinkedIn
        </a>
      </div>
      <div className='workItem'>
        <h3>Proyecto de eCommerce</h3>
        <p>Este es un proyecto de tienda en línea en el que he trabajado. El código fuente está disponible en GitHub.</p>
        <div className='projectLinks'>
          <a href='https://github.com/ElishebaTawil/AppIntG1-Front' target='_blank' rel='noopener noreferrer' className='workLink'>
            <FaGithub className='workIcon' /> Frontend
          </a>
          <a href='https://github.com/ElishebaTawil/AppIntG1-Back' target='_blank' rel='noopener noreferrer' className='workLink'>
            <FaGithub className='workIcon' /> Backend
          </a>
        </div>
      </div>
    </section>
  )
}

export default Works;
