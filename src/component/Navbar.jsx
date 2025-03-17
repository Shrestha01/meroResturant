import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, logout, loginWithRedirect } = useAuth0();

  console.log(user);

  // toogle for navbar

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gradient-to-t from-blue-600 to-purple-500 sticky top-0">
      <div className=" container flex justify-between items-center text-white p-4">
        {/* Logo */}
        <div>Logo</div>
        {/* Desktop Navigation */}
        <div>
          <ul className="hidden sm:flex space-x-11">
            <li>
              <Link
                to="/home"
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
                to="/Menu"
                className="inline-block  hover:scale-110 hover:text-primary "
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/Contactus"
                className="inline-block  hover:scale-110 hover:text-primary "
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Login/Signup Button */}

        <div className="sm:flex border-2 ">
          {user ? (
            <button
              className="inline-block hover:scale-110 hover:text-primary hover:border-primary border-2 p-4 rounded-r-3xl"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log out
            </button>
          ) : (
            <button
              className="inline-block hover:scale-110 hover:text-primary hover:border-primary border-2 p-4 rounded-s-3xl"
              onClick={(e) => loginWithRedirect()}
            >
              Sign In
            </button>
          )}
        </div>
        {/* Mobile Navbar */}

        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ImCross
              size={28}
              className="hover:text-primary hover:scale-110 duration-300"
            />
          ) : (
            <GiHamburgerMenu
              size={28}
              className="hover:text-primary hover:scale-110 duration-300"
            />
          )}
        </button>
        {/* Mobile  */}
      </div>
      <div className="container sm:hidden text-white flex justify-center text-lg">
        {isOpen && (
          <div>
            <ul className="space-y-4 flex-col text-center ">
              <li>
                <Link
                  to="/home"
                  className="inline-block  hover:scale-110 hover:text-primary "
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/About"
                  className="inline-block  hover:scale-110 hover:text-primary "
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/Menu"
                  className="inline-block  hover:scale-110 hover:text-primary "
                  onClick={() => setIsOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/Contactus"
                  className="inline-block  hover:scale-110 hover:text-primary "
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
