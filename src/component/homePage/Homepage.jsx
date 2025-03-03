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
              alt="Pizza"
              className="rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">Delicious Pizza</h3>
            <p className="text-gray-600">Crispy crust with fresh toppings</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 w-64">
            <img
              src="https://source.unsplash.com/300x200/?burger"
              alt="Burger"
              className="rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">Juicy Burgers</h3>
            <p className="text-gray-600">Grilled to perfection</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 w-64">
            <img
              src="https://source.unsplash.com/300x200/?pasta"
              alt="Pasta"
              className="rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">Creamy Pasta</h3>
            <p className="text-gray-600">Authentic Italian taste</p>
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
