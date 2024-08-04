import organicFood from "../../assets/homeImages/organic.png";
import orderImg from "../../assets/homeImages/order.png";
import bg2 from "../../assets/homeImages/Photo.png";
import natural from "../../assets/homeImages/natural.png";
import offer from "../../assets/homeImages/offer.png";
import bgImage from "../../assets/homeImages/Background.png";
import bg3 from "../../assets/homeImages/Background2.png";
import image from "../../assets/homeImages/Image.png";
// import broccoli from "../../assets/homeImages/broccoliMungBean-removebg-preview.png";
// import cabbage from "../../assets/homeImages/cabbage-removebg-preview.png";
// import cucumber from "../../assets/homeImages/cucumber-removebg-preview.png";
// import onion from "../../assets/homeImages/onion-removebg-preview.png";
import ecoFarm from "../../assets/homeImages/background3.png";
import juice from "../../assets/homeImages/organicJuice.png";
import food from "../../assets/homeImages/organicFood.png";
import nutsCookis from "../../assets/homeImages/nutsCookis.png";
import barg from "../../assets/homeImages/barg.png";
import tometos from "../../assets/homeImages/tomatoss.png";
import arrow from "../../assets/icon/Aerrow.svg";
import woman from "../../assets/icon/woman.svg";
import user from "../../assets/icon/user.svg";
import star from "../../assets/icon/Star.svg";

// import data from "../../data.json";

import styles from "./Home.module.css";
// import Card from "../../components/Card/Card";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.images}>
        <div className={styles.firstImg}>
          <img className={styles.absImg1} src={bgImage} alt="" width={1348} />
        </div>
        <div className={styles.secondImg}>
          <img className={styles.absImg} src={image} alt="" width={1348} />
        </div>
      </div>
      {/* container */}
      <div className={styles.container}>
        {/* hero */}
        <div className={styles.hero}>
          <h4 className={styles.hero_title}>100% Natural Food</h4>
          <p className={styles.desc}>
            Choose the best <br /> healthier way <br /> of life
          </p>
          <button className={styles.yellowBTN}>
            Explore Now <img src={arrow} alt="" />
          </button>
        </div>
        {/* section */}
        <div className={styles.section}>
          <div className={styles.leftSidebar}>
            <img className={styles.natural} src={natural} alt="" width={495} />
            <div className={styles.leftSidebar_title}>
              <h3>Natural!!</h3>
              <p>
                Get Garden <br /> Fresh Fruits
              </p>
            </div>
          </div>
          <div className={styles.rightSidebar}>
            <img className={styles.sectionRightImg} src={offer} alt="" width={495} />
            <div className={styles.rightSidebar_title}>
              <h3>Offer!!</h3>
              <p>
                Get 10% off <br /> on Vegetables
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div className={styles.aboutUs}>
        <div className={styles.container}>
          <div className={styles.about}>
            <div className={styles.imgSidebar}>
              <img src={bg2} alt="" width={650} height={670} />
            </div>
            <div className={styles.textSidebar}>
              <h2 className={styles.about_title}>About Us</h2>
              <p className={styles.about_titleDesc}>
                We Believe in Working <br /> Accredited Farmers
              </p>
              <p className={styles.summary}>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>

              <div className={styles.organic_food}>
                <span>
                  <img src={organicFood} alt="" width={85} />
                </span>
                <div className={styles.text1}>
                  <h6>Organic Foods Only</h6>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <div className={styles.order}>
                <span>
                  <img src={orderImg} alt="" width={85} />
                </span>
                <div className={styles.text2}>
                  <h5>Quality Standards</h5>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <NavLink to="/" className={styles.blackBTN}>
                Shop Now <img src={arrow} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Categories  */}

      <div className={styles.categories}>
        <h1 className={styles.categories_title}>Categories</h1>
        <p className={styles.products_title}>Our Products</p>

        <div className={styles.container}>
          {/* {data &&
            data.map((el) => {
              return <Card key={el.id} />;
            })} */}
          <button className={styles.blackBTN}>
            Load More <img src={arrow} alt="Load More" />
          </button>
        </div>
      </div>

      {/* Testimonial */}

      <div className={styles.bg_img}>
        <img src={bg3} alt="" height={920} />
        <div className={styles.testimonial_container}>
          <h6 className={styles.testimonial_title}>Testimonial</h6>
          <p className={styles.testimonial_titleDesc}>
            What Our Customer Saying?
          </p>
          <span className={styles.woman}>
            <img src={woman} alt="" width={100} height={100} />
          </span>
          <div className={styles.stars}>
            <span className={styles.star}>
              <img src={star} alt="" width={20} height={20} />
            </span>
            <span className={styles.star}>
              <img src={star} alt="" width={20} height={20} />
            </span>
            <span className={styles.star}>
              <img src={star} alt="" width={20} height={20} />
            </span>
            <span className={styles.star}>
              <img src={star} alt="" width={20} height={20} />
            </span>
            <span className={styles.star}>
              <img src={star} alt="" width={20} height={20} />
            </span>
          </div>
          <div className={styles.testimonial_desc}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </div>
          <h3 className={styles.user}>Sara Taylor</h3>
          <span className={styles.consumer}>Consumer</span>
          <div className={styles.dots}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          {/* results */}
          <div className={styles.results}>
            <div className={styles.border}>
              <div className={styles.organic}>
                <span>100%</span>
                <span>Organic</span>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.activeProduct}>
                <span>285</span>
                <span>Active Product</span>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.organicOrchads}>
                <span>350+</span>
                <span>Organic Orchads</span>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.year}>
                <span>25+</span>
                <span>Year of Farming</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* offer */}

      <div className={styles.offer_bgImg}>
        <div className={styles.offer_container}>
          <div className={styles.offer}>
            <div className={styles.offerText}>
              <div className={styles.leftOfferText}>
                <h4 className={styles.offertitle}>Offer</h4>
                <p className={styles.offertitleDesc}>
                  We Offer Organic For You
                </p>
              </div>
              <button className={styles.yellow_btn}>
                View All Product <img src={arrow} alt="" />
              </button>
            </div>
            {/* products */}
            <div className={styles.offerProducts}>
              <div className={styles.cards}></div>
            </div>
          </div>
        </div>
      </div>

      {/* eco friendly */}

      <div className={styles.ecoFriendly}>
        <img src={ecoFarm} alt="" width={700} height={730} />
        <div className={styles.ecoFarmAbout}>
          <h3 className={styles.eco_title}>Eco Friendly</h3>
          <p className={styles.eco_titleDesc}>
            Econis is a Friendly Organic Store
          </p>
          <div className={styles.title_desc}>
            <h3>Start with Our Company First</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div className={styles.title_desc}>
            <h3>Learn How to Grow Yourself</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div className={styles.title_desc}>
            <h3>Farming Strategies of Today</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>

      {/* organic products */}

      <div className={styles.organic_products}>
        <div className={styles.organic_products_container}>
          <div className={styles.organic_juice}>
            <span className={styles.juice_img}>
              <img src={juice} alt="" width={430} />
            </span>
            <button className={styles.juice_btn}>Organic Juice</button>
          </div>
          <div className={styles.organic_foods}>
            <span className={styles.food_img}>
              <img src={food} alt="" width={430} />
            </span>
            <button className={styles.food_btn}>Organic Food</button>
          </div>
          <div className={styles.nuts_cookis}>
            <span className={styles.cookis_img}>
              <img src={nutsCookis} alt="" width={430} />
            </span>
            <button className={styles.cookis_btn}>Nuts Cookis</button>
          </div>
        </div>
      </div>

      {/* news */}

      <div className={styles.news}>
        <div className={styles.news_container}>
          <div className={styles.newsText}>
            <div className={styles.leftNewsText}>
              <h4 className={styles.newstitle}>News</h4>
              <p className={styles.newstitleDesc}>
                Discover weekly content about organic food, & more
              </p>
            </div>
            <button className={styles.whiteBTN}>
              More News <img src={arrow} alt="" />
            </button>
          </div>
          {/* two products */}
          <div className={styles.twoProductsComment}>
            <div className={styles.firstComment}>
              <span className={styles.barg_img}>
                <img src={barg} alt="" width={500} />
              </span>
              <div className={styles.firstText}>
                <div className={styles.date}>
                  25 <br /> Nov
                </div>
                <div className={styles.firstUser_comment}>
                  <div className={styles.first_user}>
                    <span className={styles.user_img}>
                      <img src={user} alt="" width={16} height={18} />
                    </span>
                    <span className={styles.user_name}>By Rachi Card</span>
                  </div>
                  <h3 className={styles.question}>
                    The Benefits of Vitamin D & How to Get It
                  </h3>
                  <p className={styles.user_desc}>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                  <button className={styles.yellowbtn}>
                    Read More <img src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.secondComment}>
              <span>
                <img src={tometos} alt="" width={500} />
              </span>
              <div className={styles.secondText}>
                <div className={styles.date}>
                  25 <br /> Nov
                </div>
                <div className={styles.secondUser_comment}>
                  <div className={styles.second_user}>
                    <span className={styles.user_img}>
                      <img src={user} alt="" width={16} height={18} />
                    </span>
                    <span className={styles.user_name}>By Rachi Card</span>
                  </div>
                  <h3 className={styles.question}>
                    Our Favourite Summertime Tommeto
                  </h3>
                  <p className={styles.user_desc}>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                  <button className={styles.yellowbtn}>
                    Read More <img src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
