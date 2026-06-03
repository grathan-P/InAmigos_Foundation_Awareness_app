import React from 'react';
import shareProject from "../../utils/shareProject";
import { Link, useLocation } from "react-router-dom";

export default function SevaComponent({ isOpen, onClose, sevaCover }) {
  const location = useLocation();
  
    // Helper function to scroll smoothly to the top of the page when changing routes
    const handlePageChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    if (!isOpen) return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="relative w-full max-w-255 bg-white rounded-[28px] shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Row Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side Main Hero Feature Image Media Wrapper (Columns 5) */}
          <div className="lg:col-span-5 w-full aspect-4/3 lg:h-85 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
            <img 
              src="../../src/assets/project_img/v.png" 
              alt="Vikas Impact Initiative" 
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1504805572947-34fac43a4e68?q=80&w=600";
              }}
            />
          </div>

          {/* Right Side Editorial Descriptive Frame (Columns 7) */}
          <div className="lg:col-span-7 flex flex-col justify-start relative pr-8">
            
            {/* Absolute Floating Close Cross Action Trigger */}
            <button 
              onClick={onClose}
              className="absolute -top-2 -right-2 w-10 h-10 bg-gray-50 border border-gray-100 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-800 transition-colors duration-200 cursor-pointer shadow-xs z-30"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Food & Nutrition Category Tag Flag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50/70 border border-red-100 rounded-full text-[11px] font-bold text-red-600 tracking-wide w-fit mb-3">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Skill Development & Employability
            </div>

            {/* Headings Structure */}
            <h2 className="text-3xl font-black text-gray-950 tracking-tight leading-none mb-1.5">
              Vikas
            </h2>
            <h4 className="text-red-600 font-extrabold text-[13px] tracking-wide mb-4">
              Transforming Careers, One Opportunity At A Time
            </h4>

            {/* Core Introduction Copy text block */}
            <p className="text-gray-600 text-[12px] font-semibold leading-relaxed tracking-normal max-w-xl mb-6">
              Project Vikas enhances employability through internships, skill development programs, professional training, and career-building opportunities.
            </p>

            {/* Dynamic Inline Numerical Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 w-full border-t border-dashed border-gray-100">
              
              {/* Stat Item 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100/50">
                  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-black text-gray-950 tracking-tight leading-none">30,000+</span>
                  <span className="text-[9.5px] font-bold text-gray-400 tracking-tight mt-1">Interns Trained</span>
                </div>
              </div>

              {/* Stat Item 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100/50">
                  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-black text-gray-950 tracking-tight leading-none">300+</span>
                  <span className="text-[9.5px] font-bold text-gray-400 tracking-tight mt-1">Mentors</span>
                </div>
              </div>

              {/* Stat Item 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100/50">
                  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-black text-gray-950 tracking-tight leading-none">20+</span>
                  <span className="text-[9.5px] font-bold text-gray-400 tracking-tight mt-1">Domains Covered</span>
                </div>
              </div>

              {/* Stat Item 4 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100/50">
                  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-black text-gray-950 tracking-tight leading-none">5+</span>
                  <span className="text-[9.5px] font-bold text-gray-400 tracking-tight mt-1">Years of Impact</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Middle Row Layout Grid Split Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-2">
          
          {/* Left Side Content Column: Info & Operational Checkmarks */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-2.5">
              <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <h5 className="text-[14px] font-black text-gray-950 tracking-tight">About the Project</h5>
            </div>
            <p className="text-gray-500 text-[11.5px] font-semibold leading-relaxed tracking-normal mb-5">
              Vikas provides hands-on learning experiences across domains including HR, digital marketing, finance, research, operations, content writing, and social work.
            </p>

            <h5 className="text-[13px] font-black text-gray-950 tracking-tight mb-3">What We Provide</h5>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2.5 text-[11.5px] font-bold text-gray-600 tracking-normal">
                <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Internship Programs
              </li>
              <li className="flex items-center gap-2.5 text-[11.5px] font-bold text-gray-600 tracking-normal">
                <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Professional Skill Training
              </li>
              <li className="flex items-center gap-2.5 text-[11.5px] font-bold text-gray-600 tracking-normal">
                <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Career Development
              </li>
              <li className="flex items-center gap-2.5 text-[11.5px] font-bold text-gray-600 tracking-normal">
                <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Industry Exposure
              </li>
            </ul>
          </div>

          {/* Right Side Card: Integrated Gallery Grid Wrapper */}
          <div className="bg-[#FDF2F2]/40 border border-red-50/50 rounded-2xl p-5 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <h5 className="text-[14px] font-black text-gray-950 tracking-tight">Impact</h5>
              </div>
              <p className="text-gray-500 text-[11.5px] font-semibold leading-relaxed tracking-normal">
                More than 30,000 interns have been trained through Project Vikas, helping young people develop practical workplace skills and improve employability.
              </p>
            </div>

            {/* Asymmetric Gallery Thumbnails Container */}
            <div className="grid grid-cols-4 gap-2 w-full mt-1">
              {[
                "../../src/assets/project_img/v1.png",
                "../../src/assets/project_img/v2.png",
                "../../src/assets/project_img/v3.png",
                "../../src/assets/project_img/v4.png"
              ].map((imgUrl, i) => (
                <div key={i} className="aspect-square w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200/40 shadow-xs">
                  <img 
                    src={imgUrl} 
                    alt="Community activity layout snap" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Row Structural Action Footer */}
        <div className="w-full border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-5 mt-2">
          
          <div className="flex flex-col gap-1 text-center sm:text-left max-w-md">
            <p className="text-[#DC2626] font-bold text-[12px] italic leading-normal tracking-wide flex items-start gap-1 justify-center sm:justify-start">
              <span className="text-base font-black not-italic leading-none">“</span>
              Opportunities don't happen. You create them.
              <span className="text-base font-black not-italic leading-none">”</span>
            </p>
            <span className="text-gray-400 text-[10px] font-bold tracking-wider sm:pl-3">
              — InAmigos Foundation's Commitment to Empowering Youth Careers
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button className="flex-1 sm:flex-none border border-gray-300 hover:bg-gray-50 text-gray-800 font-extrabold text-[11.5px] tracking-wide px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l4.228-2.114M8.684 13.258l4.228 2.114M6 13a2 2 0 110-4 2 2 0 010 4zm10.5 4.5a2 2 0 110-4 2 2 0 010 4zm0-9a2 2 0 110-4 2 2 0 010 4z" /></svg>
              Share Project
            </button>

            <button className="flex-1 sm:flex-none bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-[11.5px] tracking-wide px-6 py-2.5 rounded-xl flex items-center justify-center gap-2.5 transition-colors duration-150 cursor-pointer shadow-sm shadow-red-600/10">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <Link
            to="/volunteer"
            onClick={handlePageChange}
          >
            Join This Mission
          </Link>
          </button>
          </div>

        </div>

      </div>
    </div>
  );
}