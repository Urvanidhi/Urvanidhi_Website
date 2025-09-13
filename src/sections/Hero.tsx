"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Farmers Empowered", value: 1200 },
  { label: "Crops Protected", value: 3500 },
  { label: "Solutions Delivered", value: 18 },
  { label: "Years of Innovation", value: 5 },
];

const slides = [
  { src: "/hero/HomePage1.png" },
  { src: "/hero/HomePage2.png" },
  { src: "/hero/HomePage3.png" },
  { src: "/hero/HomePage4.png" },
  { src: "/hero/HomePage5.png" },
];

const Hero = () => {
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animate counters
  useEffect(() => {
    metrics.forEach((metric, i) => {
      let start = 0;
      const duration = 3000;
      const stepTime = 30;
      const increment = metric.value / (duration / stepTime);
      const interval = setInterval(() => {
        start += increment;
        if (start >= metric.value) {
          start = metric.value;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(start);
          return updated;
        });
      }, stepTime);
    });
  }, []);

  // Slideshow autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-16 overflow-hidden font-inter scroll-smooth">
      {/* Background Wave */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#34D39920"
            d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,224C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </motion.svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12 lg:gap-20">
        {/* Left: Text + Logo */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo */}
          <motion.div
            className="mt-12 mb-6"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/favicon_color.png"
              alt="Urvanidhi Logo"
              width={100}
              height={100}
              className="drop-shadow-lg w-28 sm:w-36 md:w-40 h-auto"
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-green-800 leading-tight drop-shadow-md"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              Rooting for You.
            </motion.h1>
            <motion.span
              className="text-green-600 text-lg md:text-xl mt-2"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 1,
              }}
            >
              Smart farming, happier harvests.
            </motion.span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Harnessing{" "}
            <span className="font-semibold text-green-700">
              innovation, science, and sustainability
            </span>{" "}
            to empower farmers and cultivate a resilient future.
          </motion.p>

          {/* Metrics */}
          <motion.div
            className="mt-10 grid grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="flex flex-col items-center lg:items-start justify-center bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
                  {counts[i]}+
                </span>
                <span className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-700">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#about"
              className="px-6 py-3 bg-green-700 text-white rounded-xl shadow-lg hover:bg-green-800 hover:scale-105 transform transition-all text-base sm:text-lg"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/90 text-green-700 rounded-xl shadow-lg hover:bg-white hover:scale-105 transform transition-all text-base sm:text-lg"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right: Slideshow */}
        <motion.div
          className="flex-1 relative w-full max-w-xl aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-green-200 bg-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-contain sm:object-cover"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Navigation dots */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition ${
                  i === currentSlide ? "bg-green-700" : "bg-green-700/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
