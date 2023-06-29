import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import '../Header/Header.scss'

function Header() {
  return (
    <header className='header'>
    <NavLink to="/">
        <img src={Logo} alt='Logo' className='header__logo'/>
    </NavLink>
    <nav className='navbar'>
      <NavLink className='navbar__link' to="/">À PROPOS</NavLink>
      <NavLink className='navbar__link' to="/">COMPÉTENCES</NavLink>
      <NavLink className='navbar__link' to="/">RÉALISATIONS</NavLink>
      <NavLink className='navbar__link' to="/">CONTACT</NavLink>
    </nav>
    </header>
  )
}

export default Header 