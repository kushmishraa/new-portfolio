import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextButton = () => {
  return (
    <div className="bg-black rounded-full text-white">
      <div>Next</div>
    </div>
  );
};

export const SlickCraousel = ({ pauseOnHover, dots, autoplay, children, slidesToShow, centerMode, centerPad }) => {
  var settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: centerMode,
    centerPadding: centerPad,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    speed: 1500,
    pauseOnHover: pauseOnHover,
    arrows: false
  };

  return <Slider {...settings}>{children}</Slider>;
};
