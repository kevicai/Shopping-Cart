import React from "react";
import cartService from "../services/cartService";
import "./TotalPrice.css";

export default function TotalPrice(props) {
  return (
    <div className="total-section font-body">
      <div className="total-row">
        <div className="subtext">Cart Total: </div>
        <div className="subtext">$ {props.cartTotal}</div>
      </div>

      <div className="total-row">
        <div className="subtext">+ Tax:</div>
        <div className="subtext">
          $ {cartService.getTax(props.cartTotal)}
        </div>
      </div>

      <div className="total-title">Total Price</div>
      <div className="total-price">$ {cartService.getTotalPlusTax(props.cartTotal)}</div>
    </div>
  );
}
