import React, { useState } from "react";
import styles from "./Projects.module.scss";
import Project from "../Project/Project";
import ProjectFocus from "../ProjectFocus/ProjectFocus";

export default function Projects() {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      title: "Groupomania",
      short_description: "this is just a test",
      long_description: "this is still just a test, but the text is longer",
      images: [
        "capture.png",
        "i-am-groot.jpg",
        "kayak.jpg",
        "09.jpg",
        "03.jpg",
      ],
      technos: ["mysql", "html", "nodejs"],
      hebergement: "https://dullahan83.github.io/Booki/",
    },
    {
      id: 2,
      title: "Groupomania2",
      short_description: "this is just a test",
      long_description: "this is still just a test, but the text is longer",
      images: [
        "capture.png",
        "i-am-groot.jpg",
        "kayak.jpg",
        "09.jpg",
        "03.jpg",
      ],
      technos: ["mysql", "html", "nodejs"],
    },
    {
      id: 3,
      title: "Groupomania3",
      short_description: "this is just a test",
      long_description: "this is still just a test, but the text is longer",
      images: [
        "capture.png",
        "i-am-groot.jpg",
        "kayak.jpg",
        "09.jpg",
        "03.jpg",
      ],
      technos: ["mysql", "html", "nodejs"],
    },
    {
      id: 4,
      title: "Groupomania4",
      short_description: "this is just a test",
      long_description: "this is still just a test, but the text is longer",
      images: [
        "capture.png",
        "i-am-groot.jpg",
        "kayak.jpg",
        "09.jpg",
        "03.jpg",
      ],
      technos: ["html", "nodejs", "mongodb", "react"],
    } /* ,"a", "z", "e", "r", "t", "y", "u", "i" */,
  ]);
  const [childData, setChildData] = useState(null);

  const switchDisplay = () => {
    setToggleDisplay(!toggleDisplay);
  };

  const allInfos = (data) => {
    setChildData(data);
  };

  return (
    <section className={styles.projects} id="projects">
      <h2>Mes dernières créations</h2>
      <div className={styles.container}>
        {!toggleDisplay && (
          <>
            {projectList &&
              projectList.map((project, index) => {
                return (
                  <Project
                    key={project.id}
                    project={project}
                    switchDisplay={switchDisplay}
                    allInfos={allInfos}
                  />
                );
              })}
          </>
        )}
        {toggleDisplay && <ProjectFocus childData={childData} />}
      </div>
    </section>
  );
}
