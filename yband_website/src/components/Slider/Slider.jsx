import React from "react";
import cover from "../../assets/cover.jpg";
import dusan from "../../assets/dusan.jpg";
import mina from "../../assets/mina.jpg";
import petar from "../../assets/petar.jpg";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.about_us}>
          <div className={styles.content}>
            <h1>O nama</h1>
            <p>
              Y bend je osnovan 2016. godine i sastoji se od tri clanova. Danas
              bend uspešno nastupa i svojim širokim repertoarom, koji obuhvata
              razne žanrove domaće i strane muzike, potvrđuje kvalitet o čemu
              svedoče brojni zadovoljni klijenti.
            </p>
          </div>

          <div className={styles.img_holder}>
            <div className={styles.content_holder}>
              <img src={dusan} />
              <h2>Dusan</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.{" "}
              </p>
            </div>
            <div className={styles.content_holder}>
              <img src={mina} />
              <h2>Mina</h2>
              <p>
                At quis risus sed vulputate odio ut enim. Enim blandit volutpat
                maecenas volutpat blandit aliquam etiam. Urna nunc id cursus
                metus aliquam eleifend.{" "}
              </p>
            </div>
            <div className={styles.content_holder}>
              <img src={petar} />
              <h2>Petar</h2>
              <p>
                Maecenas volutpat blandit aliquam etiam erat velit scelerisque.
                Orci ac auctor augue mauris augue neque gravida in. Odio morbi
                quis commodo odio aenean sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
