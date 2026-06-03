import React from 'react';
import volunteerHeroBg from "../../assets/volunteer/herov.jpeg";

export default function VolunteerHero() {
  return (
    <section className="w-full bg-white min-h-125 lg:min-h-140 flex items-center relative overflow-hidden font-sans select-none">
      
      {/* Main Structural Layout Wrapper */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center px-6 sm:px-8 lg:px-12 py-16 lg:py-0 z-10">
        
        {/* LEFT PANEL: Copywriting, Tags & Action Buttons */}
        <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-12">
          
          {/* Label Sub-header */}
          <span className="text-red-600 font-extrabold text-xs tracking-wider uppercase mb-2">
            VOLUNTEER
          </span>
          
          {/* Main Contextual Header */}
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
            Be the Reason<br />
            Someone <span className="text-red-600">Smiles</span> Today!
          </h1>
          
          {/* Decorative Red Separator */}
          <div className="w-10 h-1 bg-red-600 rounded-full mb-6"></div>
          
          {/* Descriptive Context Block */}
          <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl mb-10">
            Join hands with InAmigos Foundation and be a part of a meaningful change in society. Your time, skills, and passion can create a lasting impact in someone's life.
          </p>

          {/* Call To Actions Callout Buttons Wrapper */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Action 1: Primary Red Submission Button */}
            <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-red-600/10 active:scale-[0.98]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 1.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              Become a Volunteer
            </button>

            {/* Action 2: Secondary Hollow Media Player Button */}
            <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-red-600/60 hover:border-red-600 font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98]">
              <svg className="w-4 h-4 text-red-600 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path fill="currentColor" d="M10 8.5v7l5-3.5-5-3.5z" stroke="none" />
              </svg>
              Watch Impact Video
            </button>

          </div>
        </div>

        {/* RIGHT PANEL: Clear spacing anchor layout framework */}
        <div className="hidden lg:block lg:col-span-6" />
      </div>

      {/* ================= HERO BACKDROP PHOTO IMAGE OVERLAY GRAPHICS ================= */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 pointer-events-none">
        {/* Horizontal linear alpha mask preventing image from clashing into typography headers */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 sm:via-white/80 lg:via-white/45 to-transparent z-10" />
        <img 
          src={volunteerHeroBg} 
          alt="InAmigos Team and children sharing smiles and high fives" 
          className="w-full h-full object-cover object-center"
        />
      </div>

    </section>
  );
}