import React from "react";

import styles from "./Accordion.module.css";
const Accordion = () => {
  const onClick = e => {
    console.log(e.target);
    e.target.classList.toggle("active");
    console.log(e.target.classList);
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.accordion_holder}>
        <button onClick={e => onClick(e)} className={styles.accordion}>
          Januar
        </button>
        <div className={styles.panel}>
          <p>01. Restoran Diamant Nis</p>
        </div>

        <button onClick={e => onClick(e)} className={styles.accordion}>
          Februar
        </button>
        <div className={styles.panel}>
          <p>02. Restordan Diamant Nis</p>
        </div>
        <button onClick={e => onClick(e)} className={styles.accordion}>
          Mart
        </button>
        <div className={styles.panel}>
          <p>02. Restordan Diamant Nis</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
