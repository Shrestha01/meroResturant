import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "./Menu";

const MenuCard = ({ item }) => {
  const c = useContext(MyContext);
  const deleteData = async (id) => {
    console.log(id);

    try {
      const response = await axios.delete(
        `https://foodrecipie-j3ki.onrender.com/api/menu/delete/${id}`
      );
      console.log(response.data.message);
      // On success, remove the user from the state
      // setUsers(users.filter((user) => user._id !== id)); // Filter out the deleted user
      alert(response.data.message); // Show success message
      // setMessage(response.data.message);
      c.setReloadMenu((prev) => !prev);
    } catch (error) {
      console.error("There was an error deleting the user:", error);
      alert("Failed to delete the user");
    }
  };
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-600 text-sm">
        <strong>Category:</strong> {item.category}
      </p>
      <p className="text-green-600 font-bold mt-2">₹{item.price}</p>
      <p className="text-gray-700 text-center mt-2">{item.description}</p>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
        onClick={() => deleteData(item._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default MenuCard;
