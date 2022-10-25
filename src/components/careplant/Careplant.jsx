import React from "react";
import "./careplant.css";
import pic4 from "../../assets/images/pic4.png";
import Light from "../../assets/images/light.svg";
import Water1 from "../../assets/images/water1.svg";
import Water from "../../assets/images/water.svg";
import Urea from "../../assets/images/fertilizer.svg";

const Careplant = () => {
  return (
    <div>
      <section className="container">
        <div className="care-top">
          <div className="care-heading">
            <h1>How to care for plants</h1>
            <span>Take care of plants with all your heart</span>
          </div>
          <div className="care-measurements">
            <div className="care-items">
              <div className="care-outlines">
                <div>
                  <img src={Light} alt="" />
                </div>
                <div className="care-text">
                  <h3>Adjust Lighting</h3>
                  <p>
                    When caring for indoor plants, make sure the room
                    temperature is neither too cold nor too hot
                  </p>
                </div>
              </div>
              <div className="care-outlines">
                <div>
                  <img src={Water} alt="" />
                </div>
                <div className="care-text">
                  <h3>Adjust Lighting</h3>
                  <p>
                    When caring for indoor plants, make sure the room
                    temperature is neither too cold nor too hot
                  </p>
                </div>
              </div>
              <div className="care-outlines">
                <div>
                  <img src={Water1} alt="" />
                </div>
                <div className="care-text">
                  <h3>Adjust Lighting</h3>
                  <p>
                    When caring for indoor plants, make sure the room
                    temperature is neither too cold nor too hot
                  </p>
                </div>
              </div>
              <div className="care-outlines">
                <div>
                  <img src={Urea} alt="" />
                </div>
                <div className="care-text">
                  <h3>Adjust Lighting</h3>
                  <p>
                    When caring for indoor plants, make sure the room
                    temperature is neither too cold nor too hot
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={pic4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careplant;
