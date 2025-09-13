"use client";
import React, { useEffect, useState } from "react";

const Counter = ({
  target,
  duration,
}: {
  target: number;
  duration: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 20;
    const step = Math.ceil((end / (duration * 1000)) * incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count.toLocaleString()}</>;
};

const About = () => (
  <section
    id="about"
    className="py-16 bg-gradient-to-b from-green-50 to-green-100 scroll-smooth"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 animate-fadeIn">
          About Us
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl sm:max-w-4xl mx-auto animate-fadeIn [animation-delay:200ms] leading-relaxed">
          <span className="font-semibold text-green-700">Urvanidhi</span> is
          redefining agricultural progress by blending{" "}
          <span className="font-semibold text-green-800">
            modern science with a deep commitment to farmer success
          </span>
          . Our mission is clear: to empower farmers with intelligent
          technologies and forward-thinking strategies that make agriculture
          smarter, sustainable, and consistently profitable.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {[
          {
            icon: "🌱",
            title: "Precision Nutrition",
            desc: "Tailored, science-based formulations that strengthen crops from the root zone upward.",
          },
          {
            icon: "🌾",
            title: "Resilient Crops",
            desc: "Boosting plant health and protecting against weather, pests, and other challenges.",
          },
          {
            icon: "🤝",
            title: "Farmer First",
            desc: "We partner with farmers at every stage, not just deliver products.",
          },
          {
            icon: "🌍",
            title: "Responsible Farming",
            desc: "Convenient, scalable, and environmentally conscious solutions for all.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 animate-fadeIn text-center"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl sm:text-2xl font-bold">
              {item.icon}
            </div>
            <h3 className="mt-4 font-bold text-green-800 text-lg sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Mission + Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        <div className="bg-white rounded-xl p-6 sm:p-10 shadow-md animate-fadeIn text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To deliver{" "}
            <span className="text-green-700 font-semibold">
              measurable results through precision nutrition management
            </span>
            —empowering farmers to achieve healthier crops, higher yields, and
            long-term profitability.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 sm:p-10 shadow-md animate-fadeIn [animation-delay:150ms] text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            A future where farming is powered by{" "}
            <span className="text-green-700 font-semibold">
              advanced agri-products, custom strategies, and digital solutions
            </span>
            —all seamlessly integrated to support farmers, consumers, and the
            planet.
          </p>
        </div>
      </div>

      {/* Impact / Stats */}
      <div className="bg-green-800 text-white rounded-2xl p-6 sm:p-10 text-center shadow-md animate-fadeIn">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">Our Impact</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { number: 10000, label: "Farmers Empowered" },
            { number: 50, label: "Crop Programs" },
            { number: 25, label: "Higher Yields (%)" },
            { number: 120, label: "Experts in Our Team" },
            { number: 15, label: "States Reached" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center animate-fadeIn"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <p className="text-3xl sm:text-4xl font-extrabold">
                <Counter target={stat.number} duration={3} />
              </p>
              <p className="text-xs sm:text-base mt-2 opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="animate-fadeIn">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-5 text-center">
            Our Story
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            Urvanidhi didn’t start as farmers—we started with{" "}
            <span className="font-semibold text-green-700">
              passion and respect for farming
            </span>
            . Seeing the challenges of rising costs, weather uncertainty, and
            limited access to modern tools, we felt a strong call to act.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            Our journey began with experts, agronomists, nutritionists, and
            technologists who shared one belief:{" "}
            <span className="font-semibold text-green-700">
              better farming begins with better nutrition
            </span>
            . By focusing on soil health, root zone care, and plant resilience,
            we developed solutions that go beyond quick fixes.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Today, Urvanidhi is more than a company—it’s{" "}
            <span className="font-semibold text-green-700">
              a team of scientists, supply chain specialists, and field experts
            </span>{" "}
            working hand-in-hand with farmers to build sustainable, scalable,
            and prosperous farming communities.
          </p>
        </div>
        <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden shadow-md animate-fadeIn [animation-delay:200ms]">
          <img
            src="/hero/fallback_1.jpeg"
            alt="Urvanidhi farming"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-14 rounded-2xl shadow-md bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white p-6 sm:p-10 text-center animate-fadeIn">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">
          Why Choose Urvanidhi?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm sm:text-lg">
          <div className="p-4 bg-white/10 rounded-lg">
            🌟 <span className="font-semibold">Proven Philosophy</span> – “Crop
            Protection through Nutrition Management.”
          </div>
          <div className="p-4 bg-white/10 rounded-lg">
            🔬 <span className="font-semibold">Science-Backed</span> – Precision
            nutrition, tested and trusted in the field.
          </div>
          <div className="p-4 bg-white/10 rounded-lg">
            🤝 <span className="font-semibold">Expert Team</span> – Agronomists,
            nutritionists, and technologists by your side.
          </div>
          <div className="p-4 bg-white/10 rounded-lg">
            🌍 <span className="font-semibold">Future-Ready</span> – Advanced
            agri-products, digital solutions, and responsible practices.
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="mt-14 text-center animate-fadeIn [animation-delay:300ms]">
        <blockquote className="italic text-xl sm:text-2xl text-green-800 font-medium">
          “Crop Protection through Nutrition Management.”
        </blockquote>
        <p className="mt-4 text-sm sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          With Urvanidhi, farming is no longer about just surviving—it’s about{" "}
          <span className="font-semibold text-green-700">
            thriving with smarter, sustainable, and profitable solutions
          </span>{" "}
          for today and generations ahead.
        </p>
      </div>
    </div>
  </section>
);

export default About;
