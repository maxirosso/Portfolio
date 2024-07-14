import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contactImg.png';
import menu from '../../assets/burgerMenu.png';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopmenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-120} duration={500} className='desktopMenuListItem'>Sobre Mi</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-150} duration={500} className='desktopMenuListItem'>Portafolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-140} duration={500} className='desktopMenuListItem'>Clientes</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}>
          <img src={contactImg} alt="" className="desktopMenuImg" />Contactame</button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem'  onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-120} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Sobre Mi</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-150} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portafolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-140} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Clientes</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-140} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contacto</Link>
        </div>
    </nav>
  )
}

export default Navbar
