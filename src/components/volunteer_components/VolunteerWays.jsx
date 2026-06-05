import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaGraduationCap, FaHandsHelping, FaRibbon } from "react-icons/fa";


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

export default function VolunteerWays() {

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

  // Configured data matrix explicitly capturing content from image_57aa66.jpg
  const waysData = [
    {
      title: "Community Service",
      description: "Help in our community initiatives like food drives, cloth distribution, and awareness campaigns.",
      bgCircle: "bg-red-50 text-red-500",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    {
      title: "Education & Teaching",
      description: "Teach underprivileged children and support education in rural communities.",
      bgCircle: "bg-purple-50 text-purple-600",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.18 11.53L12 15.25l6.82-3.72c.32-.17.65-.28.98-.32V19c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-7.8c.34.04.67.15.98.33z"/>
        </svg>
      )
    },
    {
      title: "Environment",
      description: "Join hands in tree plantation, clean-up drives, and environment conservation activities.",
      bgCircle: "bg-indigo-50 text-indigo-600",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    {
      title: "Animal Welfare",
      description: "Support animal rescue, feeding, and awareness programs for the voiceless creatures.",
      bgCircle: "bg-amber-50 text-amber-700",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
        </svg>
      )
    },
    {
      title: "Women Empowerment",
      description: "Help empower women through skill development, workshops, and awareness programs.",
      bgCircle: "bg-pink-50 text-pink-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="9" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v7M9 16h6" />
        </svg>
      )
    },
    {
      title: "Event & Campaigns",
      description: "Be a part of our events, campaigns and help in spreading awareness in society.",
      bgCircle: "bg-emerald-50 text-emerald-600",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7v-2h10v2zm0-3H7V9h10v2zm0-3H7V6h10v2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-14 px-6 sm:px-8 lg:px-12 font-sans select-none -mt-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ================= TITLE ACCENT HEADER ================= */}
        <div className="text-center mb-10 -mt-2">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Ways to <span className="text-red-600">Volunteer</span>
          </h2>
          <div className="w-10 h-1 bg-red-600 rounded-full mx-auto mt-2.5"></div>
        </div>

        {/* ================= CARD GRID TRACK ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 w-full mb-10">
          {waysData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group min-h-65"
            >
              {/* Colored Action Ring Badge */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 shrink-0 ${item.bgCircle}`}>
                {item.icon}
              </div>

              {/* Way Track Heading Title */}
              <h3 className="text-gray-900 font-black text-sm tracking-tight leading-tight mb-2.5 min-h-9 flex items-center justify-center">
                {item.title}
              </h3>

              {/* Way Track Operational Description */}
              <p className="text-gray-500 text-xs font-medium leading-relaxed tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= LOWER BANNER: METRICS FOOTER ================= */}
        <div ref={statsRef} className="max-w-[95%] mx-auto px-4 sm:px-8 lg:px-10 z-20 lg:-mt-14">
                <div className="bg-red-500 rounded-2xl border border-gray-300 shadow-2xl shadow-gray-200/60 p-6 lg:py-8 lg:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-2 items-center text-center md:divide-x divide-gray-100">
                  
                  {/* Stat 1: Years of Service */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 md:border-r-2  border-white">
                    <div className="text-white shrink-0 p-2  rounded-xl">
                      <FaUsers size={28} className="fill-current" />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left ">
                      <span className="text-xl lg:text-2xl font-black text-white leading-none flex items-center">
                        <AnimatedCounter target={5} trigger={isAnimateTriggered} />+
                      </span>
                      <span className="text-[11px] font-bold text-white uppercase tracking-wide mt-1.5 leading-tight">
                        Years of Service
                      </span>
                    </div>
                  </div>
        
                  {/* Stat 2: Interns Onboarded */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 md:border-r-2 border-white">
          <div className="text-white shrink-0 p-2  rounded-xl">
            <FaGraduationCap size={28} className="fill-current" />
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl lg:text-2xl font-black text-white leading-none flex items-center">
              {/* Target changed to 100,000 to count all the way up */}
              <AnimatedCounter target={100000} trigger={isAnimateTriggered} isLakh={true} />+
            </span>
            <span className="text-[11px] font-bold text-white uppercase tracking-wide mt-1.5 leading-tight">
              Interns Onboarded
            </span>
          </div>
        </div>
        
                  {/* Stat 3: Top 5 NGO */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 col-span-1 sm:col-span-2 md:col-span-1 md:border-r-2  borderwhite pr-8">
                    <div className="text-white shrink-0 p-2  rounded-xl">
                      <FaRibbon size={28} className="fill-current" />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left ">
                      <span className="text-xl lg:text-2xl font-black text-white leading-none flex items-center">
                        Top&nbsp;<AnimatedCounter target={5} duration={1000} trigger={isAnimateTriggered} />&nbsp;NGO
                      </span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide mt-1.5 leading-tight">
                        Awarded by Mayor of Delhi (2025)
                      </span>
                    </div>
                  </div>
        
                  {/* Stat 4: Interns Permanently Onboarded */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 md:border-r-2  border-white pl-2 ">
                    <div className="text-white shrink-0 p-2 rounded-xl ">
                      <FaUsers size={28} className="fill-current" />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-xl lg:text-2xl font-black text-white leading-none flex items-center">
                        <AnimatedCounter target={250} trigger={isAnimateTriggered} />+
                      </span>
                      <span className="text-[11px] font-bold text-white uppercase tracking-wide mt-1.5 leading-tight">
                        Interns Permanently Onboarded
                      </span>
                    </div>
                  </div>
        
                  {/* Stat 5: Impactful Projects */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
                    <div className="text-white shrink-0 p-2  rounded-xl">
                      <FaHandsHelping size={28} className="fill-current" />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-xl  font-black text-white leading-none flex items-center">
                        <AnimatedCounter target={6} trigger={isAnimateTriggered} />
                      </span>
                      <span className="text-[11px] font-bold text-white uppercase tracking-wide mt-1.5 leading-tight">
                        Impactful Projects
                      </span>
                    </div>
                  </div>
        
                  
        
                </div>
              </div>

        

      </div>
    </section>
  );
}

