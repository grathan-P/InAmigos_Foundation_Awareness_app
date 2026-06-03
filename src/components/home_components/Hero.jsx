import React, { useState, useEffect } from "react";
import { FaTree, FaBowlFood, FaUsers, FaPaw } from "react-icons/fa6";
import heroBgImg from "../../assets/home_img/hero_bg_img.jpg";
import {Link} from "react-router-dom";

// Reusable Counter Component for the statistical numbers
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function to slow down towards the end
      const easeOutQuad = progress * (2 - progress);
      
      setCount(Math.floor(easeOutQuad * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration]);

  // Format numbers with commas (e.g., 20000 -> 20,000)
  return <span>{count.toLocaleString()}</span>;
};

const HeroSection = () => {
  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { icon: <FaTree className="w-8 h-8 text-black" />, target: 20000, label: "Trees Planted" },
    { icon: <FaBowlFood className="w-8 h-8 text-black" />, target: 50000, label: "Meals Distributed" },
    { icon: <FaUsers className="w-8 h-8 text-black" />, target: 900, label: "Girls Empowered" },
    { icon: <FaPaw className="w-8 h-8 text-black" />, target: 50, label: "Animals Fed Daily" },
  ];

  return (
    <section className="relative w-full min-h-150 lg:h-[85vh] flex flex-col justify-between font-sans overflow-visible bg-zinc-900">
      <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroBgImg})` 
        }}
        />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-32 lg:pt-40 grow flex items-center">
        <div className="max-w-2xl text-white">
          
          {/* Headline Typography */}
          <h1 className="font-medium tracking-wide drop-shadow-sm mb-2">
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-serif italic text-slate-100 font-light tracking-widest leading-snug">
              Uniting Minds
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mt-1">
              For A Change
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 mt-6 leading-relaxed max-w-xl font-normal tracking-wide">
            InAmigos Foundation is committed to building a better society through education, empowerment, care, and sustainability.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link 
              to="/volunteer#joinus" 
              onClick={handlePageChange}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-md text-base tracking-wide"
            >
              Join Us
            </Link>
            <Link 
              to="/projects" 
              onClick={handlePageChange}
              className="border-2 border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-base tracking-wide"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Statistics Panel */}
      {/* <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform translate-y-1/2 mt-20 sm:mt-24 md:mt-28 lg:mt-24"> */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 transform translate-y-1/2 mt-20 sm:mt-24 md:mt-28 lg:mt-24 ">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-6 px-4 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 divide-gray-200 lg:divide-x">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-4 justify-start ${idx % 2 !== 0 ? 'pl-2 sm:pl-6' : 'lg:pl-6'}`}
            >
              {/* Icon Frame */}
              <div className="shrink-0 p-2 bg-gray-50 rounded-xl">
                {stat.icon}
              </div>

              {/* Counter Text Data */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-red-600 tracking-tight flex items-center">
                  <AnimatedCounter target={stat.target} />
                  <span>+</span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;