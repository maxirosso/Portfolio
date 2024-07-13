import React from 'react';
import './intro.css';
import bg from '../../assets/maxi_img.jpg';
import { Link } from 'react-scroll';
import btnImg from '../../assets/btnImg.png';

const Intro = () => {
  return (
   <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hola,</span>
            <span className="introText">Soy <span className="introName">Maximo</span> <br />Diseñador de Paginas web</span>
            <p className='introPara'>Soy un estudiante de Ingenieria Informatica de 4to año de la UADE </p>
            <Link><button className="btn"><img src={btnImg} alt="Contratame" className='btnImg' />Contratame</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg'/>
   </section>
  )
}

export default Intro
