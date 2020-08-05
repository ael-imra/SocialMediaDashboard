import React from "react";
import "./Toggle.Component.css";

function Toggle(props) {
  return (
    <div className="Toggle">
      <span className="ToggleText">Dark Mode</span>
      <div className="ToggleBox" onClick={props.changeTheme}>
        <div className="ToggleSwitcher" />
      </div>
    </div>
  );
}
export { Toggle };
