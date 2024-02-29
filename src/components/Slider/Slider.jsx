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
    <div className="w-72">
      <Slider {...settings}>
        <div>
          <img src="./img/chefs.jpg" className="w-full h-96 object-cover" loading="lazy" />
        </div>
        <div>
          <img src="./img/comida.jpg" className="w-full h-96 object-cover" loading="lazy" />
        </div>
        <div>
          <img src="./img/fiesta.jpg" className="w-full h-96 object-cover" loading="lazy" />
        </div> 
        <div>
          <img src="./img/salon.jpg" className="w-full h-96 object-cover" loading="lazy"/>
        </div>
      </Slider>
    </div>
  );
}

export default FocusSlider;