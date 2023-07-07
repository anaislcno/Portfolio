import "./Slider.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FrontCard, BackCard, ToolsCard, SeoCard } from "../Cards";

const cards = [
  {
    title: "Frontend",
    component: <FrontCard />,
  },
  {
    title: "Backend",
    component: <BackCard />,
  },
  {
    title: "Outils",
    component: <ToolsCard />,
  },
  {
    title: "SEO",
    component: <SeoCard />,
  },
];

function CompetencesSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [cardIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {cards.map((card, idx) => (
        <div className="card__container">
          {/* <h3>{card.title}</h3> */}
          <div className={idx === cardIndex ? "slide activeSlide" : "slide"} key={idx}>
            {card.component}
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
}

export default CompetencesSlider;