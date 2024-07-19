import styles from "./Card.module.css";
import broccoli from "../../assets/broccoli-removebg-preview.png";
import bananas from "../../assets/bananas-removebg-preview.png";
import nuts from "../../assets/nuts-removebg-preview.png";
import tomatos from "../../assets/tomatos-removebg-preview.png";
import bean from "../../assets/bean-removebg-preview.png";
import hazelnut from "../../assets/hazelnut-removebg-preview.png";
import russianBread from "../../assets/russianBread-removebg-preview.png";
import eggs from "../../assets/eggs-removebg-preview.png";
import arrow from "../../assets/Aerrow.svg";
import star from "../../assets/Star.svg";

const Card = () => {
  return (
    <>
      <div className={styles.cards}>
        {/* broccoli */}
        <div className={styles.card}>
          <span className={styles.title}>Vegetable</span>
          <span className={styles.image}><img src={broccoli} alt="broccoli img" width={270} /></span>
          <span className={styles.img_title}>Calabrese Broccoli</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>$20.00</span>
              <span className={styles.new_price}>$13.00</span>
            </div>
            <div className={styles.stars}>
            <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
            </div>
          </div>
        </div>
        {/* bananas */}
        <div className={styles.card}>
          <span className={styles.title}>Fresh</span>
          <span className={styles.image}><img src={bananas} alt="broccoli img" width={233} /></span>
          <span className={styles.img_title}>Fresh Banana Fruites</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>$20.00</span>
              <span className={styles.new_price}>$14.00</span>
            </div>
            <div className={styles.stars}>
            <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
            </div>
          </div>
        </div>
        {/* nuts */}
        <div className={styles.card}>
          <span className={styles.title}>Millets</span>
          <span className={styles.image}><img src={nuts} alt="broccoli img" width={260} /></span>
          <span className={styles.img_title}>White Nuts</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>$20.00</span>
              <span className={styles.new_price}>$15.00</span>
            </div>
            <div className={styles.stars}>
            <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
            </div>
          </div>
        </div>
        {/* tomotos */}
        <div className={styles.card}>
          <span className={styles.title}>Vegetable</span>
          <span className={styles.image}><img src={tomatos} alt="broccoli img" width={260} /></span>
          <span className={styles.img_title}>Vegan Red Tomato</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>$20.00</span>
              <span className={styles.new_price}>$17.00</span>
            </div>
            <div className={styles.stars}>
            <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
            </div>
          </div>
        </div>
        {/* bean */}
        <div className={styles.card}>
          <span className={styles.title}>Health</span>
          <span className={styles.image}><img src={bean} alt="broccoli img" width={260} /></span>
          <span className={styles.img_title}>Mung Bean</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>$20.00</span>
              <span className={styles.new_price}>$11.00</span>
            </div>
            <div className={styles.stars}>
            <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
            </div>
          </div>
        </div>
        {/* hazelnuts */}
        <div className={styles.card}>
          <span className={styles.title}>Nuts</span>
          <span className={styles.image}><img src={hazelnut} alt="broccoli img" width={210} /></span>
          <span className={styles.img_title}>Brown Hazelnut</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>$20.00</span>
              <span className={styles.new_price}>$12.00</span>
            </div>
            <div className={styles.stars}>
            <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
            </div>
          </div>
        </div>
        {/* eggs */}
        <div className={styles.card}>
          <span className={styles.title}>Fresh</span>
          <span className={styles.image}><img src={eggs} alt="broccoli img" width={240} /></span>
          <span className={styles.img_title}>Eggs</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>$20.00</span>
              <span className={styles.new_price}>$17.00</span>
            </div>
            <div className={styles.stars}>
            <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
            </div>
          </div>
        </div>
        {/* russian Bread */}
        <div className={styles.card}>
          <span className={styles.title}>Fresh</span>
          <span className={styles.image}><img src={russianBread} alt="broccoli img" width={260} /></span>
          <span className={styles.img_title}>Zelco Suji Elaichi Rusk</span>
          <div className={styles.degree}>
            <div className={styles.price}>
              <span className={styles.old_price}>$20.00</span>
              <span className={styles.new_price}>$15.00</span>
            </div>
            <div className={styles.stars}>
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
              <img className={styles.star} src={star} alt="" />
            </div>
          </div>
        </div>
        <button className={styles.blackBTN}>Load More <img src={arrow} alt="" /></button>
      </div>
    </>
  );
};

export default Card;
