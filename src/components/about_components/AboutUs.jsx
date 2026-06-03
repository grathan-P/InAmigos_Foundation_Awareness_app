import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaGraduationCap, FaHandsHelping, FaRibbon } from "react-icons/fa";
import heroBgImg from "../../assets/aboutus_img/aboutus.jpeg";

// Reusable Counter Component for the statistical numbers
const AnimatedCounter = ({ target, duration = 2000, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return; // Wait until component is visible in viewport

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function to slow down towards the end (matches your hero component design)
      const easeOutQuad = progress * (2 - progress);
      setCount(Math.floor(easeOutQuad * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return <span>{count.toLocaleString()}</span>;
};

const AboutUs = () => {
  const statsRef = useRef(null);
  const [isAnimateTriggered, setIsAnimateTriggered] = useState(false);

  // Native scroll-based viewport detection logic
  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current || isAnimateTriggered) return;

      const rect = statsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Trigger animation when the top of the stats section rises past 85% viewport height
      if (rect.top <= windowHeight * 0.85) {
        setIsAnimateTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once initially just in case it is already visible on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAnimateTriggered]);

  return (
    <section className="w-full bg-white pt-16 font-sans relative overflow-hidden select-none">
      
      {/* 1. Main Content Layout: Headline & Text Left, Asymmetrical Image Right */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-4">
          <span className="text-red-600 font-bold text-xs tracking-wider uppercase mb-2">
            ABOUT US
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4 leading-[1.1]">
            Uniting Minds<br />For A Change
          </h2>
          <div className="w-12 h-1 bg-red-600 mb-6 rounded-full"></div>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium mb-8">
            InAmigos Foundation is a licensed non-profit organization working towards social upliftment through six impactful initiatives. We believe in uniting minds to create a compassionate, empowered and sustainable society.
          </p>

          
        </div>

        {/* Right Side: Exact Angled / Slanted Masked Image Background Container */}
        <div className="lg:col-span-7 h-72 sm:h-100 lg:h-115 w-full relative mt-6 lg:mt-0">
          <div 
            className="w-full h-full object-cover shadow-lg"
            style={{
              clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)',
             
              backgroundImage: `url(${heroBgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            role="img"
            aria-label="Children smiling with volunteer"
          />
        </div>
      </div>

      {/* 2. Floating Statistics Panel with your custom Animated Counter hooks */}
      <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20 -mt-8 lg:-mt-14 mb-16">
        <div className="bg-white rounded-2xl border border-gray-300 shadow-2xl shadow-gray-200/60 p-6 lg:py-8 lg:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-2 items-center text-center md:divide-x divide-gray-100">
          
          {/* Stat 1: Years of Service */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 border-r-2  border-gray-400">
            <div className="text-red-600 shrink-0 p-2 bg-gray- rounded-xl">
              <FaUsers size={28} className="fill-current" />
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left ">
              <span className="text-2xl lg:text-3xl font-black text-gray-900 leading-none flex items-center">
                <AnimatedCounter target={5} trigger={isAnimateTriggered} />+
              </span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1.5 leading-tight">
                Years of Service
              </span>
            </div>
          </div>

          {/* Stat 2: Interns Onboarded */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 border-r-2 border-gray-400">
  <div className="text-red-600 shrink-0 p-2 bg-gray-50 rounded-xl">
    <FaGraduationCap size={28} className="fill-current" />
  </div>
  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
    <span className="text-2xl lg:text-3xl font-black text-gray-900 leading-none flex items-center">
      {/* Target changed to 100,000 to count all the way up */}
      <AnimatedCounter target={100000} trigger={isAnimateTriggered} isLakh={true} />+
    </span>
    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1.5 leading-tight">
      Interns Onboarded
    </span>
  </div>
</div>

          {/* Stat 3: Top 5 NGO */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 col-span-1 sm:col-span-2 md:col-span-1 border-r-2  border-gray-400 pr-8">
            <div className="text-red-600 shrink-0 p-2 bg-gray-50 rounded-xl">
              <FaRibbon size={28} className="fill-current" />
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left ">
              <span className="text-2xl lg:text-3xl font-black text-gray-900 leading-none flex items-center">
                Top&nbsp;<AnimatedCounter target={5} duration={1000} trigger={isAnimateTriggered} />&nbsp;NGO
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1.5 leading-tight">
                Awarded by Mayor of Delhi (2025)
              </span>
            </div>
          </div>

          {/* Stat 4: Interns Permanently Onboarded */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 border-r-2  border-gray-400 pl-2 ">
            <div className="text-red-600 shrink-0 p-2 bg-gray-50 rounded-xl ">
              <FaUsers size={28} className="fill-current" />
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-2xl lg:text-3xl font-black text-gray-900 leading-none flex items-center">
                <AnimatedCounter target={250} trigger={isAnimateTriggered} />+
              </span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1.5 leading-tight">
                Interns Permanently Onboarded
              </span>
            </div>
          </div>

          {/* Stat 5: Impactful Projects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
            <div className="text-red-600 shrink-0 p-2 bg-gray-50 rounded-xl">
              <FaHandsHelping size={28} className="fill-current" />
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-2xl lg:text-3xl font-black text-gray-900 leading-none flex items-center">
                <AnimatedCounter target={6} trigger={isAnimateTriggered} />
              </span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1.5 leading-tight">
                Impactful Projects
              </span>
            </div>
          </div>

          

        </div>
      </div>

    </section>
  );
};

export default AboutUs;