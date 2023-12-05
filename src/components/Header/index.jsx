import { React, useState } from "react";
import MediaQuery from "react-responsive";
import Logo from "../../assets/logo.svg";
import "../Header/Header.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(AiOutlineMenu);

  const toggle = () => {
    setOpen(!open);
    setIcon(open ? AiOutlineMenu : AiOutlineClose);
  };

  const headerClass = `header ${open ? "menu-open" : ""}`;

  return (
    <header className={headerClass}>
      <div className="header__border">
        <div className="header__img">
          <img src={Logo} alt="Logo illustration" className="header__img--logo" />
          <a className="header__img--icon" href="https://github.com/anaislcno" target="_blank" rel="noreferrer" aria-label="Github">
            <FaGithub />
          </a>
          <a className="header__img--icon" href="https://www.linkedin.com/in/lemire-anais/" target="_blank" rel="noreferrer" aria-label="Linkedin">
            <FaLinkedin />
          </a>
        </div>
        <MediaQuery minWidth={769}>
          {(matches) =>
            matches && (
              <nav className="navbar">
                <a href="#about" className="navbar__link">
                  À PROPOS
                </a>
                <a href="#competences" className="navbar__link">
                  COMPÉTENCES
                </a>
                <a href="#works" className="navbar__link">
                  RÉALISATIONS
                </a>
                <a href="#contact" className="navbar__link">
                  CONTACT
                </a>
              </nav>
            )
          }
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          {(matches) =>
            matches && (
              <div className="collapse">
                <button id="al" className="collapse__btn" onClick={toggle} aria-label="Burger menu">
                  <span className="collapse__icon">{icon}</span>
                </button>
                {open && (
                  <nav className="navbar--small">
                    <a onClick={toggle} href="#about" className="navbar__link--small">
                      À PROPOS
                    </a>
                    <a onClick={toggle} href="#competences" className="navbar__link--small">
                      COMPÉTENCES
                    </a>
                    <a onClick={toggle} href="#works" className="navbar__link--small">
                      RÉALISATIONS
                    </a>
                    <a onClick={toggle} href="#contact" className="navbar__link--small">
                      CONTACT
                    </a>
                  </nav>
                )}
              </div>
            )
          }
        </MediaQuery>
      </div>
    </header>
  );
}

export default Header;
