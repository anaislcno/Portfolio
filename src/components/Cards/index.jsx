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
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>JavaScript</li>
        <li>React.js</li>
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
      <ul>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Javascript</li>
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
      <ul>
        <li>Figma</li>
        <li>GitHub</li>
        <li>Postman</li>
        <li>npm & yarn</li>
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
      <ul>
        <li>Référencement</li>
        <li>Optimisation</li>
        <li>Accessibilité</li>
      </ul>
    </div>
  );
};

export { FrontCard, BackCard, ToolsCard, SeoCard };
