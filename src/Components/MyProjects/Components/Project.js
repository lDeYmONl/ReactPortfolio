import React from "react";
import styles from "./Project.module.css";
export default function (props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.projectImg}>
          <img src={props.project.img}></img>
        </div>
        <div className={styles.projectInfo}>
          <h3>{props.project.name}</h3>
          <p>{props.project.description}</p>
        </div>
      </div>
    </div>
  );
}
