import React from "react";
import Header from "../Header/Header";
import styles from "./Video.module.css";
const Video = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_holder}>
        <h1>Video Galerija</h1>
        <p>Pogledajte atmosferu kakvu možemo da Vam ponudimo </p>
      </div>
      <div className={styles.video_container}>
        <div className={styles.header_wrapper}>
          <h1>Naši nastupi</h1>
        </div>
        <div className={styles.video_holder}>
          <div className={styles.video_item}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8a-bVz2rQEs"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.video_item}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LPKecE8ZNGs"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.video_item}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wCWR0m8ysDI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.video_item}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CgEmXXIu9EU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
