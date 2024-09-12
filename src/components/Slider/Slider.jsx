import "./Slider.css"
import Carousel from 'react-bootstrap/Carousel';

import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.png'
import s5 from '../../assets/s5.png'
import s6 from '../../assets/s6.png'
import s7 from '../../assets/s7.png'
import s8 from '../../assets/s8.png'
import s9 from '../../assets/s9.png'
function Slider() {

  return (
    <div className='CarouselContainer'>
      <div className="slideHead">
        <h3>How to Recycle with RecyclePay</h3>
      </div>
      <Carousel fade>
      <Carousel.Item>
        <img  src={s1} alt='s1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={s2} alt='s2'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={s3} alt='s3'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={s4} alt='s4'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={s5} alt='s5'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={s6} alt='s6'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={s7} alt='s7'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={s8} alt='s8'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={s9} alt='s9'/>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Slider;