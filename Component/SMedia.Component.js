import React from "react";
import "./SMedia.Component.css";

const FollowersUpdate = {
  nigative: {
    color: "#B94658",
    htmlCode: <span>&#9660; </span>
  },
  positive: {
    color: "#39a393",
    htmlCode: <span>&#9650; </span>
  }
};
function SMediaBox(props) {
  const sign = props.FollowersUpdate > 0 ? "positive" : "nigative";
  return (
    <div className="SMediaBox">
      <div
        className="SMediaBoxBorder"
        style={{ background: props.Background }}
      />
      <div className="SMediaBoxSMedia">
        <img src={props.SMediaIcon} alt={props.SMediaName} />
        <span>@{props.SMediaName}</span>
      </div>
      <div className="SMediaBoxFollowers">
        <span className="SMediaBoxFollowersCount">
          {props.FollowersCount >= 10000
            ? props.FollowersCount / 1000 + "k"
            : props.FollowersCount}{" "}
        </span>
        <span className="SMediaBoxFollowerText">{props.FollowersText}</span>
      </div>
      <div
        className="SMediaBoxFollowersUpdate"
        style={{ "--color-FAnalysis": FollowersUpdate[sign].color }}
      >
        {FollowersUpdate[sign].htmlCode}
        {props.FollowersUpdate} Today
      </div>
    </div>
  );
}
function SMediaTitle(props) {
  return (
    <div className="SMediaTitle">
      <div className="SMediaTitleBox">
        <span>Social Media Dashboard</span>
        <span>Total Followers: {props.TotalFollowers}</span>
      </div>
      <hr className="LineBreak" />
      {props.children(props)}
    </div>
  );
}

export { SMediaBox, SMediaTitle };
