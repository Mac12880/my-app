import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div className={className}
    style={{ ...style, display: "block"}}
    onClick={onClick}>
      <div
        className="arrow-right">
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div className={className}
    style={{ ...style, display: "block"}}
    onClick={onClick}>
      <div
        className="arrow-left">
      </div>
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
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }

    };
  return (
    <div className="PSD-Container">
        <h3>Partner School Districts</h3>
        <div className="PSD-slider">
            <Slider {...settings}>
                <div>
                    <img
                    className="PSD-images"
                    src="/PSD/schoolsLogo01.webp"
                    />
                </div>
                <div>
                    <img
                    className="PSD-images"
                    src="/PSD/schoolsLogo02.webp"
                    />
                </div>
                <div>
                    <img
                    className="PSD-images"
                    src="/PSD/schoolsLogo03.webp"
                    />
                </div>
                <div>
                    <img
                    className="PSD-images"
                    src="/PSD/schoolsLogo04.webp"
                    />
                </div>
                <div>
                    <img
                    className="PSD-images"
                    src="/PSD/schoolsLogo05.webp"
                    />
                </div>
                <div>
                    <img
                    className="PSD-images"
                    src="/PSD/schoolsLogo12.webp"
                    />
                </div>
                <div>
                    <img
                    className="PSD-images"
                    src="/PSD/schoolsLogo14.webp"
                    />
                </div>
                <div>
                    <img
                    className="PSD-images"
                    src="/PSD/schoolsLogo15.webp"
                    />
                </div>
            </Slider> 
        </div>
  </div>
  )
}
export default PSDCarousel