import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contactImg.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopmenu">
          <Link className='desktopMenuListItem'>Home</Link>
          <Link className='desktopMenuListItem'>Sobre Mi</Link>
          <Link className='desktopMenuListItem'>Portafolio</Link>
          <Link className='desktopMenuListItem'>Clientes</Link>
        </div>
        <button className='desktopMenuBtn'>
          <img src={contactImg} alt="" className="desktopMenuImg" />Contactame</button>
    </nav>
  )
}

export default Navbar
