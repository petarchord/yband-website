import React from "react";
import logo from "../../assets/logo_white.png";
import phone from "../../assets/phone_icon.png";
import fbLogo from "../../assets/fb_icon.png";
import instaLogo from "../../assets/insta_icon.png";
import ytLogo from "../../assets/yt_icon.png";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.img_holder}>
          <Link to="/">
            <img alt="logo" src={logo} className={styles.logo}></img>
          </Link>
        </div>
        {/* <div className={styles.phone_wrapper}>
          <img src={phone} alt="" />
          <p>(+381)64/54-77-689 </p>
        </div> */}
        <nav>
          <ul>
            <li>
              <Link to="/" activeStyle={{ color: "rgb(32, 32, 32)" }}>
                POČETNA
              </Link>
            </li>
            <li>
              <Link to="/video" activeClassName={styles.active}>
                VIDEO GALERIJA
              </Link>
            </li>
            <li>
              <Link to="/terms">TERMINI</Link>
            </li>
            <li>
              <Link to="/contact">KONTAKT</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.social_networks}>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/Y-BAND-Ni%C5%A1-1105387392810015/"
              >
                <img src={fbLogo} className={styles.fb}></img>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/ybandnis/">
                <img src={instaLogo} className={styles.insta}></img>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/user/Petarkralj95/featured"
              >
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
