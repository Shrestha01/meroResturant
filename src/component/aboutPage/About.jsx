import React, { useEffect } from "react";
import aboutImage from "../../assets/images/hero.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen">
      {/* About Content */}

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600">Our Story</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Welcome to <strong>Gourmet Delights</strong>, where passion meets
              flavor. Our journey began with a vision to bring authentic, fresh,
              and high-quality dishes to food lovers. We believe in using only
              the finest ingredients and providing an unforgettable dining
              experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={aboutImage}
              alt="Our Story"
              className="rounded-lg shadow-black shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-t from-blue-600 to bg-purple-600 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Chef"
                className="rounded-full w-32 h-32 border-4 border-white hover:scale-110 duration-300 "
              />
              <h3 className="text-xl font-semibold mt-4 ">Chef John Doe</h3>
              <p className="text-gray-200">Executive Chef</p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Manager"
                className="rounded-full w-32 h-32 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Lee</h3>
              <p className="text-gray-200">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Manager"
                className="rounded-full w-32 h-32 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Lee</h3>
              <p className="text-gray-200">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Manager"
                className="rounded-full w-32 h-32 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Lee</h3>
              <p className="text-gray-200">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Manager"
                className="rounded-full w-32 h-32 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Lee</h3>
              <p className="text-gray-200">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Manager"
                className="rounded-full w-32 h-32 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Lee</h3>
              <p className="text-gray-200">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Manager"
                className="rounded-full w-32 h-32 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Lee</h3>
              <p className="text-gray-200">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Manager"
                className="rounded-full w-32 h-32 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Lee</h3>
              <p className="text-gray-200">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <img
                src={aboutImage}
                alt="Manager"
                className="rounded-full w-32 h-32 border-4 border-white"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Lee</h3>
              <p className="text-gray-200">Restaurant Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
