import CompetencesSlider from "../Slider";
import "./About.scss";

function About() {
  return (
    <div id="about" className="about">
      <h2 className="about__title">À PROPOS</h2>
      <p className="about__text">
        Après une licence en géographie, je suis partie à l'étranger notamment pour chercher un métier qui me correspondrait mieux. J'en suis revenue
        avec le projet de devenir développeuse front-end. <br />
        <br />
        Ce domaine m'entoure depuis quelques années et j'ai décidé d'en faire maintenant moi aussi partie. Mon envie d'apprendre et de créer m'ont
        permis de me lancer dans cette aventure et de pouvoir aujourd'hui chercher du travail dans ce domaine suite à ma formation OpenClassrooms de
        Web Développeuse.{" "}
      </p>
      <div className="container__wave">
        <h2 id="competences" className="about__title about__title--comp">
          MES COMPÉTENCES
        </h2>
        <CompetencesSlider />
      </div>
    </div>
  );
}

export default About;
