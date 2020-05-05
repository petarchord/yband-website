import React from "react";

import styles from "./Accordion.module.css";
const Accordion = () => {
  const onClick = (e) => {
    let button;
    if (e.target.nodeName === "BUTTON") button = e.target;
    else button = e.target.parentNode;
    let panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
      button.firstChild.innerHTML = "+";
      panel.style.maxHeight = null;
    } else {
      button.firstChild.innerHTML = "-";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.accordion_holder}>
        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Januar
        </button>
        <div className={styles.panel}>
          <ul>
            <li>01.Restoran Diamant Niš</li>
            <li>11.Kafana Story Kuršumlija</li>
            <li>12.Restoran Diamant Niš</li>
            <li>13.Restoran Diamant Niš</li>
            <li>17.Restoran Diamant Niš</li>
            <li>24.Kafana Story Kuršumlija</li>
            <li>26.Restoran Lion Niš</li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Februar
        </button>
        <div className={styles.panel}>
          <ul>
            <li>08.Restoran Romansa Niš</li>
            <li>16.Restoran Diamant Niš</li>
            <li>21.Kafana Story Kuršumlija</li>
            <li>22.Restoran Premier Niš</li>
            <li>29.Restoran Mali Raj Niš</li>
          </ul>
        </div>
        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Mart
        </button>
        <div className={styles.panel}>
          <ul>
            <li>06.Kafana Story Kuršumlija</li>
            <li>07.Restoran Diske Žitorađe</li>
            <li>08.Restoran Diamant Niš</li>
            <li>14.Caffe Libido Niš</li>
            <li>28.Restoran Diamant Niš</li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> April
        </button>
        <div className={styles.panel}>
          <ul>
            <li>03.Restoran Diamant Niš</li>
            <li>19.Restoran Sabor Plus Jelašnica</li>
            <li>25.Restoran Zaplanjsko Ognjište Niš</li>
            <li>26.Restoran Kod Miloša Niš</li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Maj
        </button>
        <div className={styles.panel}>
          <ul>
            <li>02.Restoran Todor Niš</li>
            <li>03.Restoran Diamant Niš</li>
            <li>16.Restoran Žirado Niš</li>
            <li>29.Hotel Aleksandar Niš</li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Jun
        </button>
        <div className={styles.panel}>
          <ul>
            <li>13.Restoran Svrljižanka Nis</li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Jul
        </button>
        <div className={styles.panel}>
          <ul>
            <li>25.Vinik Nis</li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Avgust
        </button>
        <div className={styles.panel}>
          <ul>
            <li>29.Restoran Žirado Niš</li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Septembar
        </button>
        <div className={styles.panel}>
          <ul>
            <li>01. Restoran Diamant Nis</li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Oktobar
        </button>
        <div className={styles.panel}>
          <ul>
            <li></li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Novembar
        </button>
        <div className={styles.panel}>
          <ul>
            <li></li>
          </ul>
        </div>

        <button onClick={(e) => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Decembar
        </button>
        <div className={styles.panel}>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
