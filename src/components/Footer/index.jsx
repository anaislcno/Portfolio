import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a className="icon" href="https://github.com/anaislcno" target="_blank" rel="noreferrer" aria-label="Github">
          <i className="fab fa-github" />
        </a>
        <NavLink to="/">
          <img src={Logo} alt="Logo illustration" className="icon__logo" />
        </NavLink>
        <a className="icon" href="https://www.linkedin.com/in/lemire-anais/" target="_blank" rel="noreferrer" aria-label="Linkedin">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      <p className="footer__text">Réalisé par Anaïs Lemire</p>
    </footer>
  );
}

export default Footer;
