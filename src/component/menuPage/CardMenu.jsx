import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "./Menu";
import { useAuth0 } from "@auth0/auth0-react";

const MenuCard = ({ item }) => {
  const context = useContext(MyContext);
  const { user } = useAuth0();

  //delete handleEvent
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `https://foodrecipie-l1xv.onrender.com/api/menu/delete/${id}`
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
      const existingItemIndex = prev.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItemIndex !== -1) {
        // Item already exists, update the quantity
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += 1; // Increase quantity by 1
        return updatedCart;
      } else {
        // Item doesn't exist, add it to the cart with a quantity of 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="max-w-full rounded-lg shadow-lg p-4 flex flex-wrap flex-col md:col-span-2 lg:col-span-1 items-center shadow-black border-2 hover:border-purple-500 hover:scale-110 transition duration-200 ">
      <div className="">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-sm">
          <strong>Category:</strong> {item.category}
        </p>
        <p className="font-bold mt-2">₹{item.price}</p>
        <p className="text-center mt-2 hidden lg:block">{item.description}</p>
      </div>

      <div className="flex space-x-2 ">
        {user && user.email === "adarsha.stha123@gmail.com" && (
          <button
            className="mt-4 px-4 py-2 rounded-lg border-purple-500 border-2 hover:text-purple-500 hover:scale-110 transition duration-200"
            onClick={() => deleteData(item._id)}
          >
            Delete
          </button>
        )}
        <button
          className="mt-4 px-4 py-2 rounded-lg border-purple-500 border-2 hover:text-purple-500 hover:scale-110 transition duration-200"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
