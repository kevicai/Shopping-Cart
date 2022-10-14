import React, { useState } from "react";
import "./InputItem.css";

export default function InputItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quant, setQuant] = useState(1);
  const [showInput, setShowInput] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantChange = (event) => {
    setQuant(event.target.value);
  };

  const onExpandClick = () => {
    setShowInput(!showInput);
  };

  // submit form
  const addItem = () => {
    const priceFloat = parseFloat(price).toFixed(2);
    const item = {
      name: name,
      price: parseFloat(priceFloat),
      quantity: Math.round(quant),
    };
    // if inputs not empty
    if (name !== "" && price !== "") {
      props.addItem(item);
    }
    // reset values to default
    setName("");
    setPrice("");
    setQuant(1);
  };

  return (
    <div className="input-section font-body">
      <div className="input-title" onClick={onExpandClick}>
        Add Item
      </div>
      {showInput && (
        <div>
          {" "}
          <div className="input-subtext">Item Name</div>
          <input
            className="input-box"
            value={name}
            onChange={handleNameChange}
          ></input>
          <div className="input-subtext">Price Per Item</div>
          <input
            className="input-box"
            value={price}
            onChange={handlePriceChange}
          ></input>
          <div className="input-subtext">Quantity</div>
          <input
            className="input-box"
            type="number"
            value={quant}
            onChange={handleQuantChange}
          ></input>
          <button className="submit-btn" onClick={addItem}>
            Add
          </button>
        </div>
      )}

      <button className="arrow-btn" onClick={onExpandClick}>
        {" "}
        {showInput ? (
          <div className="dropdown-arrow up" onClick={onExpandClick} />
        ) : (
          <div className="dropdown-arrow down" onClick={onExpandClick} />
        )}
      </button>
    </div>
  );
}
