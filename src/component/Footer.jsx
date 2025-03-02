import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Resort Logo & Name */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">Nature Ray</h2>
          <p className="mt-2 text-gray-400">
            Escape to paradise with luxury and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="/rooms" className="hover:text-yellow-300 transition">
                Rooms
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start mt-2 text-gray-400">
            <FaMapMarkerAlt className="mr-2" /> Bhumahi, Nawalparasi, Nepal
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2 text-gray-400">
            <FaPhone className="mr-2" /> +9779847034597
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2 text-gray-400">
            <FaEnvelope className="mr-2" /> info@natureray.com
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition text-2xl"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} Sunset Resort. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
