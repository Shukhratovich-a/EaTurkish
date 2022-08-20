import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import PopularProducts from "../../Datas/PopularProducts";

import HeadingSmall from "../Lib/Headings/HeadingSmall/HeadingSmall";
import NavigateButton from "../Lib/Buttons/NavigateButton/NavigateButton";
import PopularCard from "../PopularCard/PopularCard";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styles from "./Popular.module.scss";

const Popular = () => {
  const sliderRef = React.useRef(null);

  const [products] = React.useState(PopularProducts);

  const prevButton = React.useRef(null);
  const nextButton = React.useRef(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  React.useEffect(() => {
    prevButton.current.disabled = sliderRef.current.swiper.isBeginning;
    nextButton.current.disabled = sliderRef.current.swiper.isEnd;
  }, []);

  return (
    <section className={`${styles.popular}`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.popular__top}`}>
          <HeadingSmall className={`${styles.popular__heading}`}>popular dishes</HeadingSmall>

          <div className={`${styles.popular__top__right}`}>
            <NavigateButton
              className={`${styles.popular__swiper__button} ${styles["popular__swiper__button--prev"]}`}
              onClick={handlePrev}
              ref={prevButton}
            />
            <NavigateButton
              className={`${styles.popular__swiper__button} ${styles["popular__swiper__button--next"]}`}
              onClick={handleNext}
              ref={nextButton}
            />
          </div>
        </div>

        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          spaceBetween={20}
          slidesPerGroup={1}
          onSlideChange={() => {
            prevButton.current.disabled = sliderRef.current.swiper.isBeginning;
            nextButton.current.disabled = sliderRef.current.swiper.isEnd;
          }}
          className={`${styles.popular__list}`}
        >
          {products.length > 0 &&
            products.map((product) => (
              <SwiperSlide className={styles.popular__slide} key={product.id}>
                <PopularCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Popular;
