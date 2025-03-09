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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/meroRestorant" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
