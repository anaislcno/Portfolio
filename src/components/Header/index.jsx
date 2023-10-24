import { React, useState } from "react";
import MediaQuery from "react-responsive";
import Logo from "../../assets/logo.svg";
import "../Header/Header.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
        <img src={Logo} alt="Logo illustration" className="header__logo" />
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
