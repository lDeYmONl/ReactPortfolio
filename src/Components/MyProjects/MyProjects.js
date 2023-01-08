import React from "react";
import styles from "./MyProjects.module.css";
import Project from "./Components/Project";
import Project_1_img from "./Images/project_1.png";
import Project_2_img from "./Images/project_2.jpg";
import Project_3_img from "./Images/project_3.png";
import Project_4_img from "./Images/project_4.jpg";
export default function MyProjects() {
  let my_projects = [
    {
      id: "1",
      name: "Project #1",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      img: Project_1_img,
    },
    {
      id: "2",
      name: "Project #2",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      img: Project_2_img,
    },
    {
      id: "3",
      name: "Project #3",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      img: Project_3_img,
    },
    {
      id: "4",
      name: "Project #4",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      img: Project_4_img,
    },
  ];

  return (
    <div id="MyProjects" className={styles.wrapper}>
      <h2>My Projects</h2>
      <div className={styles.content}>
        {my_projects.map((item) => {
          return <Project project={item}></Project>;
        })}
      </div>
    </div>
  );
}
