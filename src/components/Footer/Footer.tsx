import footerOrganicLogo from "../../assets/icon/Logo.svg";
import insta from "../../assets/icon/Insta.svg";
import facebook from "../../assets/icon/Fb.svg";
import x from "../../assets/icon/Twiter.svg";
import pintrest from "../../assets/icon/Pintrest.svg";
import footerImg from "../../assets/footerImages/BackgroundFooter.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.sendEmail}>
            <img src={footerImg} alt="" width={1349} />
            <div className={styles.formType}>
              <span className={styles.formTitle}>
                Subscribe to <br /> our Newsletter
              </span>
              <div className={styles.form}>
                <input type="email" placeholder="Your Email Address" />
                <button className={styles.footer_btn}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_container}>
        <div className={styles.footerContact}>
          {/* contact Us */}
          <div className={styles.contactUs}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
            <div className={styles.email}>
              <span>Email</span>
              <span className={styles.emailPlaceholder}>needhelp@Organia.com</span>
            </div>
            <div className={styles.phone}>
              <span>Phone</span>
              <span>555 777 888</span>
            </div>
            <div className={styles.address}>
              <span>Address</span>
              <span>88 road, borklyn street, USA</span>
            </div>
          </div>
          {/* footer organic */}
          <div className={styles.footerOrganic}>
            <div className={styles.footerLogo}>
              <img src={footerOrganicLogo} alt="" />
              <h2>Organick</h2>
            </div>
            <p className={styles.footerOrganicDesc}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </p>
            <div className={styles.social_media}>
              <span>
                <img src={insta} alt="" />
              </span>
              <span>
                <img src={facebook} alt="" />
              </span>
              <span>
                <img src={x} alt="" />
              </span>
              <span>
                <img src={pintrest} alt="" />
              </span>
            </div>
          </div>
          {/* utility pages */}
          <div className={styles.utilityPages}>
            <h4 className={styles.utilityTitle}>Utility Pages</h4>
            <div className={styles.pages}>
              <span>Style Guide</span>
              <span>404 Not Found</span>
              <span>Password Protected</span>
              <span>Licences</span>
              <span>Changelog</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerEnd}>
        <div className={styles.footerEndTitle}>
          Copyright<span>©</span>
          <span>Organick</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
