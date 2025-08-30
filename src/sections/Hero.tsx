"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  type: "image" | "video";
  src: string;
};

const fallbackSlides: Slide[] = [
  { type: "image", src: "/hero/fallback_1.jpeg" },
  { type: "video", src: "/hero/fallback_3.mp4" },
  { type: "image", src: "/hero/fallback_2.jpeg" },
];

const Hero = ({ slides }: { slides?: Slide[] }) => {
  const heroSlides = slides && slides.length > 0 ? slides : fallbackSlides;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const activeSlide = heroSlides[currentIndex];
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, activeSlide.type === "video" ? 8000 : 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, heroSlides]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-br from-green-50 to-white overflow-hidden animate-hero-fadein"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left animate-slide-up">
          <Image
            src="/favicon_color.png"
            alt="Urvanidhi Agritech LLP Logo"
            width={100}
            height={100}
            className="mx-auto lg:mx-0 mb-6"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
            Growing Smarter.
            <span className="block text-green-600">Sustaining Future.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0">
            Urvanidhi Agritech LLP is redefining agriculture through technology,
            sustainability, and innovation.
          </p>
          <a
            href="#about"
            className="mt-8 inline-block px-6 py-3 bg-green-700 text-white rounded-xl shadow-lg hover:bg-green-800 transition-all transform hover:scale-105"
          >
            Learn More
          </a>
        </div>

        {/* RIGHT SLIDESHOW */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[500px] flex items-center justify-center animate-scale-in">
          <div className="relative w-full max-w-lg h-full rounded-2xl overflow-hidden shadow-2xl border border-green-200 bg-black/10 backdrop-blur-md">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10 animate-zoom-in" : "opacity-0 z-0"
                }`}
              >
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={`Hero Slide ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                ) : (
                  <video
                    src={slide.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </div>
            ))}

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
