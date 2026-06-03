import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import projectHeroBg from "../../assets/project_img/phero.jpeg";

function LocalAnimatedCounter({ target, duration = 1800, trigger, isLakh = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuad = progress * (2 - progress); // Smooth deceleration ramp
      
      setCount(Math.floor(easeOutQuad * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  if (isLakh && count >= 100000) {
    return <span>1 Lakh</span>;
  }

  return <span>{count.toLocaleString('en-IN')}</span>;
}

export default function ProjectHero() {
  // Intersection observer triggers animation when section rolls onto screen viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section 
      ref={ref}
      className="w-full bg-white min-h-125 lg:min-h-145 flex items-center relative overflow-hidden font-sans select-none mt-6"
    >
      {/* Structural Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center px-6 sm:px-8 lg:px-12 py-12 lg:py-0 z-10">
        
        {/* LEFT COLUMN: Editorial Text Framework */}
        <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-8 mb-8 lg:mb-0">
          <span className="text-red-600 font-extrabold text-xs tracking-wider uppercase mb-2">
            OUR PROJECTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.1] mb-4">
            Six Initiatives,<br />
            Countless <span className="text-red-600">Smiles</span>
          </h1>
          
          <div className="w-10 h-1 bg-red-600 rounded-full mb-6"></div>
          
          <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl mb-10">
            Our six impactful projects focus on key areas of social development. Each initiative is a step towards building a better, stronger and more compassionate society.
          </p>

          {/* DYNAMIC METRIC COUNTERS BAR */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pt-4 border-t border-gray-100">
            
            {/* Metric 1: Impactful Projects */}
            <div className="flex items-center gap-3">
              <div className="text-red-600 shrink-0">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 leading-none">
                  <LocalAnimatedCounter target={6} trigger={inView} />
                </span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1">
                  Impactful Projects
                </span>
              </div>
            </div>

            {/* Divider Line on Desktop Layouts */}
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

            {/* Metric 2: Interns Onboarded (Counts to 1 Lakh) */}
            <div className="flex items-center gap-3">
              <div className="text-red-600 shrink-0">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 1.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 leading-none">
                  <LocalAnimatedCounter target={100000} trigger={inView} isLakh={true} />+
                </span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1">
                  Interns Onboarded
                </span>
              </div>
            </div>

            {/* Divider Line on Desktop Layouts */}
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

            {/* Metric 3: Lives Touched */}
            <div className="flex items-center gap-3">
              <div className="text-red-600 shrink-0">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 leading-none">
                  <LocalAnimatedCounter target={1000000} trigger={inView}/>+
                </span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1">
                  Lives Touched
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Hidden on mobile, takes remaining grids on desktop */}
        <div className="hidden lg:block lg:col-span-6" />
      </div>

      {/* ================= HERO IMAGE BACKGROUND GRADIENT DISPLAY MASK ================= */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 pointer-events-none">
        {/* Soft fading white overlay to blend text into the photography canvas perfectly */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-transparent z-10" />
        <img 
          src={projectHeroBg} 
          alt="Children smiling at InAmigos foundation event" 
          className="w-full h-full object-cover object-center scale-x-[-1]" 
        />
      </div>
    </section>
  );
}