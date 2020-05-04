import React from "react";
import Accordion from "./Accordion";
import styles from "./Term.module.css";

const Term = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_holder}>
        <h1>Termini</h1>
        <p>Provertie da li smo slobodni. Rezervišite Vaš termin na vreme! </p>
      </div>
      <div className={styles.term_containter}>
        <div className={styles.term_holder}>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Term;
