import bgShopPattern from "../../assets/shopBgPatterns.png";
import shopImage from "../../assets/ShopImage.png";
import broccoli from "../../assets/broccoli-removebg-preview.png";
import bananas from "../../assets/bananas-removebg-preview.png";
import nuts from "../../assets/nuts-removebg-preview.png";
import tomatos from "../../assets/tomatos-removebg-preview.png";
import bean from "../../assets/bean-removebg-preview.png";
import hazelnut from "../../assets/hazelnut-removebg-preview.png";
import russianBread from "../../assets/russianBread-removebg-preview.png";
import eggs from "../../assets/eggs-removebg-preview.png";
import newcucumber from "../../assets/shopCucumber-removebg-preview.png";
import newHazelnut from "../../assets/newHazelnut-removebg-preview.png";
import corn from "../../assets/corn-removebg-preview.png";
import almonds from "../../assets/almonds-removebg-preview.png";
import star from "../../assets/Star.svg";
import styles from "./Shop.module.css";

const Shop = () => {
  return (
    <>
      <div className={styles.shopImage}>
        <img
          className={styles.bgpattern}
          src={bgShopPattern}
          alt=""
          width={1349}
        />
        <img className={styles.bgshopImg} src={shopImage} alt="" width={1349} />
        <span className={styles.bg_title}>Shop</span>
      </div>
      <div className={styles.container}>
        <div className={styles.cards}>
          {/* broccoli */}
          <div className={styles.card}>
            <span className={styles.title}>Vegetable</span>
            <span className={styles.image}>
              <img src={broccoli} alt="broccoli img" width={270} />
            </span>
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
            <span className={styles.image}>
              <img src={bananas} alt="broccoli img" width={233} />
            </span>
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
            <span className={styles.image}>
              <img src={nuts} alt="broccoli img" width={260} />
            </span>
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
            <span className={styles.image}>
              <img src={tomatos} alt="broccoli img" width={260} />
            </span>
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
            <span className={styles.image}>
              <img src={bean} alt="broccoli img" width={260} />
            </span>
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
            <span className={styles.image}>
              <img src={hazelnut} alt="broccoli img" width={210} />
            </span>
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
            <span className={styles.image}>
              <img src={eggs} alt="broccoli img" width={240} />
            </span>
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
            <span className={styles.image}>
              <img src={russianBread} alt="broccoli img" width={260} />
            </span>
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
          {/* shop cucumber */}
          <div className={styles.card}>
            <span className={styles.title}>Health</span>
            <span className={styles.image}>
              <img src={newcucumber} alt="broccoli img" width={202} />
            </span>
            <span className={styles.img_title}>Zelco Suji Elaichi Rusk</span>
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
          {/* new hazelnut */}
          <div className={styles.card}>
            <span className={styles.title}>Nuts</span>
            <span className={styles.image}>
              <img src={newHazelnut} alt="broccoli img" width={260} />
            </span>
            <span className={styles.img_title}>Zelco Suji Elaichi Rusk</span>
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
          {/* corn */}
          <div className={styles.card}>
            <span className={styles.title}>Fresh</span>
            <span className={styles.image}>
              <img src={corn} alt="broccoli img" width={220} />
            </span>
            <span className={styles.img_title}>Zelco Suji Elaichi Rusk</span>
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
          {/* almonds */}
          <div className={styles.card}>
            <span className={styles.title}>Fresh</span>
            <span className={styles.image}>
              <img src={almonds} alt="broccoli img" width={220} />
            </span>
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
        </div>
      </div>
    </>
  );
};

export default Shop;
