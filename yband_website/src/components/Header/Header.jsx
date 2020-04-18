import React from "react";
import logo from "../../assets/logo_white.png";
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

        <nav>
          <ul>
            <li>
              <a href="#">Početna</a>
            </li>
            <li>
              <a href="#">Video galerija</a>
            </li>
            <li>
              <a href="#">Termini</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
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
