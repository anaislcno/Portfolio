import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import '../Header/Header.scss'

function Header() {
  return (
    <header className='header'>
      <div className='header__border'>
        <NavLink to="/">
          <img src={Logo} alt='Logo' className='header__logo'/>
        </NavLink>
      <nav className='navbar'>
        <a href='#about' className='navbar__link'>À PROPOS</a>
        <a href='#competences' className='navbar__link'>COMPÉTENCES</a>
        <a href='#works' className='navbar__link'>RÉALISATIONS</a>
        <a href='#contact' className='navbar__link'>CONTACT</a>
      </nav>
      </div>
    </header>
  )
}

export default Header 