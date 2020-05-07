import React from "react";
import styles from "./Contact.module.css";
import fbLogo from "../../assets/fb_icon.png";
import instaLogo from "../../assets/insta_icon.png";
import ytLogo from "../../assets/yt_icon.png";
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
          <div>
            <img src="https://img.icons8.com/ios/50/000000/phone.png" />
            <p>(+381)64/54-77-689</p>
            <p>(+381)61/80-87-062</p>
            <div className={styles.email_wrapper}>
              <img src="https://img.icons8.com/ios/50/000000/important-mail.png" />
              <p>Pošaljite nam poruku i dobićete odgovor u najkraćem roku.</p>
            </div>
          </div>
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
            <input type="submit" id={styles.submit} value="POŠALJITE PORUKU" />
          </form>
        </div>
        <div className={styles.social_network}>
          <h5>Pratite nas na društvenim mrežama</h5>
          <div className={styles.network_holder}>
            <img src={fbLogo} id={styles.fb} alt="" />
            <img src={instaLogo} id={styles.insta} alt="" />
            <img src={ytLogo} id={styles.yt} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
