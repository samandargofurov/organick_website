import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  type: string;
  img: string;
  name: string;
  oldPrice: number;
  newPrice: number;
  star: string;
}

const Card: React.FC<CardProps> = ({
  type,
  img,
  name,
  oldPrice,
  newPrice,
  star,
}) => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card}>
          <span className={styles.title}>{type}</span>
          <div className={styles.image}>
            <img src={img} alt="" width={270} />
          </div>
          <span className={styles.img_title}>{name}</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>${oldPrice}</span>
              <span className={styles.new_price}>${newPrice}</span>
            </div>
            <div className={styles.stars}>
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
