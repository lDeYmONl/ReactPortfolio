import {
  ArrowDownOutlined,
  HomeOutlined,
  MessageOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import styles from "./Navbar.module.css";
import $ from "jquery";

function ChangeStyleNav(el) {
  for (let elem of el.parentElement.children) {
    elem.classList.remove(styles.active);
  }
  el.classList.add(styles.active);
}

const RefHandler = (event, ref) => {
  event.preventDefault();
  //ChangeStyleNav(event.currentTarget);
  document
    .getElementById(ref)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

export default function Navbar() {
  const handleScroll = () => {
    let html = document.documentElement;
    let body = document.body;

    let scrollTop = html.scrollTop || (body && body.scrollTop) || 0;
    scrollTop -= html.clientTop;
    //console.log("Текущая прокрутка: " + scrollTop);
    //console.log(document.documentElement.offsetHeight - window.innerHeight);
    let pageSize = document.documentElement.offsetHeight - window.innerHeight;
    let k = scrollTop / pageSize;
    console.log(k);
    if (k < 0.15) {
      ChangeStyleNav($("#navHome")[0]);
    } else if (k < 0.4 && k > 0.15) {
      ChangeStyleNav($("#navAboutMe")[0]);
    } else if (k < 0.75 && k > 0.4) {
      ChangeStyleNav($("#navMyProjects")[0]);
    } else if (k < 0.93 && k > 0.75) {
      ChangeStyleNav($("#navContactMe")[0]);
    } else {
      ChangeStyleNav($("#navFooter")[0]);
    }
    /*$("a[name]").each(function (a, b) {
      let item = $('a[href="#' + b.getAttribute("name") + '"]');
      if (b.offsetTop - 5 < document.scrollingElement.scrollTop + 50) {
        $("#menu").find("a").removeClass(styles.active);
        console.log(item);
        item.addClass(styles.active);
      } else {
        item.removeClass(styles.active);
      }
    });*/
  };

  React.useEffect(() => {
    $("#navHome")[0].classList.add(styles.active); //?
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div id="menu" className={styles.content}>
        <a
          id="navHome"
          className={styles.in_active}
          href="#Home"
          onClick={(event) => RefHandler(event, "Home")}
        >
          <HomeOutlined className={styles.icon} />
        </a>
        <a
          id="navAboutMe"
          className={styles.in_active}
          href="#AboutMe"
          onClick={(event) => RefHandler(event, "AboutMe")}
        >
          <UserOutlined className={styles.icon} />
        </a>
        <a
          id="navMyProjects"
          className={styles.in_active}
          href="#MyProjects"
          onClick={(event) => RefHandler(event, "MyProjects")}
        >
          <ProfileOutlined className={styles.icon} />
        </a>
        <a
          id="navContactMe"
          className={styles.in_active}
          href="#ContactMe"
          onClick={(event) => RefHandler(event, "ContactMe")}
        >
          <MessageOutlined className={styles.icon} />
        </a>
        <a
          id="navFooter"
          className={styles.in_active}
          href="#Footer"
          onClick={(event) => RefHandler(event, "Footer")}
        >
          <ArrowDownOutlined className={styles.icon} />
        </a>
      </div>
    </div>
  );
}
