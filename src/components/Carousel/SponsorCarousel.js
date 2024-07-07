import React from "react";
import Slider from "react-slick";
import "./SponsorCarousel.css";

const SponsorCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust number of slides shown at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const sponsors = [
    { src: "src/images/angelgolfer.png", alt: "Sponsor 1" },
    { src: "../images/bsnb.png", alt: "Sponsor 2" },
    { src: "../../images/golfhat.png", alt: "Sponsor 3" },
    { src: "../../golfholesponsor.png", alt: "Sponsor 4" },
    { src: "../../guysoncourse.png", alt: "Sponsor 5" },
    // Add more sponsor images as needed
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            className="sponsor-image"
            src={sponsor.src}
            alt={sponsor.alt}
          />
        ))}
      </Slider>
    </div>
  );
};


export default SponsorCarousel;
