import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"

function FocusSlider() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="./img/chefs.jpg" className="img-sld" />
        </div>
        <div>
          <img src="./img/comida.jpg" className="img-sld" />
        </div>
        <div>
          <img src="./img/fiesta.jpg" className="img-sld" />
        </div> 
        <div>
          <img src="./img/salon.jpg" className="img-sld" />
        </div>
      </Slider>
    </div>
  );
}

export default FocusSlider;