import React from "react";
import { FireOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "./Settings.module.css";

export default function Settings() {
  let themePanelHiden = true;

  const ThemeHandler = (event, value) => {
    event.preventDefault();
    document.documentElement.style.setProperty("--current-color", value);
  };

  const ShowThemeHandler = (event) => {
    event.preventDefault();
    const themePanel = document.getElementById("ThemePanel");
    themePanel.style.setProperty(
      "right",
      themePanelHiden ? "1.5rem" : "-11.2rem"
    );
    themePanelHiden = !themePanelHiden;
    console.log(themePanelHiden);
  };

  const blue = getComputedStyle(document.documentElement).getPropertyValue(
      "--blue-color"
    ),
    orange = getComputedStyle(document.documentElement).getPropertyValue(
      "--orange-color"
    ),
    red = getComputedStyle(document.documentElement).getPropertyValue(
      "--red-color"
    ),
    green = getComputedStyle(document.documentElement).getPropertyValue(
      "--green-color"
    );

  return (
    <div className={styles.wrapper}>
      <div id="ThemePanel" className={styles.content}>
        <div className={styles.left_content}>
          <a>
            <SettingOutlined
              className={styles.icon_settings}
              onClick={(event) => ShowThemeHandler(event)}
            />
          </a>
          <a>
            <FireOutlined className={styles.icon_theme} />
          </a>
        </div>

        <div className={styles.right_content}>
          <h3>Theme Colors</h3>
          <div className={styles.theme_button}>
            <div
              style={{ backgroundColor: blue }}
              onClick={(event) => ThemeHandler(event, blue)}
            ></div>
            <div
              style={{ backgroundColor: red }}
              onClick={(event) => ThemeHandler(event, red)}
            ></div>
            <div
              style={{ backgroundColor: green }}
              onClick={(event) => ThemeHandler(event, green)}
            ></div>
            <div
              style={{ backgroundColor: orange }}
              onClick={(event) => ThemeHandler(event, orange)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
