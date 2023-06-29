import Logo from '../../assets/logo.svg'
import '../Footer/Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_icons'>
        <a
          className='icon'
          href="https://github.com/anaislcno"
          target='_blank'
          rel="noreferrer"
          aria-label='Github'
        >
          <i class='fab fa-github' />
        </a>
        <img src={Logo} alt='' className='icon_logo' />
        <a
          className='icon'
          href="https://www.linkedin.com/in/lemire-anais/"
          target='_blank'
          rel="noreferrer"
          aria-label='Linkedin'
        >
          <i class='fab fa-linkedin-in' />
        </a>
        </div>
        <p className='footer__text'>Réalisé par Anaïs Lemire</p>
    </footer>
  )
}

export default Footer