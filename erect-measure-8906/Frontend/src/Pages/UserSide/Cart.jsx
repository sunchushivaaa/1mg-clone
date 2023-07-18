import React, { useState, useEffect } from "react";
import "../../../src/Components/Styles/UserSide/Cart.scss";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemsToRemove, setItemsToRemove] = useState([]);
  const [total_product, setTotalproduct] = useState(0);

  useEffect(() => {
    // get the cart data from local storage
    let cart_data = JSON.parse(localStorage.getItem("cart_data"))||[];
    if (cart_data) {
      setItems(cart_data);
    } else {
      // if there are no items in the cart, alert the user
      toast.error("no item");
    }
    let sum = 0;

    cart_data.forEach((ele) => {
      // calculate the total price of all items in the cart
      sum += ele.discountedPrice;
    });
    // set the total price state
    setTotalPrice(sum);
    setTotalproduct(cart_data.length);
  }, []);

  // function to handle adding a product to the cart
  const handleAddProduct = (index) => {
    let product = items[index];
    // increase the total price by the product price
    setTotalPrice(totalPrice + product.price);
    // increase the quantity of the product by 1
    product.quantity = product.quantity + 1;
  };

  // function to handle removing a product from the cart
  const handleRemoveProduct = (index) => {
    let product = items[index];

    // if the product quantity is greater than 1, decrease the total price and the quantity
    if (product.quantity > 1) {
      setTotalPrice(totalPrice - product.price);
      product.quantity = product.quantity - 1;
    }
  };

  // function to handle deleting a product from the cart
  const handleDelete = (index) => {
    let cartData = JSON.parse(localStorage.getItem("cart_data"));
    let newCartData = cartData.filter((item, i) => i !== index);
    localStorage.setItem("cart_data", JSON.stringify(newCartData));
    setItemsToRemove([...itemsToRemove, index]); // Add index to itemsToRemove

    let sum = 0;
    newCartData.forEach((ele) => {
      sum += ele.discountedPrice * ele.quantity;
    });
    setTotalPrice(sum);
    setTotalproduct(total_product - 1);
    toast.success("Item Removed !", {
      style: {
        borderRadius: "50px",
        background: "#c0c2c0",
        color: "black",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
  };

  return (
    <div className="cart-container" id="cart-container">
      <h1>Total Products in Cart: {total_product}</h1>
      <div className="cart-items">
        {items.map((product, index) => (
          <div
            className={`cart-item ${
              itemsToRemove.includes(index) ? "removed" : ""
            }`}
          >
            <img src={product.image} alt="Product Image" />
            <p>{product.title}</p>
            <p>₹{product.discountedPrice}</p>
            <button onClick={() => handleRemoveProduct(index)}>-</button>
            <p>Qty: {product.quantity}</p>
            <button onClick={() => handleAddProduct(index)}>+</button>
            <button onClick={() => handleDelete(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <div>
          <p>Subtotal:</p>
          <p>₹{totalPrice}</p>
        </div>
        <div>
          <p>Shipping:</p>
          <p>₹0.00</p>
        </div>
        <div className="totalpay">
          <p>Total:</p>
          <p>₹{totalPrice}</p>
        </div>
        <div className="totalpaybutton">
          <Link to="/payment">
            {" "}
            <button>Pay Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
