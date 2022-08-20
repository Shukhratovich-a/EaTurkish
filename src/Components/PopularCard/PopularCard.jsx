import Star from "../Lib/Icons/Star";

import styles from "./PopularCard.module.scss";

const PopularCard = ({ product }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.card__inner}`}>
        <img
          className={`${styles.card__image}`}
          src={product.image}
          alt={product.title}
          width={270}
          height={183}
        />

        <h3 className={`${styles.card__heading}`}>{product.title}</h3>

        <div className={`${styles.card__rating}`}>
          {stars.map((star) => {
            if (star <= product.rating - 1) {
              return <Star key={star} color={"#ffea28"} />;
            }
            return <Star key={star} />;
          })}
        </div>

        <mark className={`${styles.card__price}`}>${parseFloat(product.price)}</mark>
      </div>
    </div>
  );
};

export default PopularCard;
