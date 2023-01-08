import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div id="AboutMe" className={styles.wrapper}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.contentAboutMe}>
          <h3>
            Hi! I'm <span>Dima Matyash</span>
          </h3>
          <h5>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi.
          </h5>
        </div>
        <div className={styles.personalInfo}>
          <div className={styles.personalInfoBlock}>
            <h5>
              Age: <span>22</span>
            </h5>
            <hr></hr>
            <h5>
              Email: <span>argonautt99@gmail.com</span>
            </h5>
            <hr></hr>
            <h5>
              Phone: <span>0976374075</span>
            </h5>
            <hr></hr>
            <h5>
              Website: <span>www.domain.com</span>
            </h5>
            <hr></hr>
          </div>
          <div className={styles.personalInfoBlock}>
            <div className={styles.progressPanel}>
              <h5>HTML:</h5>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarLine}
                  style={{ width: "85%" }}
                ></div>
              </div>
              <span>85%</span>
            </div>
            <div className={styles.progressPanel}>
              <h5>CSS:</h5>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarLine}
                  style={{ width: "75%" }}
                ></div>
              </div>
              <span>75%</span>
            </div>
            <div className={styles.progressPanel}>
              <h5>JS:</h5>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarLine}
                  style={{ width: "50%" }}
                ></div>
              </div>
              <span>50%</span>
            </div>
            <div className={styles.progressPanel}>
              <h5>React:</h5>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarLine}
                  style={{ width: "50%" }}
                ></div>
              </div>
              <span>50%</span>
            </div>
            <div className={styles.progressPanel}>
              <h5>Vue:</h5>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarLine}
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span>0%</span>
            </div>
            <div className={styles.progressPanel}>
              <h5>Angular:</h5>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarLine}
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span>0%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
