import React, { useState } from "react";
import Item from "./Item";
import SaveLoadBtns from "./SaveLoadBtns";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  return (
    <div className="cart-section">
      <div className="cart-title-row">
        <div className="cart-title font-body">Shopping Cart</div>
        <SaveLoadBtns loadCart={props.loadCart} saveCart={props.saveCart} />
      </div>

      <div className="cart-scroll">
        {props.cart.map((item, index) => (
          <Item
            key={index}
            setItem={props.setItem}
            index={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}
