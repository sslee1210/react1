import React from "react";
import "./App.css";
import ExternalData from "./components/ExternalData";
import Style1Scss from "./components/Style1Scss";
import Style2Com1 from "./components/Style2Com1";
import Style3Com from "./components/Style3Com";
import Style4Com from "./components/Style4Com";
import Style5Modules from "./components/Style5Modules";
import Ex1Style from "./ex/Ex1Style";
import Business from "./business/Business";

const App = () => {
  return (
    <>
      {/* <ExternalData /> 
      <Style1Scss />
      <Style2Com1 /> 
      <Style3Com />
      <Style4Com />
      <Style5Modules /> 
      <Ex1Style />
      */}
      <Business />
    </>
  );
};

export default App;
