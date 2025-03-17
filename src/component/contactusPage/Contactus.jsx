import React, { useState } from "react";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add form submission logic here (e.g., send an API request)
    //console.log("Form submitted:", formData);
    try {
      const response = await axios.post(
        "https://foodrecipie-l1xv.onrender.com/api/send-email",
        formData
      );

      alert("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
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

const express = require("express"); // express js
require("dotenv").config(); // for env variable
const app = express(); //app
const Menu = require("./Schema/MenuSchema");
const cors = require("cors");
const nodemailer = require("nodemailer");

const dbConnection = require("./DBConnection/dbConnection"); //DB connection

// Importing env varibles
const port = process.env.PORT;
const email = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

// Enable CORS for all domains (you can customize this to restrict access to specific domains)
app.use(cors());

//DB connection
dbConnection();

app.use(express.json());

//transporter for sending Email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

// API to send Email...
app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body; // getting Information from Frontend
  console.log(name, email, message);

  const mailOptions = {
    from: email,
    to: "adarsha.stha123@gmail.com",
    subject: name,

    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  //sending mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error Sending your Info... Sorry!!!");
    }
    res.status(200).send("Thank you for your Info...");
  });
});

// fetching all the menu from menu collection
app.get("/api/menu", async (req, res) => {
  try {
    const menu = await Menu.find(); // Fetch all users from the database

    res.status(200).json({
      message: "Menu fetched successfully",
      itemNumber: menu.length,
      menu,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Menu",
      error: error.message,
    });
  }
});

//fetch food according to category
app.get("/api/menu/:category", async (req, res) => {
  const cat = req.params;

  try {
    const newCategory = await Menu.find(cat); // Fetch only 'Veg' items from the database

    if (newCategory.length === 0) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.status(200).json({
      message: "Category fetched successfully",
      itemNumber: newCategory.length,
      category: newCategory, // Send the filtered veg menu items
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Items",
      error: error.message,
    });
  }
});

//route for inserting food details on menu
app.post("/api/menu/register", async (req, res) => {
  const { name, category, description, price } = req.body;

  // Basic validation
  if (!name || !category || !description || !price) {
    return res.status(400).json({
      message: "Please Send all the field",
    });
  }

  try {
    // Create a new user document and save it to the database
    const newMenu = new Menu({
      name,
      category,
      description,
      price,
    });

    // Save the new user
    await newMenu.save();

    res.status(201).json({
      message: "Menu added successfully",
      user: newMenu,
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({
      message: "Error inserting user",
      error: error.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running`);
});
