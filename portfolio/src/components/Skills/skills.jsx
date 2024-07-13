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
                    <p>DemoTest</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="DiseñoWeb" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Diseño Web</h2>
                    <p>DemoTest</p>
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
