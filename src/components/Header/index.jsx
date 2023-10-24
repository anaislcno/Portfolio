import { React, useState } from "react";
import { NavLink } from "react-router-dom";
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

  // ENLEVER LE NAVLINK POUR LE LOGO PCQ EN VRAI C QUE POUR LE 404 MAIS PAR CONTRE TRANSFORMER LES A EN LINK

  return (
    <header className="header">
      <div className="header__border">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="header__logo" />
        </NavLink>
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
                <button className="collapse__btn" onClick={toggle}>
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
