import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Types from "../../Datas/Types";

import Button from "../Lib/Buttons/Button/Button";
import HeadingSmall from "../Lib/Headings/HeadingSmall/HeadingSmall";

import styles from "./MainProducts.module.scss";

const MainProducts = () => {
  const [type, setType] = React.useState("all");
  const [types] = React.useState(Types);

  return (
    <section className={`${styles.products}`}>
      <div className={`${styles.container} container`}>
        <HeadingSmall className={`${styles.products__heading}`}>our regular menu pack</HeadingSmall>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          slidesPerGroup={1}
          className={`${styles.products__menu__list}`}
        >
          {types.length > 0 &&
            types.map((item) => (
              <SwiperSlide className={`${styles.products__menu__item}`} key={item.id}>
                <Button
                  className={`${styles.products__menu__button} ${
                    type === item.slug ? styles["products__menu__button--active"] : ""
                  }`}
                  onClick={() => setType(item.slug)}
                >
                  {item.title}
                </Button>
              </SwiperSlide>
            ))}
        </Swiper>

        
      </div>
    </section>
  );
};

export default MainProducts;
