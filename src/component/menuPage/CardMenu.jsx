import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "./Menu";

const MenuCard = ({ item }) => {
  const context = useContext(MyContext);

  //delete handleEvent
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `https://foodrecipie-j3ki.onrender.com/api/menu/delete/${id}`
      );
      console.log(response.data.message);
      // On success, remove the user from the state
      // setUsers(users.filter((user) => user._id !== id)); // Filter out the deleted user
      alert(response.data.message); // Show success message
      // setMessage(response.data.message);
      context.setReloadMenu((prev) => !prev);
    } catch (error) {
      console.error("There was an error deleting the user:", error);
      alert("Failed to delete the user");
    }
  };

  // Function to add or update the cart item
  const addToCart = (item) => {
  context.setCart((prev) => {
    const existingItemIndex = prev.findIndex(cartItem => cartItem._id === item._id);

    if (existingItemIndex !== -1) {
      // Item already exists, update the quantity
      const updatedCart = [...prev];
      updatedCart[existingItemIndex].quantity += 1;  // Increase quantity by 1
      return updatedCart;
    } else {
      // Item doesn't exist, add it to the cart with a quantity of 1
      return [...prev, { ...item, quantity: 1 }];
    }
  });
};

  return (
    <div className="max-w-xs rounded-lg shadow-lg p-4 flex flex-col items-center shadow-black border-2 hover:border-purple-500 hover:scale-110 transition duration-200 ">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-sm">
        <strong>Category:</strong> {item.category}
      </p>
      <p className="font-bold mt-2">₹{item.price}</p>
      <p className=" text-center mt-2">{item.description}</p>
      <button
        className="mt-4 px-4 py-2 rounded-lg  bg-gradient-to-t from-blue-600 to-purple-500 text-white hover:scale-110 transition duration-200"
        onClick={() => deleteData(item._id)}
      >
        Delete
      </button>
      <button
        className="mt-4 px-4 py-2 rounded-lg  bg-gradient-to-t from-blue-600 to-purple-500 text-white hover:scale-110 transition duration-200"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuCard;
