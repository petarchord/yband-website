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
      <div className={styles.contact_holder}>
        <div className={styles.text_holder}>
          <h5>Kontaktirajte nas</h5>
          <p>
            Pozovite <span className={styles.number}>(+381)64/54-77-689</span>
            ili <span className={styles.number}>(+381)61/80-87-062</span>
          </p>
        </div>
        <div className={styles.form_holder}>
          <form>
            <div className={styles.input_holder}>
              <div className={styles.input_name}>
                <label htmlFor="name">Ime i prezime</label>
                <input type="text" name="name" required />
              </div>
              <div className={styles.input_email}>
                <label htmlFor="name">Email adresa</label>
                <input type="email" name="email" required />
              </div>
            </div>
            <div className={styles.input_message}>
              <label htmlFor="message">Vaša poruka</label>
              <textarea name="message" id="msg" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" id={styles.submit} value="Pošaljite poruku" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
