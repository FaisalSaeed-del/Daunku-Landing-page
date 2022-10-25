import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <section className="container">
        <div className="main-footer">
          <div className="footer-items">
            <div className="footer-letter">
              <h2>Newslatter</h2>
              <input type="text" placeholder="Enter your Email" />
              <button>
                <span className="footer-btn">Subscribe</span>
              </button>
            </div>
            <div className="footer-links">
              <div className="footer-menu">
                <div>
                  <h3>Support</h3>
                </div>
                <div className="footer-support">
                  <a href="">About us</a>
                  <a href="">Careers</a>
                  <a href="">Blogs</a>
                </div>
              </div>
              <div className="footer-menu">
                <div>
                  <h3>Useful Link</h3>
                </div>
                <div className="footer-support">
                  <a href="">Payment & Tax</a>
                  <a href="">Team of Services</a>
                  <a href="">Privacy Policy</a>
                </div>
              </div>
              <div className="footer-menu">
                <div>
                  <h3>Our Menu</h3>
                </div>
                <div className="footer-support">
                  <a href="">Best Product</a>
                  <a href="">Category</a>
                </div>
              </div>
              <div className="footer-menu">
                <div>
                  <h3>Address</h3>
                </div>
                <div className="footer-support">
                  <p className="footer-para">
                    JL. Setiabudhi No. 193 Sukasari, Bandung West Java,
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-border"></div>
          <div className="footer-copyright">
            <p>© 2022 Daunku - All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
