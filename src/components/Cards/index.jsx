import React from "react";
import "../Cards/Cards.scss"
import astronaut from "../../assets/astronaut.png";
import celebrating from "../../assets/celebrating.png";
import education from "../../assets/education.png";
import taken from "../../assets/taken.png";

const FrontCard = () => {
  return (
    <div className="card">
      <h2>Frontend</h2>
      <img className="card__img" src={astronaut} alt="Astronaut" />
      <h3>Langages :</h3>
      <ul className="techno__list">
        <li className="techno__item">HTML</li>
        <li className="techno__item">CSS</li>
        <li className="techno__item">SASS</li>
        <li className="techno__item">JavaScript</li>
        <li className="techno__item">React.js</li>
      </ul>
    </div>
  );
};

const BackCard = () => {
  return (
    <div className="card">
      <h2>Backend</h2>
      <img className="card__img" src={celebrating} alt="Celebrating" />
      <h3>Langages et outils:</h3>
      <ul className="techno__list">
        <li className="techno__item">Node.js</li>
        <li className="techno__item">MongoDB</li>
        <li className="techno__item">Javascript</li>
      </ul>
    </div>
  );
};

const ToolsCard = () => {
  return (
    <div className="card">
      <h2>Outils</h2>
      <img className="card__img" src={education} alt="Education" />
      <h3>Outils:</h3>
      <ul className="techno__list">
        <li className="techno__item">Figma</li>
        <li className="techno__item">GitHub</li>
        <li className="techno__item">Postman</li>
        <li className="techno__item">npm & yarn</li>
      </ul>
    </div>
  );
};

const SeoCard = () => {
  return (
    <div className="card">
      <h2>SEO</h2>
      <img className="card__img" src={taken} alt="Taken" />
      <h3>Que dire:</h3>
      <ul className="techno__list">
        <li className="techno__item">Référencement</li>
        <li className="techno__item">Optimisation</li>
        <li className="techno__item">Accessibilité</li>
      </ul>
    </div>
  );
};

export { FrontCard, BackCard, ToolsCard, SeoCard };
