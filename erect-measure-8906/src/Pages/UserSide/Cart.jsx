import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/db.json");
      setItems(response.data.items);
    }
    fetchData();
  }, []);

  const handleAddProduct = (index) => {
    const product = items[index];
    const newCartItems = cartItems.concat(product);
    setCartItems(newCartItems);
    setTotalPrice(totalPrice + product.price);
  };

  const handleRemoveProduct = (index) => {
    const product = cartItems[index];
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
    setTotalPrice(totalPrice - product.price);
  };

  const handleOrder = () => {
    alert("Order has been placed!");
    setTimeout(() => {
      alert("Order is dispatched!");
    }, 2000);
    setTimeout(() => {
      alert("Delivered!");
    }, 3000);
  };

  return (
    <div>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              {item.name} - {item.category} - {item.price} - {item.rating}
              <button onClick={() => handleAddProduct(index)}>+</button>
            </div>
          );
        })}
      </div>
      <div>
        {cartItems.map((item, index) => {
          return (
            <div key={index}>
              {item.name} - {item.category} - {item.price} - {item.rating}
              <button onClick={() => handleRemoveProduct(index)}>-</button>
            </div>
          );
        })}
        <div>Total Price: {totalPrice}</div>
        <button onClick={handleOrder}>Order Now</button>
      </div>
    </div>
  );
};

export default Cart;
