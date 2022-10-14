import React, { useEffect, useState } from "react";
import "./App.css";
import "./utils/Fonts.css";
import ShoppingCart from "./components/ShoppingCart";
import cartService from "./services/cartService"; // backend functions
import TotalPrice from "./components/TotalPrice";
import InputItem from "./components/InputItem";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // initial load of cart items from database
  useEffect(() => {
    const cartLoaded = cartService.loadCart();
    setCart(cartLoaded);

    const totalPrice = cartService.getTotal(cartLoaded);
    setCartTotal(totalPrice);
  }, []);

  const loadCart = () => {
    if (window.confirm("This will replace your current cart, are you sure?")) {
      const cartLoaded = cartService.loadCart();
      setCart(cartLoaded);

      const totalPrice = cartService.getTotal(cartLoaded);
      setCartTotal(totalPrice);
    }
  };

  const saveCart = () => {
    cartService.saveCart(cart);
  };

  const addItem = (item) => {
    console.log("added");
    let cartCpy = [...cart];
    cartCpy.unshift(item);
    setCart(cartCpy);
  };

  const setItem = (index, type) => {
    let cartCpy = [...cart];
    if (type === "add") {
      cartCpy = cartService.add1Item(index, cartCpy);
      // also change cart total price
      let priceTotal = parseFloat(cartTotal) + cart[index].price;
      setCartTotal(priceTotal.toFixed(2));
    } else if (type === "delete") {
      cartCpy = cartService.del1Item(index, cartCpy);
      // akso change cart total price
      let priceTotal = parseFloat(cartTotal) - cart[index].price;
      setCartTotal(priceTotal.toFixed(2));
    }
    setCart(cartCpy);
  };

  return (
    <div className="app-content-margins">
      <ShoppingCart
        cart={cart}
        setItem={setItem}
        saveCart={saveCart}
        loadCart={loadCart}
      />
      <div className="app-right-column">
        <InputItem addItem={addItem} />
        <TotalPrice cartTotal={cartTotal} />
      </div>
    </div>
  );
}
