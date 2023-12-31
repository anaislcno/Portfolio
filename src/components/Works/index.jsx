import React from "react";
import { projectsList } from "../../datas/projects";
import "./Works.scss";
import { FaGithub } from "react-icons/fa";

function Works() {
  return (
    <div id="works">
      <div className="works">
        <h2 className="works__title">RÉALISATIONS</h2>
        <ul className="projects__container">
          {projectsList.map(({ id, title, image, description, year, link, technos, live }) => (
            <li key={id} className="project">
              <a target="_blank" rel="noreferrer" href={live}>
                <img loading="lazy" src={image} className="project__img" alt={`${title} cover`} />
              </a>
              <div className="project__infos">
                <div className="project__infos--link">
                  <h3 className="project__title">{title}</h3>
                  <a className="icon" href={link} target="_blank" rel="noreferrer" aria-label="Github">
                    <FaGithub />
                  </a>
                </div>
                <p>{year}</p>
                <p className="project__description">{description}</p>
                <div className="project__technos">
                  {technos.map((tag, id) => (
                    <span key={id} className="project__technos--tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Works;
