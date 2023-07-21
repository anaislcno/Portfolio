import "./Welcome.scss";
import Header from "../Header";

function Welcome() {
  return (
    <div className="home">
      <Header />
      <div className="welcome">
        <div className="welcome__infos">
          <h1 className="welcome__title line-up">BONJOUR!</h1>
          <h2 className="welcome__text line-up__text">Je suis Anaïs, développeuse front-end junior, bienvenue sur mon portfolio</h2>
        </div>
        <div className="links">
          <a href="#about" className="links__unit line-up__btn" to="/">
            En savoir plus
          </a>
          <a href="#contact" className="links__unit line-up__btn" to="/">
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
