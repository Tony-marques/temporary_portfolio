import React from "react";
import styles from "./Contact.module.scss";
import Email from "../Svg/Email";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.formInfos}>
        <h2>Contactez-moi</h2>
        <span>Connectons-nous</span>
        <p>
          Vous avez une idée sympa pour un nouveau projet ? voulez créer un site
          Web? tu as une question? n'hésitez pas à me contacter.
        </p>
        <div className={styles.city}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
          <span className={styles.cityName}>Paris</span>
        </div>
        <div className={styles.email}>
          <Email />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form
          className={styles.container}
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
        >
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                placeholder="Entrez votre nom"
                autoComplete="off"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Entrez votre Email"
                autoComplete="off"
              />
            </div>
          </div>
          <div className={`${styles.formGroup} ${styles.formGroupTextArea}`}>
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              placeholder="Entrez votre message ici"
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
