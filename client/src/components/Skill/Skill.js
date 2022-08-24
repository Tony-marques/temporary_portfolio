import React from "react";
import styles from "./Skill.module.scss";

export default function Skill({skill}) {

  return (
    <div className={styles.item}>
      <img src={skill.image} alt="" />
      {skill.langage}
    </div>
  );
}
