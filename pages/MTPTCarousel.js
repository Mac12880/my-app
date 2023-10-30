import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="arrow-right"></div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="arrow-left"></div>
    </div>
  );
};

const MTPTCarousel = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="MTPT-Container">
      <h3>Meet the Tagpros Pioneer Teachers</h3>
      <div className="MTPT-slider">
        <Slider {...settings}>
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <img
              className="MTPT-images"
              src="/Meet the Tagpros Pioneer Teachers/pion01.webp"
            />
            <div className="card-details">
              <h5>Joselle Salvador</h5>
              <p>Art, Technology</p>
            </div>
          </div>
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <img
              className="MTPT-images"
              src="/Meet the Tagpros Pioneer Teachers/pion02.webp"
            />
            <div className="card-details">
              <h5>Luis Pelea</h5>
              <p>Music</p>
            </div>
          </div>
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <img
              className="MTPT-images"
              src="/Meet the Tagpros Pioneer Teachers/pion03.webp"
            />
            <div className="card-details">
              <h5>Dominic Sales</h5>
              <p>Robotics</p>
            </div>
          </div>
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <img
              className="MTPT-images"
              src="/Meet the Tagpros Pioneer Teachers/pion04.webp"
            />
            <div className="card-details">
              <h5>Nico Fos</h5>
              <p>Filipino</p>
            </div>
          </div>
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <img
              className="MTPT-images"
              src="/Meet the Tagpros Pioneer Teachers/pion05.webp"
            />
            <div className="card-details">
              <h5>JP Viernes</h5>
              <p>Creative Learning</p>
            </div>
          </div>
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <img
              className="MTPT-images"
              src="/Meet the Tagpros Pioneer Teachers/pion06.webp"
            />
            <div className="card-details">
              <h5>Joyce Zerda</h5>
              <p>Art, Augmented Reality</p>
            </div>
          </div>
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <img
              className="MTPT-images"
              src="/Meet the Tagpros Pioneer Teachers/pion07.webp"
            />
            <div className="card-details">
              <h5>Lea Abarentos</h5>
              <p>Coding, Design</p>
            </div>
          </div>
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <img
              className="MTPT-images"
              src="/Meet the Tagpros Pioneer Teachers/pion08.webp"
            />
            <div className="card-details">
              <h5>Ivy Enaje</h5>
              <p>Filipino</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MTPTCarousel;
