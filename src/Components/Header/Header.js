import React from "react";
import styles from "./Header.module.css";
import Typed from "react-typed";

const textLines = ["WEB DEVELOPER", "WEB DESIGNER", "WEB DEVELOPER"];
export default function Header() {
  return (
    <div className={styles.wrapper}>
      <h2>
        <p>
          I<span>'</span>M
        </p>
        DIMA
      </h2>

      <h3>
        FRONT-END&nbsp;
        <Typed
          strings={textLines}
          typeSpeed={100}
          backSpeed={60}
          loopCount={1}
        />
      </h3>
    </div>
  );
}
