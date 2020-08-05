import React, { useContext } from "react";
import { SMediaBox, SMediaTitle } from "../Component/SMedia.Component.js";
import { OViewBox, OViewTitle } from "../Component/OViewBox.Component.js";
import { Toggle } from "../Component/Toggle.Component.js";
import { ThemeContext } from "../Context/Theme.Context";
import "./SMediaContainer.Component.css";
import SMediaAPI from "../API/SocialMedia.json";
import SMediaOverviewAPI from "../API/SocialMediaOverview.json";
function SMediaContainer() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div className="SMediaContainer">
      <SMediaTitle TotalFollowers={23004} {...{ changeTheme }}>
        {({ changeTheme }) => <Toggle {...{ changeTheme }} />}
      </SMediaTitle>
      <div className="SMediaBoxContainer">
        {Object.keys(SMediaAPI).map(key => (
          <SMediaBox key={key} {...SMediaAPI[key]} />
        ))}
      </div>
      <OViewTitle />
      <div className="SMediaBoxContainer">
        {Object.keys(SMediaOverviewAPI).map(key => (
          <OViewBox key={key} {...SMediaOverviewAPI[key]} />
        ))}
      </div>
    </div>
  );
}
export { SMediaContainer };
