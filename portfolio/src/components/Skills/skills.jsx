import React from 'react';
import './skills.css';
import UIdesign from '../../assets/uiux.png';
import WebDesign from '../../assets/websitedgn.png';
import AppDesign from '../../assets/appdgn.webp';

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>¿Que hago?</span>
        <span className="skillDesc">Estudiante de Ingeniería informática con conocimientos de programación (Python, Java, JavaScript, ReactJs) y experiencia en administración de sistemas.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIdesign} alt="DiseñoUI" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Diseño UI/UX</h2>
                    <p>Como diseñador de UI/UX, me especializo en crear interfaces de usuario intuitivas y atractivas que mejoran la experiencia del usuario. Utilizo principios de diseño centrado en el usuario para desarrollar soluciones visuales que no solo sean estéticamente agradables, sino también funcionales y fáciles de usar. </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="DiseñoWeb" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Diseño Web</h2>
                    <p>Me especializo en el desarrollo front-end, creando sitios web atractivos y responsivos con HTML, CSS y JavaScript. Me enfoco en experiencias de usuario excepcionales con interfaces visualmente atractivas y funcionales. Actualmente, estoy aprendiendo desarrollo back-end con Node.js y bases de datos para ofrecer soluciones web más completas e integradas.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="DiseñoApp" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Diseño de Aplicaciones</h2>
                    <p>DemoTest</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills
