import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Carousel.module.css'

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
                <img src="/image01.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/image04.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/image02.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/image05.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
            <img src="/image03.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/image06.jpg"/>
            </div>
        </Slider>
      </div>
  );
};

export default Carousel;
