import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <>
      {/* header */}
      <div className="container">
        <div className="header">
          {/* logo */}
          <NavLink to={"/"}>
            <div className="logo">
              <img src={logo} alt="logo image" width={35} height={45} />
              <span className="logo_name">Organick</span>
            </div>
          </NavLink>
          {/* navbar */}
          <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
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
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/news">News</NavLink>
          </div>
          {/* search_cart */}
          <div className="search_cart">
            {/* search */}
            <div className="search">
              <input type="text" placeholder="Search" />
              <span className="search_icon">
                <img src={search} alt="search icon" />
              </span>
            </div>
            {/* cart */}
            <div className="cart">
              <span className="cart_icon">
                <img src={cart} alt="cart icon" width={18} height={18} />
              </span>
              <span className="cart_title">Cart (0)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
