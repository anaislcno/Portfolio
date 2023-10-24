import "./Slider.scss";
import { useState } from "react";
import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
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
        <MdArrowForwardIos />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdArrowBackIos />
      </div>
    );
  };

  const [cardIndex, setImageIndex] = useState(0);
  const small = window.matchMedia("(max-width: 920px)");

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    beforeChange: (current, next) => setImageIndex(next),
  };

  if (small.matches) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="slider__container">
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <div className="card__container">
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
