import React from "react";
import { useCart } from "../context/CartContext";

function Item({ name, price }) {
  const cart = useCart();
  return (
    <div
      style={{
        border: "1px solid white",
        backgroundColor: "#464646",
        padding: "2rem",
        borderRadius: "0.4rem",
      }}
    >
      <h4>{name}</h4>
      <p>Price: ₹{price}</p>
      <button
        onClick={() =>
          cart.setItems([...cart.items, { name: name, price: price }])
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
