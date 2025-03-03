import React from "react";
import { useEffect } from "react";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className=" min-h-screen bg-[url('/images/hero.jpg')] bg-cover">
      {/* Hero Section */}
      <section className=" h-[60vh] flex items-center justify-center text-white text-center p-6">
        <div className="bg-gradient-to-t from-blue-600 to bg-purple-600 bg-opacity-80 p-6 rounded-xl">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Welcome to Nature Ray River View Resort
          </h1>
          <p className="mt-4 text-lg">Experience the finest flavors with us</p>
          <a
            href="#menu"
            className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:scale-110 transition duration-300"
          >
            Explore Menu
          </a>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Our Specialties</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4 w-64">
            <img
              src="https://source.unsplash.com/300x200/?pizza"
              alt="Hall Image"
              className="rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">Function Hall</h3>
            <p className="text-gray-600">
              Spacious Hall with AC and Stage for Function celebration
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 w-64">
            <img
              src="https://source.unsplash.com/300x200/?burger"
              alt="Room"
              className="rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">AC Room</h3>
            <p className="text-gray-600">
              Spacious room with AC and Attached Bathroom
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 w-64">
            <img
              src="https://source.unsplash.com/300x200/?pasta"
              alt="Dine In"
              className="rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">
              Dine In Resturant with Bar
            </h3>
            <p className="text-gray-600">
              Authentic Nepali and Indaian Taste with Bar
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-t from-blue-600 to bg-purple-600 text-white text-center py-10">
        <h2 className="text-3xl font-bold">Ready to Taste the Best?</h2>
        <p className="mt-2">Reserve your table now or order online!</p>
        <a
          href="#contact"
          className="mt-4 inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold  hover:scale-110 duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Homepage;
