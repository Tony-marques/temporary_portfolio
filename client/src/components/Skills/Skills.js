import React, { useState } from "react";
import styles from "./Skills.module.scss";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import sass from "../../assets/skills/sass.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import js from "../../assets/skills/javascript.svg";
import react from "../../assets/skills/react.svg";
import nodejs from "../../assets/skills/nodejs.svg";
import mysql from "../../assets/skills/mysql.svg";
import nextjs from "../../assets/skills/nextjs.svg";
import Skill from "../Skill/Skill";

export default function Skills() {
  const [skills, setSkills] = useState([
    {
      langage: "HTML",
      image: html,
    },
    {
      langage: "CSS",
      image: css,
    },
    {
      langage: "Sass",
      image: sass,
    },
    {
      langage: "TailwindCSS",
      image: tailwind,
    },
    {
      langage: "JavaScript",
      image: js,
    },
    {
      langage: "ReactJS",
      image: react,
    },
    {
      langage: "NodeJS",
      image: nodejs,
    },
    {
      langage: "MySQL",
      image: mysql,
    },
    {
      langage: "NextJS",
      image: nextjs,
    },
  ]);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2>Compétences</h2>
        <div className={styles.bottom}>
          <p className={styles.text}>
            Je construis des sites Web en utilisant HTML, CSS, JavaScript et
            d'autres frameworks et bibliothèques. Je passe la plupart de mes
            journées à apprendre et à construire, soit à partir de zéro, soit à
            ajouter des fonctionnalités et des fonctionnalités personnalisées
            pour les sites Web obsolètes afin de les faire briller à nouveau.
          </p>
          <div className={styles.allSkills}>
            {skills.map((skill, index) => {
              return <Skill skill={skill} key={index} />;
            })}
            {/* <div className={styles.item}>
              <img src={html} alt="" />
              HTML
            </div>
            <div className={styles.item}>
              <img src={css} alt="" />
              CSS
            </div>
            <div className={styles.item}>
              <img src={sass} alt="" />
              Sass
            </div>
            <div className={styles.item}>
              <img src={js} alt="" />
              JavaScript
            </div>
            <div className={styles.item}>
              <img src={react} alt="" />
              ReactJS
            </div>{" "}
            <div className={styles.item}>
              <img src={tailwind} alt="" />
              TailwindCSS
            </div>
            <div className={styles.item}>
              <img src={nodejs} alt="" />
              NodeJS
            </div>
            <div className={styles.item}>
              <img src={mysql} alt="" />
              MySQL
            </div>
            <div className={styles.item}>
              <img src={nextjs} alt="" />
              NextJS
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
