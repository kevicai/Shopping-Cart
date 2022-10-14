import React from "react";
import "./Item.css";

export default function Item(props) {
  return (
    <div className="item-card font-body">
      <div className="item-box">
        <div className="item-name">{props.name}</div>
        <div className="item-desc">${props.price.toFixed(2)} per item</div>
        <div className="quant-row">
          <button
            className="quant-btn"
            onClick={() => props.setItem(props.index, "delete")}
          >
            -
          </button>
          <div className="item-quantity">x {props.quantity}</div>
          <button
            className="quant-btn"
            onClick={() => props.setItem(props.index, "add")}
          >
            +
          </button>
        </div>
      </div>
      <div className="item-price">
        $ {(props.price * props.quantity).toFixed(2)}
      </div>
    </div>
  );
}
