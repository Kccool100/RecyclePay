import "./Slider.css"
import carousel from "../../assets/carousel.png"

function Slider() {
  return (
    <div className='CarouselContainer'>
      <div className="slideHead">
        <h3>How to Recycle with RecyclePay</h3>
      </div>
      <div className="Slides">
         <img src={carousel} alt="carousel" />
      </div>
    </div>
    
  );
}

export default Slider;