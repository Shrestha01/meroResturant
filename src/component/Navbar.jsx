import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-t from-blue-600 to-purple-500 sticky top-0">
      <div className=" container flex justify-between items-center text-white p-4">
        <div>Logo</div>
        <div>
          <ul className="flex space-x-11">
            <li>
              <Link
                to="/"
                className="inline-block  hover:scale-110 hover:text-primary "
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className="inline-block  hover:scale-110 hover:text-primary "
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className="inline-block  hover:scale-110 hover:text-primary "
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="inline-block  hover:scale-110 hover:text-primary "
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex ">
          <button className="inline-block hover:scale-110 hover:text-primary hover:border-primary border-2 p-4 rounded-s-3xl">
            Sign In
          </button>
          <button className="inline-block hover:scale-110 hover:text-primary hover:border-primary border-2 p-4 rounded-r-3xl">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
