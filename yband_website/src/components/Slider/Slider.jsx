import React from "react";
import cover from "../../assets/cover.jpg";
import client_1 from "../../assets/danica.jpg";
import client_2 from "../../assets/stefan.jpg";
import dusan from "../../assets/dusan.jpg";
import mina from "../../assets/mina.jpg";
import petar from "../../assets/petar.jpg";
import dj from "../../assets/dj.jpg";
import machine from "../../assets/dim_masina.jpg";
import decoration from "../../assets/dekoracija.jpg";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.welcome_text}>
          <p>
            Učinite vaše slavlje
            <br /> nezaboravnim!
          </p>
        </div>
        <div className={styles.welcome_btn}>
          <button>Angažuj nas odmah...</button>
        </div>
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
              <div className={styles.role_btn}>Klavijatura</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.{" "}
              </p>
            </div>
            <div className={styles.content_holder}>
              <img src={mina} />
              <h2>Mina</h2>
              <div className={styles.role_btn}>Vokal</div>
              <p>
                At quis risus sed vulputate odio ut enim. Enim blandit volutpat
                maecenas volutpat blandit aliquam etiam. Urna nunc id cursus
                metus aliquam eleifend.{" "}
              </p>
            </div>
            <div className={styles.content_holder}>
              <img src={petar} />
              <h2>Petar</h2>
              <div className={styles.role_btn}>Vokal</div>
              <p>
                Maecenas volutpat blandit aliquam etiam erat velit scelerisque.
                Orci ac auctor augue mauris augue neque gravida in. Odio morbi
                quis commodo odio aenean sed.
              </p>
            </div>
          </div>
          <div className={styles.clients}>
            <h1>Zadovoljni klijenti</h1>

            <div className={styles.clients_holder}>
              <div className={styles.clients_item}>
                <div className={styles.img_wrapper}>
                  <img src={client_1} alt="" />
                  <h5>Danica Stanisavljević</h5>
                </div>
                <p>
                  "Bili ste fenomenalni , svaki dogovor je ispoštovan. Još
                  jednom hvala vam sto ste mi ulepšali veče!"
                </p>
              </div>
              <div className={styles.clients_item}>
                <div className={styles.img_wrapper}>
                  <img src={client_2} alt="" />
                  <h5>Stefan Milanović</h5>
                </div>
                <p>
                  "Bend je i više nego ispunio moja očekivanja. Profesionalni i
                  energični, svi su bili oduševljeni. Sve preporuke!"
                </p>
              </div>
              <div className={styles.clients_item}>
                <img src="" alt="" />
                <h5></h5>
                <p></p>
              </div>
            </div>
          </div>
          <div className={styles.collaborators}>
            <div className={styles.coll_wrapper}>
              <h2>Saradnici</h2>
              <p>
                Ukoliko želite da pored našeg benda uključite DJ-a , Sax ili
                Violinu. Tu su naši saradnici koji će se pobrinuti da atmosferu
                dovedemo do usijanja. A gde ima dima , tu ima i vatre.
              </p>
            </div>
            <div className={styles.collab_holder}>
              <div className={styles.collab_item}>
                <img src={dj} alt="" />
                <h5>DJ</h5>
              </div>

              <div className={styles.collab_item}>
                <img src={decoration} alt="" />
                <h5>Scenskre fontane i dekoracija</h5>
              </div>
              <div className={styles.collab_item}>
                <img src={machine} alt="" />
                <h5>Dim mašina</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
