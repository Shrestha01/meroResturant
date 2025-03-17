import React, { use, useEffect, useState, createContext } from "react";
import axios from "axios";
import MenuFilter from "./MenuFilter";
import { IoCart } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

// Create a Context for the reLoad Menu when item change
const MyContext = createContext();

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [reloadMenu, setReloadMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Handle form input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      // Show an alert if the user is not authenticated
      alert("Logging in with a valid Email and Password");
      navigate("/home"); // Navigate to /home if the user is not authenticated
    }
    if (user) {
      if (!user.email_verified) {
        alert("Email not Verified. Please Verify First!!! ");
        navigate("/home");
      }
    }
  }, [isAuthenticated, navigate]);

  // Submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, category, price, description);
    //  console.log(isAuthenticated);

    try {
      const response = await axios.post(
        "https://foodrecipie-j3ki.onrender.com/api/add",
        {
          name,
          category,
          description,
          price,
        }
      );

      setIsSuccess(true);
      setMessage("Recipe added successfully!");
      setReloadMenu((prev) => !prev);

      // Clear form fields after submission
      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
    } catch (error) {
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again.");
    }
  };

  // Fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://foodrecipie-j3ki.onrender.com/api/menu"
        ); // Replace with your API URL
        //console.log(menu);

        setMenu([...response.data.menu]); // Assuming your API returns the 'users' data
        setLoading(false);
      } catch (err) {
        setError(err.message); // Handle the error
        setLoading(false);
      }
    };
    // console.log("loaded");

    fetchData();
  }, [reloadMenu]);

  // const deleteData = async (id) => {
  //   console.log(id);

  //   try {
  //     const response = await axios.delete(`http://localhost:3000/users/${id}`);
  //     console.log(response.data.message);
  //     // On success, remove the user from the state
  //     setUsers(users.filter((user) => user._id !== id)); // Filter out the deleted user
  //     alert(response.data.message); // Show success message
  //     setMessage(response.data.message);
  //   } catch (error) {
  //     console.error("There was an error deleting the user:", error);
  //     alert("Failed to delete the user");
  //   }
  // };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {user && user.email === "adarsha.stha123@gmail.com" && (
        <div className="max-w-2/6  p-6">
          {/* Form for adding recipe */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium">
                Recipe Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="p-2 border border-purple-600 rounded-lg mt-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="p-2 border border-purple-600 rounded-lg mt-1"
                required
              >
                <option value="">Select Category</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="price" className="text-sm font-medium">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={handlePriceChange}
                className="p-2 border border-purple-600 rounded-lg mt-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="p-2 border border-purple-600 rounded-lg mt-1"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className=" px-6 py-2 rounded-lg  border-purple-500 border-2 hover:text-purple-500 hover:scale-110 transition duration-200"
              >
                Add Recipe
              </button>
            </div>
          </form>
          {/* Success or Error Message */}
          {message && (
            <div
              className={`mt-4 text-center p-2 rounded-lg ${
                isSuccess
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between border-43">
        {isAuthenticated && (
          <div className="max-h-screen overflow-auto p-4 max-w-3/6">
            {loading ? (
              <div>Loading...</div>
            ) : (
              /* Pass the menu as a prop to the child component */
              <MyContext.Provider
                value={{ reloadMenu, setReloadMenu, cart, setCart }}
              >
                <MenuFilter menu={menu} />
              </MyContext.Provider>
            )}
          </div>
        )}
        {/*Cart  */}

        {cart && cart.length > 0 && (
          <div className="overflow-auto max-w-2/6  p-6">
            sdafasdfadfadsfasdfasdfadfadfsasdfadsfad
            <div className="flex">
              <IoCart size={30} />
              {cart.length > 0 && cart.length}
            </div>
            <div className="pt-6">
              <ul className="text-sm">
                {cart.map((c) => (
                  <li>
                    <span>{c.name + c.quantity} </span>
                    <span className="ml-6">{c.quantity * c.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export { MyContext };
export default Menu;
