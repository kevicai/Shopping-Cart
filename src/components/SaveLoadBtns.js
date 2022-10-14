import React from "react";
import "./SaveLoadBtns.css";

export default function SaveLoadBtns(props) {
  return (
    <div className="btns-section font-body">
      <div className="save-btn btns-title" onClick={props.saveCart}>
        Save Cart
      </div>
      <div className="load-btn btns-title" onClick={props.loadCart}>
        Load Cart
      </div>
    </div>
  );
}
