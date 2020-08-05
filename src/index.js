import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SMediaContainer } from "../Component/SMediaContainer.Component";
import { ThemeContext, ThemeColors } from "../Context/Theme.Context";
import "./styles.css";
const rootElement = document.getElementById("root");
window.onload = () => {
  // document.querySelector("body").style = `height:${
  //   window.innerHeight
  // }px !important`;
  console.log(document.querySelector("body").style);
};
function App() {
  const [DarkMode, setDarkMode] = useState("Dark");
  function changeTheme() {
    setDarkMode(Mode => (Mode === "Dark" ? "Light" : "Dark"));
  }
  return (
    <ThemeContext.Provider value={{ DarkMode, changeTheme }}>
      <div className="Container" style={ThemeColors[DarkMode]}>
        <SMediaContainer />
      </div>
    </ThemeContext.Provider>
  );
}
ReactDOM.render(<App />, rootElement);
