import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Carousel.module.css'


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
    pauseOnHover: true
  };
  return (
      <div className={styles.container}> 
        <Slider {...settings}>
            <div className={styles["slick-slide"]}>
                <img src="https://images.unsplash.com/photo-1616170969412-d66071bb2da0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE3NzQ1NjE4&ixlib=rb-1.2.1&q=80&w=1080"/>
            </div>
            <div className={styles["slick-slide"]}>
                <h3>Text 1</h3>
            </div>
            <div className={styles["slick-slide"]}>
                <img src="https://images.unsplash.com/photo-1617127894864-e0a367f148e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE3NTQ2OTk4&ixlib=rb-1.2.1&q=80&w=1080"/>
            </div>
            <div className={styles["slick-slide"]}>
                <h3>Text 2</h3>
            </div>
            <div className={styles["slick-slide"]}>
            <img src="https://images.unsplash.com/photo-1616606321933-6d410f975e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE3NzQyMjc4&ixlib=rb-1.2.1&q=80&w=1080"/>
            </div>
            <div className={styles["slick-slide"]}>
                <h3>Text 3</h3>
            </div>
        </Slider>
      </div>
  );
};

export default Carousel;
