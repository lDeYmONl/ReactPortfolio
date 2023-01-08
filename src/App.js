import React, { Fragment } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPhoto from "./Components/Home/MainPhoto/MainPhoto";
import MyProjects from "./Components/MyProjects/MyProjects";
import Navbar from "./Components/Navbar/Navbar";
import Settings from "./Components/Settings/Settings";

/*
const handleScroll = (event) => {
  console.log("scrollTop: ", event.currentTarget.scrollTop);
  console.log("offsetHeight: ", event.currentTarget.offsetHeight);
};*/

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Settings></Settings>
      <Header></Header>
      <a name="Home" href=""></a>
      <MainPhoto></MainPhoto>
      <a name="AboutMe" href=""></a>
      <AboutMe></AboutMe>
      <a name="MyProjects" href=""></a>
      <MyProjects></MyProjects>
      <a name="ContactMe" href=""></a>
      <ContactMe></ContactMe>
      <a name="Footer" href=""></a>
      <Footer></Footer>
    </Fragment>
  );
}
export default App;
