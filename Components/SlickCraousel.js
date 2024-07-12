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

export const SlickCraousel = ({ pauseOnHover, dots, autoplay, children }) => {
  var settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "70px",
    autoplay: autoplay,
    autoplaySpeed: 1000,
    pauseOnHover: pauseOnHover,
  };

  return <Slider {...settings}>{children}</Slider>;
};
