import styles from '../styles/Carousel.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// added 'arrows: false' in Line 19 since right arrow was creating a horizontal scroll bar.

const Carousel = () => {
    let settings = {
    dots: true,
    fade: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true
  };
  return (
      <div className={styles.container}> 
        <Slider {...settings}>
            <div className={styles["slick-slide"]}>
                <img src="/Unsplash/image01.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/Unsplash/image04.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/Unsplash/image02.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/Unsplash/image05.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/Unsplash/image03.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/Unsplash/image06.jpg"/>
            </div>
        </Slider>
      </div>
  );
};

export default Carousel;
