import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_holder}>
        <h1>Kontakt</h1>
        <p>
          Kontaktirajte nas pozivom na broj telefona ili nam pošaljite mejl.{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
