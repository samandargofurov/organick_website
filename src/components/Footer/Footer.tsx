import footerImg from "../../assets/BackgroundFooter.png";

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
    </>
  );
};

export default Footer;
