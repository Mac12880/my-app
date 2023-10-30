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
const PSDCarousel = () => {
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
    <div className="PSD-Container">
      <h3>Partner School Districts</h3>
      <div className="PSD-slider">
        <Slider {...settings}>
          <div className="d-flex justify-content-center align-items-center">
            <img className="PSD-images" src="/PSD/schoolsLogo01.webp" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="PSD-images" src="/PSD/schoolsLogo02.webp" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="PSD-images" src="/PSD/schoolsLogo03.webp" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="PSD-images" src="/PSD/schoolsLogo04.webp" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="PSD-images" src="/PSD/schoolsLogo05.webp" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="PSD-images" src="/PSD/schoolsLogo12.webp" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="PSD-images" src="/PSD/schoolsLogo14.webp" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img className="PSD-images" src="/PSD/schoolsLogo15.webp" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default PSDCarousel;
