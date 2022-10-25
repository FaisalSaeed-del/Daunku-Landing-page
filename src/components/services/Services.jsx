import React from "react";
import "./services.css";
import SHIP from "../../assets/images/shipping.svg";
import PAY from "../../assets/images/payment.svg";
import Call from "../../assets/images/call.svg";

const Services = () => {
  return (
    <div>
      <section className="container">
        <div className="main-services">
          <div className="free-shipping">
            <img src={SHIP} alt="free-shipping" />
            <div className="shipping-text">
              <h3>Free Shipping</h3>
              <span>No charge for each delivery</span>
            </div>
          </div>
          <div className="free-shipping">
            <img src={PAY} alt="free-shipping" />
            <div className="shipping-text">
              <h3>Quick Payment</h3>
              <span>100% secure Payment</span>
            </div>
          </div>
          <div className="free-shipping">
            <img src={Call} alt="free-shipping" />
            <div className="shipping-text">
              <h3>24/7 Support</h3>
              <span>Quik Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
