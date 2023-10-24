import React from "react";
import "../Cards/Cards.scss";
import frontImg from "../../assets/front.svg";
import backImg from "../../assets/back.svg";
import toolsImg from "../../assets/tools.svg";
import seoImg from "../../assets/seo.svg";

const FrontCard = () => {
  return (
    <div className="card">
      <h2 className="card__title">Frontend</h2>
      <img loading="lazy" className="card__img" src={frontImg} alt="Frontend illustration" />
      <h3 className="card__text">Langages :</h3>
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
      <h2 className="card__title">Backend</h2>
      <img loading="lazy" className="card__img" src={backImg} alt="Backend illustration" />
      <h3 className="card__text">Langages et outils:</h3>
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
      <h2 className="card__title">Outils</h2>
      <img loading="lazy" className="card__img" src={toolsImg} alt="Tools illustration" />
      <h3 className="card__text">Outils:</h3>
      <ul className="techno__list">
        <li className="techno__item">Figma</li>
        <li className="techno__item">GitHub</li>
        <li className="techno__item">Postman</li>
        <li className="techno__item">npm & yarn</li>
        <li className="techno__item">WordPress</li>
      </ul>
    </div>
  );
};

const SeoCard = () => {
  return (
    <div className="card">
      <h2 className="card__title">SEO</h2>
      {/* <span class="img-wrapper">
        <img className="card__img" src={seoImg} alt="seo illustration" />
      </span> */}
      <div class="img-wrapper icon seo"></div>
      <h3 className="card__text">Services:</h3>
      <ul className="techno__list">
        <li className="techno__item">Référencement</li>
        <li className="techno__item">Optimisation</li>
        <li className="techno__item">Accessibilité</li>
      </ul>
    </div>
  );
};

export { FrontCard, BackCard, ToolsCard, SeoCard };
