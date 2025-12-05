"use client";
import React, { useState } from "react";

// ---------------- PRODUCTS ----------------
interface Product {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  emoji: string;
  benefits: string[];
  color: string;
  image: string;
}

const products: Product[] = [
  {
    title: "Urvanidhi 'Adike Siri' — Total Nutrition for Areca",
    subtitle: "Lifeline Crop of Karnataka Farmers",
    description:
      "The only fertiliser specially formulated and targeted for Areca palms, unlike generic products. Scientifically validated and farmer-tested for superior growth and yield.",
    tag: "Areca Fertiliser",
    emoji: "🌴",
    benefits: [
      "Up to 30% higher yields with balanced nutrition",
      "Strong, healthy plants with better disease resistance",
      "Complete nutrition with 14+ essential nutrients",
      "Available for young plants (1-4 years) and mature plants (5+ years)"
    ],
    color: "from-amber-500 to-orange-600",
    image: "/products/areca.png"
  },
  {
    title: "Urvanidhi 'Samabar Siri' — Total Nutrition for Pepper",
    subtitle: "The King of Spices",
    description:
      "Scientifically formulated nutrition package that addresses challenges like productivity, berry drop, and disease resistance for Black Pepper cultivation.",
    tag: "Pepper Fertiliser",
    emoji: "🌶️",
    benefits: [
      "Balanced supply of 14+ essential nutrients",
      "Promotes healthy vine growth and strong root development",
      "Enhances flowering, spike initiation and berry setting",
      "Improves immunity against major diseases"
    ],
    color: "from-green-600 to-emerald-700",
    image: "/products/pepper.png"
  },
  {
    title: "Urvanidhi 'Bhatta Siri' — Total Nutrition for Paddy",
    subtitle: "The Backbone of Food Security",
    description:
      "Complete nutrition package crafted with readily available nutrients. Scientifically proven, trusted with farmers, and delivers reliable results every season.",
    tag: "Paddy Fertiliser",
    emoji: "🌾",
    benefits: [
      "Contains all essential nutrients for paddy",
      "Promotes healthy seedling establishment and robust panicle formation",
      "Improves resistance to blast, blight, and other diseases",
      "Consistent yield increases of 20-30% per acre"
    ],
    color: "from-yellow-500 to-amber-600",
    image: "/products/paddy.png"
  },
  {
    title: "Urvanidhi 'GT Siri' — Total Nutrition for Ginger",
    subtitle: "The Aromatic Gold of Karnataka",
    description:
      "Complete nutrition package specifically developed for ginger cultivation. Proven to enhance rhizome size, weight, and pungency, improving both yield and market value.",
    tag: "Ginger Fertiliser",
    emoji: "🫚",
    benefits: [
      "Contains all macro and micro nutrients essential for vigorous growth",
      "Helps ginger plants combat major diseases",
      "Improves soil health and structure for long-term sustainable farming",
      "Simplifies nutrient management for farmers"
    ],
    color: "from-orange-500 to-red-600",
    image: "/products/ginger.png"
  },
  {
    title: "Urvanidhi 'Kalpa Siri' — Total Nutrition for Coconut",
    subtitle: "The Tree of Life",
    description:
      "Complete fertiliser package designed specifically for coconut palms. Supplies all essential macro and micro elements in balanced form for vigorous growth and better copra quality.",
    tag: "Coconut Fertiliser",
    emoji: "🥥",
    benefits: [
      "Promotes vigorous growth and better nut set",
      "Improves palm immunity against common pests and diseases",
      "Ensures sustained soil fertility and better moisture retention",
      "Eliminates the need for multiple fertilizers"
    ],
    color: "from-green-500 to-teal-600",
    image: "/products/coconut.png"
  },
  {
    title: "Urvanidhi 'Vasudhe' — Premium Pure Organic Manure",
    subtitle: "For Sustainable Farming",
    description:
      "100% pure organic manure, carefully crafted from natural farm and plant residues. Designed to rejuvenate soil health and promote sustainable, eco-friendly agriculture.",
    tag: "Organic Manure",
    emoji: "🌱",
    benefits: [
      "Enhances soil fertility naturally and improves soil texture",
      "Balanced nutrient supply slowly released through all growth stages",
      "Boosts microbial activity and beneficial soil microbes",
      "Reduces dependence on chemical fertilizers"
    ],
    color: "from-lime-500 to-green-600",
    image: "/products/vasudhe.png"
  },
];

// ---------------- SERVICES ----------------
const services = [
  {
    title: "Crop Management",
    description: `• Tailored crop selection and sowing guidance
• Expert supervision on planting, spacing, and irrigation
• Continuous monitoring and growth optimization`,
    icon: "🌾"
  },
  {
    title: "Pest Management",
    description: `• Early detection and identification of pests and diseases
• Environmentally safe Integrated Pest Management (IPM) plans
• Proper timing and use of pest control measures for crop health`,
    icon: "🛡️"
  },
  {
    title: "Nutrition Management",
    description: `• Soil and leaf nutrient testing
• Customized fertilization schedules using Urvanidhi's quality inputs
• Ongoing nutrient monitoring for balanced plant growth and improved yield`,
    icon: "🧪"
  },
  {
    title: "Why Choose Urvanidhi?",
    description: `• Experienced agronomists with in-depth local knowledge
• Sustainable and profitable farming techniques
• Innovative solutions with modern technology and data-driven insights
• Commitment to healthier crops and safer farming environments`,
    icon: "⭐"
  },
];

// ===================== COMPONENT =====================
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-emerald-50 via-green-50 to-lime-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
            <span className="text-green-800 font-semibold text-sm uppercase tracking-wide">
              Our Solutions
            </span>
          </div>
          <h2 className="text-5xl font-extrabold text-green-900 tracking-tight mb-4">
            Products & Services
          </h2>
          <p className="mt-3 text-green-700 max-w-3xl mx-auto text-xl">
            Scientifically formulated, farmer-tested agricultural solutions for Karnataka&rsquo;s key crops
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {products.map((p, i) => (
            <article
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-green-100"
              onClick={() => setSelectedProduct(p)}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${p.color}`} />
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    {p.emoji}
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-green-900 mb-2 leading-tight group-hover:text-green-700 transition-colors">
                  {p.title.split('—')[0]}
                </h3>
                <p className="text-sm text-green-600 font-medium mb-3">
                  {p.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-6 pt-4 border-t border-green-100">
                  <button 
                    className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </article>
          ))}
        </div>

        {/* SERVICES SECTION */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 p-12 shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-green-100 font-semibold text-sm uppercase tracking-wide">
                  Farm Management
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                Urvanidhi Expert Services
              </h3>
              <p className="text-green-100 text-lg font-medium max-w-2xl mx-auto">
                Precision support, premium expertise — your partner in sustainable farming success
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {services.slice(0, 3).map((s, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:border-white/40"
                >
                  {/* Icon Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {s.icon}
                  </div>
                  
                  <h4 className="font-bold text-white text-xl mb-3 group-hover:text-green-100 transition-colors pl-8">
                    {s.title}
                  </h4>
                  <p className="text-sm text-green-50/90 whitespace-pre-line leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Choose Section */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-3xl shadow-xl">
                  {services[3].icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-2xl md:text-3xl mb-4">
                    {services[3].title}
                  </h4>
                  <p className="text-green-50/90 text-base whitespace-pre-line leading-relaxed">
                    {services[3].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
                Grow smarter. Protect better. Harvest more.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-green-900 font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
              >
                Partner With Us Today
                <span className="text-2xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedProduct.color} p-8 relative`}>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all text-2xl font-bold"
              >
                ×
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl">
                  {selectedProduct.emoji}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {selectedProduct.title.split('—')[0]}
                  </h3>
                  <p className="text-white/90 font-medium">{selectedProduct.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Product Image */}
              <div className="mb-6 rounded-2xl overflow-hidden bg-gray-50">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title}
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-full text-sm">
                  {selectedProduct.tag}
                </span>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>

              <h4 className="text-2xl font-bold text-green-900 mb-4">Key Benefits</h4>
              <ul className="space-y-3 mb-8">
                {selectedProduct.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <a
                  href="#contact"
                  className={`flex-1 py-4 px-6 bg-gradient-to-r ${selectedProduct.color} text-white font-bold rounded-xl hover:shadow-lg transition-all text-center`}
                  onClick={() => setSelectedProduct(null)}
                >
                  Contact Us
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Products;