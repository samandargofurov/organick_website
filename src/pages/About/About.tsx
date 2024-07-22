import spicy from '../../assets/spicy.png';
import nutsFeesd from '../../assets/NutsFeesd.png';
import fruits from '../../assets/fruits.png';
import vegetable from '../../assets/vegetable.png';
import tractor from "../../assets/tractor.svg";
import man from "../../assets/man.png";
import womanone from "../../assets/womanone.png";
import womantwo from "../../assets/womantwo.png";
import insta from "../../assets/Insta.svg";
import fb from "../../assets/Fb.svg";
import x from "../../assets/Twiter.svg";
import fresh from "../../assets/fresh.svg";
import support from "../../assets/support.svg";
import payment from "../../assets/payment.svg";
import returnimg from "../../assets/return.svg";
import farm from "../../assets/farm.svg";
import aboutHeroImg from "../../assets/aboutHeroImg.png";
import whyChooseUs from "../../assets/whyChooseUsImg.png";
import arrow from "../../assets/Aerrow.svg";
import aboutHeaderImg from "../../assets/aboutHeaderImg.png";

import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        {/* about img */}
        <div className={styles.aboutImg}>
          <img src={aboutHeaderImg} alt="" width={1348} />
          <span className={styles.aboutTitle}>About Us</span>
        </div>

        {/* about us */}
        <div className={styles.aboutUs}>
          <span className={styles.aboutHeroImg}>
            <img src={aboutHeroImg} alt="" width={700} height={620} />
          </span>
          <div className={styles.aboutRightText}>
            <h4>About Us</h4>
            <p className={styles.aboutTitleDesc}>
              We do Creative <br /> Things for Success
            </p>
            <p className={styles.aboutDesc}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
              <br /> <br />
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className={styles.modern}>
              <div className={styles.tractor}>
                <img src={tractor} alt="" width={43} height={43} />
                <span>
                  Modern Agriculture <br /> Equipment
                </span>
              </div>
              <div className={styles.farm}>
                <img src={farm} alt="" width={43} height={43} />
                <span>
                  No growth <br /> hormones are used
                </span>
              </div>
            </div>
            <button className={styles.black_btn}>
              Explore More <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* whyChooseUs */}
      <div className={styles.whyChooseUs}>
        <div className={styles.whyChooseUsContainer}>
          <div className={styles.textSidebar}>
            <h2>Why Choose us?</h2>
            <p className={styles.titleDesc}>
              We do not buy from the <br /> open market & traders.
            </p>
            <p className={styles.desc}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className={styles.naturalProduct}>
              <div className={styles.natural_btn}>
                <span className={styles.circle}></span> 100% Natural Product
              </div>
              <p>
                Simply dummy text of the printing and typesetting <br />{" "}
                industry Lorem Ipsum
              </p>
            </div>
            <div className={styles.increases}>
              <div className={styles.increases_btn}>
                <span className={styles.circle}></span> Increases resistance
              </div>
              <p>
                Filling, and temptingly healthy, our Biona Organic <br />{" "}
                Granola with Wild Berries is just the thing
              </p>
            </div>
          </div>

          <div className={styles.imgSidebar}>
            <img src={whyChooseUs} alt="" width={520} height={500} />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.whyChooseUsCards}>
            <div className={styles.card}>
              <img src={returnimg} alt="" />
              <h3>Return Policy</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className={styles.card}>
              <img src={fresh} alt="" />
              <h3>100% Fresh</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className={styles.card}>
              <img src={support} alt="" />
              <h3>Support 24/7</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className={styles.card}>
              <img src={payment} alt="" />
              <h3>Secured Payment</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
          </div>
        </div>
      </div>

      {/* team */}
      <div className={styles.team}>
        <h3 className={styles.teamTitle}>Team</h3>
        <p className={styles.teamJob}>Our Organic Experts</p>
        <p className={styles.team_Desc}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        {/* cards */}
        <div className={styles.cardsTeam}>
          <div className={styles.team_Card}>
            <img src={man} alt="" width={380} />
            <h2>Giovani Bacardo</h2>
            <div className={styles.man_social_meadia}>
              <span>Farmer</span>
              <div className={styles.social_meadia_icon}>
                <span className={styles.fb}>
                  <img src={fb} alt="" />
                </span>
                <span className={styles.x}>
                  <img src={x} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.team_Card}>
            <img src={womanone} alt="" width={380} />
            <h2>Marianne Loreno</h2>
            <div className={styles.woman_social_meadia}>
              <span>Designer</span>
              <div className={styles.social_meadia_icon}>
                <span className={styles.insta}>
                  <img src={insta} alt="" />
                </span>
                <span className={styles.fb}>
                  <img src={fb} alt="" />
                </span>
                <span className={styles.x}>
                  <img src={x} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.team_Card}>
            <img src={womantwo} alt="" width={380} />
            <h2>Riga Pelore</h2>
            <div className={styles.woman_social_meadia}>
              <span>Farmer</span>
              <div className={styles.social_meadia_icon}>
                <span className={styles.insta}>
                  <img src={insta} alt="" />
                </span>
                <span className={styles.fb}>
                  <img src={fb} alt="" />
                </span>
                <span className={styles.x}>
                  <img src={x} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about offer */}
      <div className={styles.about_offer_bg}>
        <div className={styles.offer_container}>
          <h4 className={styles.offer_title}>About Us</h4>
          <p className={styles.offer_title_desc}>What We Offer for You</p>
          <div className={styles.offer_images}>
            <div className={styles.spicy}>
              <img src={spicy} alt="" width={250} />
              <span>Spicy</span>
            </div>
            <div>
              <img src={nutsFeesd} alt="" width={250} />
              <span>Nuts & Feesd</span>
            </div>
            <div>
              <img src={fruits} alt="" width={238} />
              <span>Fruits</span>
            </div>
            <div>
              <img src={vegetable} alt="" width={238} height={238} />
              <span>Vegetable</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
