import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./component/homePage/Homepage";
import Footer from "./component/Footer";
import About from "./component/aboutPage/About";

import Menu from "./component/menuPage/Menu";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>sign</button>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

export default App;
