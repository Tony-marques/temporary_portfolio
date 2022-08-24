import React from "react";
import styles from "./About.module.scss";
import profilPicture from "../../assets/images/pp.png";
import Download from "../Svg/Download";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.infos}>
            <img src={profilPicture} alt="" />
          </div>
          <div className={styles.right}>
            <p className={styles.presentation}>
              Bonjour, je suis
              développeur front-end junior depuis peu. J'ai découvert le monde
              du web en 2022.
            </p>
            <div className={styles.name}>Marques Tony</div>
            <button>
              Voir mon CV
              <Download />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bg}></div>
    </section>
  );
}
