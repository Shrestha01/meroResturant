import React, { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send an API request)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Contact Us</h1>
        <p className="text-xl text-gray-600">
          We'd love to hear from you! Reach out to us with any questions or
          inquiries.
        </p>
      </header>

      {/* Contact Information Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Restaurant Contact Details */}
          <div className="flex flex-col justify-center items-start space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Location
            </h3>
            <p className="text-gray-600">
              123 Foodie Street, Flavor Town, 12345
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>

            <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">contact@flavortownrestaurant.com</p>

            <h3 className="text-2xl font-semibold text-gray-800">
              Working Hours
            </h3>
            <p className="text-gray-600">Mon-Fri: 10:00 AM - 10:00 PM</p>
            <p className="text-gray-600">Sat-Sun: 12:00 PM - 11:00 PM</p>

            {/* Google Maps */}
            <div className="mt-6">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJE9on3F3qj4ARb8oA9Q7A1kc&key=YOUR_API_KEY"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
