import arrow from '../../assets/Aerrow.svg'
import bgImage from "../../assets/Background.png";
import image from "../../assets/Image.png";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="images">
        <span className="absImg1">
          <img src={bgImage} alt="" width={1349} />
        </span>
        <span className="absImg">
          <img src={image} alt="" width={1349} />
        </span>
      </div>
      <div className="container">
        <div className="hero">
          <h4 className="hero_title">100% Natural Food</h4>
          <p className="desc">Choose the best <br /> healthier way <br /> of life</p>
          <button className="yellowBTN">Explore Now <img src={arrow} alt="" /></button>
        </div>
      </div>
    </>
  );
};

export default Home;
