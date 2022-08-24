import React, { useState } from "react";
import styles from "./ProjectFocus.module.scss";

export default function ProjectFocus({ childData }) {
  console.log(childData);

  return (
    <>
      <h1>{childData.title}</h1>
    </>
  );
}
