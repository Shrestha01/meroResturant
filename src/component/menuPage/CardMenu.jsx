import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-600 text-sm">
        <strong>Category:</strong> {item.category}
      </p>
      <p className="text-green-600 font-bold mt-2">₹{item.price}</p>
      <p className="text-gray-700 text-center mt-2">{item.description}</p>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
        Delete
      </button>
    </div>
  );
};

export default MenuCard;
