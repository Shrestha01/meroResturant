import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./component/homePage/Homepage";
import Footer from "./component/Footer";
import About from "./component/aboutPage/about";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1>Contact page</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
