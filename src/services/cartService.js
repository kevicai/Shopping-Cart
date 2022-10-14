// Backend for shopping cart modification logics

// simple local database
let cartDB = [
  { name: "Apple", price: 2, quantity: 2 },
  { name: "Banana", price: 1.5, quantity: 100 },
  { name: "Peach", price: 3, quantity: 5 },
  { name: "iPhone", price: 999, quantity: 1 },
  { name: "Tesla", price: 52990, quantity: 1 },
];

// add 1 item given index
const add1Item = (index, cart) => {
  // cart[index] = { name: "Apple", price: 2, quantity: 5 }
  cart[index].quantity += 1;

  return cart;
};

// delete 1 item given index
const del1Item = (index, cart) => {
  cart[index].quantity -= 1;

  // if quantity is 0, remove that item
  if (cart[index].quantity === 0) {
    cart.splice(index, 1);
  }

  return cart;
};

// get total price given a list of items
const getTotal = (cart) => {
  const totalPrice = cart.reduce(
    (prevVal, item) => prevVal + item.price * item.quantity,
    0
  );
  return totalPrice.toFixed(2);
};

// calculate tax given total price
const getTax = (price) => {
  const result = price * 0.13;
  return result.toFixed(2);
};

// get total price plus tax given total price
const getTotalPlusTax = (price) => {
  const result = price * 1.13;
  return result.toFixed(2);
};

const loadCart = () => {
  let cartCpy = [];
  cartDB.map((item) =>
    cartCpy.push({
      ...item,
    })
  );
  return cartCpy;
};

const saveCart = (cart) => {
  cartDB = [];
  cart.map((item) =>
    cartDB.push({
      ...item,
    })
  );
};

const cartService = {
  add1Item,
  del1Item,
  getTotal,
  getTax,
  getTotalPlusTax,
  loadCart,
  saveCart,
};

export default cartService;
