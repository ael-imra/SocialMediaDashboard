import React from "react";
import "./OViewBox.Component.css";
function OViewTitle() {
  return <div className="OViewTitle">Overview - Today</div>;
}
function OViewBox(props) {
  const DetailsUpdate = {
    nigative: {
      color: "#B94658",
      htmlCode: <span>&#9660; </span>
    },
    positive: {
      color: "#39a393",
      htmlCode: <span>&#9650; </span>
    }
  };
  const sign = props.OViewBoxDetailsUpdate > 0 ? "positive" : "nigative";
  return (
    <div className="OViewBox">
      <div className="OViewBoxTitle">
        <span>{props.OViewBoxTitleText}</span>
        <img src={props.OViewBoxTitleIcon} alt="OViewBoxTitleText" />
      </div>
      <div className="OViewBoxDetails">
        <span>{props.OViewBoxDetailsCount}</span>
        <span style={{ color: DetailsUpdate[sign].color }}>
          {DetailsUpdate[sign].htmlCode}
          {props.OViewBoxDetailsUpdate}%
        </span>
      </div>
    </div>
  );
}
export { OViewBox, OViewTitle };
