import React from "react";
import "./Header.css";
import logo from "../../assets/logo_white.png";
import fbLogo from "../../assets/fb_icon.png";
import instaLogo from "../../assets/insta_icon.png";
import ytLogo from "../../assets/yt_icon.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="img_holder">
          <a href="#">
            <img alt="logo" src={logo} className="logo"></img>
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social_networks">
          <ul>
            <li>
              <a href="#">
                <img src={fbLogo} className="fb"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instaLogo} className="insta"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ytLogo} className="yt"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
