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
                <h3>
                    The idea that we are today in 2021 still having conversations we were having in 1881, a year before the Chinese Exclusion Act in 1882, is painful and infuriating at the same time.
                </h3>
                <h3>
                    - Gov. Gavin Newsom
                </h3>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="/image02.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <h3>
                    When you see those headlines and the names and faces of people, you see your own family -- your grandparents, your cousins, aunts and uncles.
                </h3>
                <h3>
                    - Rachel Bartkowski
                </h3>
            </div>
            <div className={styles["slick-slide"]}>
            <img src="/image03.jpg"/>
            </div>
            <div className={styles["slick-slide"]}>
                <h3>
                    Anti-Asian hate hasn’t been just from the pandemic. It goes way back. This is deeper.
                </h3>
                <h3>
                    - Manny Chong
                </h3>
            </div>
        </Slider>
      </div>
  );
};

export default Carousel;
