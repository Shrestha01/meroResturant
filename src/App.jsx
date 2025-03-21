import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./component/homePage/Homepage";
import Footer from "./component/Footer";
import About from "./component/aboutPage/About";
import Contactus from "./component/contactusPage/Contactus";
import Menu from "./component/menuPage/Menu";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="min-h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/meroRestorant" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
