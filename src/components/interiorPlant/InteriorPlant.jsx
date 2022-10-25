import React from "react";
import "./InteriorPlant.css";
import Pic1 from "../../assets/images/pic1.png";
import Pic2 from "../../assets/images/pic2.png";
import Pic3 from "../../assets/images/pic3.png";

const InteriorPlant = () => {
  return (
    <div>
      <section className="container">
        <div className="interior-main">
          <div className="interior-text">
            <h3>Interior Plant Reference</h3>
            <p>make your home so comfortable with refreshing plants</p>
          </div>
        </div>
        <div className="interior-item">
          <div className="interior-img">
            <div className="pic1">
              <img src={Pic1} alt="" />
            </div>
            <div>
              <img src={Pic2} alt="" />
            </div>
          </div>
          <div>
            <img src={Pic3} alt="" />{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorPlant;
