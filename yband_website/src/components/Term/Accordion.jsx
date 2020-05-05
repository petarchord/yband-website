import React from "react";

import styles from "./Accordion.module.css";
const Accordion = () => {
  const onClick = e => {
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
        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Januar
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Februar
        </button>
        <div className={styles.panel}>
          <p>02. Restordan Diamant Nis</p>
        </div>
        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Mart
        </button>
        <div className={styles.panel}>
          <p>02. Restordan Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> April
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Maj
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Jun
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Jul
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Avgust
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Septembar
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Oktobar
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Novembar
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          <span className={styles.sign}>+</span> Decembar
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
