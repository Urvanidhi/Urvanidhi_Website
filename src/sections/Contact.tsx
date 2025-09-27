"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const nameRegex = /^[A-Za-z. ]*$/;
  const phoneRegex = /^[0-9]*$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "name" && (!nameRegex.test(value) || value.length > 30))
      return;
    if (name === "phone" && (!phoneRegex.test(value) || value.length > 10))
      return;
    if (name === "message" && value.length > 500) return;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      setStatus("Please fill in all fields correctly.");
      return;
    }

    if (form.phone.length !== 10) {
      setStatus("Phone number must be 10 digits.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f3f7f5 0%, #dce8e2 100%)",
      }}
    >
      {/* Background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-green-300/20 rounded-full blur-3xl animate-pulse-slow"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/15 rounded-full blur-3xl animate-pulse-slow"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 15 }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-green-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-green-800 mb-12 text-lg sm:text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Have questions or want to collaborate? Fill out the form and we’ll get
          back to you promptly.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col gap-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-green-900 font-medium mb-1">
                Name* (max 30 chars)
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-300 outline-none text-black transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-green-900 font-medium mb-1">
                Phone Number* (10 digits)
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter digits only"
                required
                className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-300 outline-none text-black transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-green-900 font-medium mb-1">
              Message* (max 500 chars)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-300 outline-none text-black resize-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-800 text-white font-semibold rounded-xl shadow-lg hover:bg-green-900 transition-all"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-green-900 mt-2">{status}</p>
          )}
        </motion.form>

        {/* Contact Hub */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-start md:items-center justify-around gap-8 border border-green-100 hover:shadow-2xl transition-shadow">
            {/* Email */}
            <div className="flex items-center gap-4">
              <FiMail className="text-green-700 text-3xl" />
              <div>
                <p className="font-semibold text-green-900">Email</p>
                <p className="text-green-800">urvanidhi@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FiPhone className="text-green-700 text-3xl" />
              <div>
                <p className="font-semibold text-green-900">Phone</p>
                <p className="text-green-800">9900943005</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-center gap-4">
              <FiMapPin className="text-green-700 text-3xl" />
              <div>
                <p className="font-semibold text-green-900">Office</p>
                <p className="text-green-800">Bangalore, Karnataka</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
