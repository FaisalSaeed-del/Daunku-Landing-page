import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/cart.svg";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="bg-image">
      <section className="container">
        <div className="main-nav">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <span className="text">Daunku</span>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                {" "}
                <a href="">Home</a>
              </li>
              <li>
                {" "}
                <a href="">Shop</a>
              </li>
              <li>
                {" "}
                <a href="">About Us</a>
              </li>
              <li>
                {" "}
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="shopping-cart">
            <img src={Cart} alt="shopping cart" />
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <div className="Hero-section">
        <div className="Hero-Heading">
          <h2>
            Bring Serenity to Your Place <br /> With Interior Plants
          </h2>
        </div>
        <div className="Hero-para">
          <p>
            find your dream plant for you home decoration <br /> with us, and we
            will make it happen.
          </p>
        </div>
      </div>

      <div className="search-box">
        <input type="search" name="search" placeholder="Search" />
        <div className="icons">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
