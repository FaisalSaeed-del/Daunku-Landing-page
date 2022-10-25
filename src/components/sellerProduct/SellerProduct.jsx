import React from "react";
import "./sellerproduct.css";
import Plant1 from "../../assets/images/plant1.png";
import Plant2 from "../../assets/images/plant2.png";
import Plant3 from "../../assets/images/plant3.png";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const SellerProduct = () => {
  return (
    <div>
      <section className="container">
        <div className="main-products">
          <div className="product-text">
            <h2> Best Seller Product</h2>
            <div className="iconss">
              <span> See all colection </span>
              <HiOutlineArrowNarrowRight />
            </div>
          </div>
          <div className="product-collection">
            <div className="products">
              <div className="product-img">
                <img src={Plant1} alt="" />
              </div>
              <div className="products-design">
                <div className="products-desc">
                  <span>Cammile</span> <br />
                  <div className="star-icons">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <div className="products-price">
                  <span>$65</span>
                  <span className="product-plus">+</span>
                </div>
              </div>
            </div>
            <div className="products">
              <div className="product-img">
                <img src={Plant2} alt="" />
              </div>
              <div className="products-desig2">
                <div className="products-desc">
                  <span>Cammile</span> <br />
                  <div className="star-icons">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <div className="products-price">
                  <span>$65</span>
                  <span className="product-plus">+</span>
                </div>
              </div>
            </div>
            <div className="products">
              <div className="product-img">
                <img src={Plant3} alt="" />
              </div>
              <div className="products-desig3">
                <div className="products-desc">
                  <span>Cammile</span> <br />
                  <div className="star-icons">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <div className="products-price">
                  <span>$65</span>
                  <span className="product-plus">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerProduct;
