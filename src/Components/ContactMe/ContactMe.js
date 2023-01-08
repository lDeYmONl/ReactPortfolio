import {
  GoogleOutlined,
  InstagramOutlined,
  SkypeOutlined,
} from "@ant-design/icons";
import styles from "./ContactMe.module.css";
import React from "react";

export default function ContactMe() {
  return (
    <div id="ContactMe" className={styles.wrapper}>
      <h2>Contact Me</h2>
      <div className={styles.content}>
        <a href="mailto:argonautt99@gmail.com" target="_blank" rel="noopener">
          <GoogleOutlined />
          <h3>argonautt99@gmail.com</h3>
        </a>

        <a
          href="https://join.skype.com/invite/l1e9gie9JJyd"
          target="_blank"
          rel="noopener"
        >
          <SkypeOutlined />
          <h3>Dima Matyash</h3>
        </a>
        <a
          href="https://www.instagram.com/dima_matyash/"
          target="_blank"
          rel="noopener"
        >
          <InstagramOutlined />
          <h3>dima_matyash</h3>
        </a>
      </div>
    </div>
  );
}
