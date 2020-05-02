import React from "react";
import logo from "../../assets/logo_white.png";
import phone from "../../assets/phone_icon.png";
import fbLogo from "../../assets/fb_icon.png";
import instaLogo from "../../assets/insta_icon.png";
import ytLogo from "../../assets/yt_icon.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.img_holder}>
          <a href="#">
            <img alt="logo" src={logo} className={styles.logo}></img>
          </a>
        </div>
        <div className={styles.phone_wrapper}>
          <img src={phone} alt="" />
          <p>(+381)64/54-77-689 </p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">POČETNA</a>
            </li>
            <li>
              <a href="#">VIDEO GALERIJA</a>
            </li>
            <li>
              <a href="#">TERMINI</a>
            </li>
            <li>
              <a href="#">KONTAKT</a>
            </li>
          </ul>
        </nav>
        <div className={styles.social_networks}>
          <ul>
            <li>
              <a href="#">
                <img src={fbLogo} className={styles.fb}></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instaLogo} className={styles.insta}></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ytLogo} className={styles.yt}></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
