import cart from "../../assets/icon/cart.svg";
import search from "../../assets/icon/search.svg";
import logo from "../../assets/icon/Logo.svg";
import { NavLink } from "react-router-dom";

import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      {/* header */}
        <div className={styles.container}>
          <div className={styles.header}>
            {/* logo */}
            <NavLink to={"/"}>
              <div className={styles.logo}>
                <img src={logo} alt="logo image" width={35} height={45} />
                <span className={styles.logo_name}>Organick</span>
              </div>
            </NavLink>
            {/* navbar */}
            <div className={styles.navbar}>
              <NavLink to="/" className={styles.home}>Home</NavLink>
              <NavLink to="/about" className={styles.about}>About</NavLink>
              <select>
                <option value="pages" selected>
                  Pages
                </option>
                <option value="services">Services</option>
                <option value="qualityStandard">Quality Standard</option>
                <option value="portfolioStandard">Portfolio Standard</option>
                <option value="ourTeam">Our Team</option>
                <option value="contactUs">Contact Us</option>
                <option value="licenses">Licenses</option>
                <option value="changelog">Changelog</option>
              </select>
              <NavLink to="/shop" className={styles.shop}>Shop</NavLink>
              <NavLink to="/projects" className={styles.projects}>Projects</NavLink>
              <NavLink to="/news" className={styles.news}>News</NavLink>
            </div>
            {/* search_cart */}
            <div className={styles.search_cart}>
              {/* search */}
              <div className={styles.search}>
                <input type="text" placeholder="Search" />
                <span className={styles.search_icon}>
                  <img src={search} alt="search icon" />
                </span>
              </div>
              {/* cart */}
              <div className={styles.cart}>
                <span className={styles.cart_icon}>
                  <img src={cart} alt="cart icon" width={18} height={18} />
                </span>
                <span className={styles.cart_title}>Cart (0)</span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
