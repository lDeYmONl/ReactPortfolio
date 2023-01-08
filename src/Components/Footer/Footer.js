import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./Footer.module.css";

const HomeHandler = (event) => {
  event.preventDefault();
  document
    .getElementById("Home")
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

export default function Footer() {
  return (
    <div id="Footer" className={styles.wrapper}>
      <h2>That's All</h2>
      <a id="HomeArrow" href="#Home" className={styles.scrollWrapper} onClick={HomeHandler}>
        <h3>
          <ArrowUpOutlined className={styles.scrollUp} />- Scroll Up -
        </h3>
      </a>
    </div>
  );
}
