import React from "react";
import styles from "./MainPhoto.module.css";
import MainPhotoImg from "./Images/MainPhoto.jpg";
import htmlImg from "./Images/html.jpg";
import cssImg from "./Images/css.jpg";
import jsImg from "./Images/js.jpg";
import reactImg from "./Images/react.jpg";
import ScrollDownImg from "./Images/ScrollDown.svg";
import { ArrowDownOutlined } from "@ant-design/icons";

const AboutMeHandler = (event) => {
  event.preventDefault();
  document
    .getElementById("AboutMe")
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

const RotateAnimShow = (el) => {
  el = document.getElementById("rotateContainer").classList;

  if (el.contains(styles.rotatingElemets_inactive)) {
    el.remove(styles.rotatingElemets_inactive);
  } else {
    el.add(styles.rotatingElemets_inactive);
  }

  /* el = document.getElementById("rotateContainer").childNodes;
  el.forEach(function (item) {
    if (item.classList.contains(styles.rotatingElemets_inactive)) {
      item.classList.remove(styles.rotatingElemets_inactive);
      //item.classList.add(styles.rotatingElemets_inactive);
    } else {
      //  item.classList.remove(styles.rotatingElemets_inactive);
      item.classList.add(styles.rotatingElemets_inactive);
    }
  });*/
};

export default function MainPhoto() {
  return (
    <div id="Home" className={styles.wrapper}>
      <div onClick={RotateAnimShow} className={styles.content}>
        <img src={MainPhotoImg}></img>
        <div id="rotateContainer" className={styles.rotatingElemets}>
          <span>
            <img src={htmlImg}></img>
          </span>
          <span>
            <img src={reactImg}></img>
          </span>
          <span>
            <img src={cssImg}></img>
          </span>
          <span>
            <img src={jsImg}></img>
          </span>
        </div>
      </div>
      <div className={styles.footer}>
        <a href="#AboutMe" onClick={AboutMeHandler}>
          <h2>
            Scroll Down
            <ArrowDownOutlined className={styles.scrollDown} />
          </h2>
        </a>
      </div>
    </div>
  );
}
