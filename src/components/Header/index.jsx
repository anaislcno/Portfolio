import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import Logo from '../../assets/logo.svg'
import '../Header/Header.scss'
import { FaTimes, FaArrowDown } from "react-icons/fa";

function Header() {

  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(FaArrowDown)

  const toggle = () => {
      setOpen(!open);
      setIcon(open ? FaArrowDown : FaTimes);
    };

  return (
    <header className='header'>
      <div className='header__border'>
        <NavLink to="/">
          <img src={Logo} alt='Logo' className='header__logo'/>
        </NavLink>
      <MediaQuery minWidth={769}>
        {matches => matches && (
          <nav className='navbar'>
            <a href='#about' className='navbar__link'>À PROPOS</a>
            <a href='#competences' className='navbar__link'>COMPÉTENCES</a>
            <a href='#works' className='navbar__link'>RÉALISATIONS</a>
            <a href='#contact' className='navbar__link'>CONTACT</a>  
          </nav>
        )}
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        {matches => matches && (
          <div className='collapse'>
            <button className='collapse__btn' onClick={toggle}>
              <span className='collapse__icon'>{icon}</span>
            </button>
            {open && (
              <div className="collapse__text">
                <nav className='navbar--small'>
                    <a href='#about' className='navbar__link--small'>À PROPOS</a>
                    <a href='#competences' className='navbar__link--small'>COMPÉTENCES</a>
                    <a href='#works' className='navbar__link--small'>RÉALISATIONS</a>
                    <a href='#contact' className='navbar__link--small'>CONTACT</a>
                  </nav>
              </div>
            )}
          </div>
        )}
      </MediaQuery>
      </div>
    </header>
  )
}

export default Header 