import React, { useState, useEffect,useContext } from "react";
import CardMenu from "./CardMenu"; // Assuming CardMenu component is already created
import { CounterContext } from './Menu';

const MenuFilter = () => {




  const {menu} = useContext(CounterContext);
  const [filteredMenu, setFilteredMenu] = useState(menu);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category change and filter the menu items accordingly
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  // Extract unique categories from the menu data for dropdown
  const categories = ["All", ...new Set(menu.map((item) => item.category))];

  useEffect(() => {
    // Filter items based on the selected category
    if (selectedCategory === "All") {
      setFilteredMenu(menu); // Show all items if "All" is selected
    } else {
      setFilteredMenu(menu.filter((item) => item.category === selectedCategory));
    }
    // console.log("MenuFilter received updated menu:", menu);
  }, [menu, selectedCategory]);

  return (
    <div>
      {/* Dropdown for category selection */}
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered menu items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMenu.map((item) => (
          <CardMenu key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
