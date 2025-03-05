import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./component/homePage/Homepage";
import Footer from "./component/Footer";

import Menu from "./component/menuPage/Menu";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/meroResturant" element={<Homepage />} />
       
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
