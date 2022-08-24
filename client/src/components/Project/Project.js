import React from "react";
import styles from "./Project.module.scss";
import test from "../../assets/images/1.jpg";

export default function project({ project, switchDisplay, allInfos }) {
  const childToParent = () => {
    allInfos(project);
  };

  return (
    <figure
      className={styles.card}
      onClick={() => {
        childToParent();
        switchDisplay();
      }}
    >
      <img src={test} alt="" />
      <figcaption>
        <h3>{project.title}</h3>
        <p>{project.short_description}</p>
      </figcaption>
    </figure>
  );
}
