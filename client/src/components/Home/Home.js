import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Home.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section className={styles.home}>
      <div href="/" className={`${styles.item} ${styles.presentation}`}>
        <p className={styles.name}>Marques Tony </p>
        <p className={styles.job}>Développeur Web Junior</p>
        <p className={styles.message}>Bienvenue sur mon Portfolio</p>
        <a href="#contact">Contactez-moi</a>
      </div>
      <a href="#about" className={`${styles.item} ${styles.about}`}>
        À propos
      </a>
      <a href="#projects" className={`${styles.item} ${styles.projects}`}>
        Projets
      </a>
      <a href="/#skills" className={`${styles.item} ${styles.skills}`}>
        Compétences
      </a>
      <a
        href="https://github.com/tony-marques"
        target="_blank"
        rel="noreferrer"
        className={`${styles.item} ${styles.github}`}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/tony-marques-8964919a/"
        target="_blank"
        rel="noreferrer"
        className={`${styles.item} ${styles.linkedin}`}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </section>
  );
}
