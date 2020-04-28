import React from "react";
import logo from "../../assets/logo_white.png";
import fbLogo from "../../assets/fb_icon.png";
import instaLogo from "../../assets/insta_icon.png";
import ytLogo from "../../assets/yt_icon.png";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.layer_logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.layer_footer}>
        Copyright &copy; 2020 Y bend | All rights reserved
      </div>
      <div className={styles.social_network}>
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
  );
};

export default Footer;
