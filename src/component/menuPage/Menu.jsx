import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://expressapi-vp70.onrender.com/users"
        ); // Replace with your API URL
        setUsers(response.data.users); // Assuming your API returns the 'users' data
        setLoading(false);
      } catch (err) {
        setError(err.message); // Handle the error
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen">
      {/* About Content */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container mx-auto px-6 py-16">
          <h1>User List</h1>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <strong>Name:</strong> {user.name} <br />
                <strong>ID:</strong> {user.id}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
