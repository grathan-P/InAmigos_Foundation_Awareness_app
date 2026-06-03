import React from 'react';
import { Link } from 'react-router-dom';
import knowmore from "../../assets/aboutus_img/knowmore.jpeg";
import { 
  FaShieldAlt, 
  FaCheckCircle, 
  FaRegBuilding, 
  FaGlobe, 
  FaAward, 
  FaRegRegistered, 
  FaStar 
} from 'react-icons/fa';

export default function KnowMore() {
  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-8 lg:px-12 font-sans select-none">
      <div className="max-w-7xl mx-auto -mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ================= LEFT SIDE: OUR JOURNEY ================= */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Editorial Content Block */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Our Journey
            </h2>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full"></div>
            
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-5">
              InAmigos Foundation was founded on 23rd September 2020 in Bilaspur, Chhattisgarh with a vision to bring positive change in society.
            </p>
            
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-8">
              From the beginning, we have worked passionately in the fields of education, women empowerment, animal welfare, environment protection, community service and youth development.
            </p>

            <div>
              <Link
                to="/projects"
                onClick={handlePageChange}
                className="inline-flex items-center gap-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-6 py-2.5 rounded-md transition duration-200 text-sm tracking-wide"
              >
                Our Impact Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Group Photo Block with Rounded Masking */}
          <div className="md:col-span-5 h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <img 
              src={knowmore} 
              alt="InAmigos Foundation Team holding banner" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* ================= RIGHT SIDE: WHY TRUST US? ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Why Trust Us?
          </h2>
          <div className="w-10 h-1 bg-red-600 mb-6 rounded-full"></div>

          {/* Grid Layout containing the Trust Certificates Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4">
            
            {/* Badge 1: Central Govt License */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-start gap-3">
              <div className="text-red-600 bg-red-50/50 p-2 rounded-lg">
                <FaShieldAlt size={22} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-black text-gray-900 tracking-tight leading-none">Licensed by</span>
                <span className="text-[11px] font-medium text-gray-500 leading-tight">Central Government</span>
              </div>
            </div>

            {/* Badge 2: 80G & 12A Status */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-start gap-3">
              <div className="text-red-600 bg-red-50/50 p-2 rounded-lg">
                <FaCheckCircle size={22} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-black text-gray-900 tracking-tight leading-none">80G & 12A</span>
                <span className="text-[11px] font-medium text-gray-500 leading-tight">Certified</span>
              </div>
            </div>

            {/* Badge 3: NGO Darpan */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-start gap-3">
              <div className="text-red-600 bg-red-50/50 p-2 rounded-lg">
                <FaRegBuilding size={22} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-black text-gray-900 tracking-tight leading-none">NGO DARPAN</span>
                <span className="text-[11px] font-medium text-gray-500 leading-tight">Registered (NITI Aayog)</span>
              </div>
            </div>

            {/* Badge 4: CSR-1 Status */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-start gap-3">
              <div className="text-red-600 bg-red-50/50 p-2 rounded-lg">
                <FaGlobe size={22} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-black text-gray-900 tracking-tight leading-none">CSR-1</span>
                <span className="text-[11px] font-medium text-gray-500 leading-tight">Registered</span>
              </div>
            </div>

            {/* Badge 5: ISO Standard */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-start gap-3">
              <div className="text-red-600 bg-red-50/50 p-2 rounded-lg">
                <FaAward size={22} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-black text-gray-900 tracking-tight leading-none">ISO 9001:2015</span>
                <span className="text-[11px] font-medium text-gray-500 leading-tight">Certified (IAF)</span>
              </div>
            </div>

            {/* Badge 6: Trademark */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-start gap-3">
              <div className="text-red-600 bg-red-50/50 p-2 rounded-lg">
                <FaRegRegistered size={22} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-black text-gray-900 tracking-tight leading-none">Trademarked</span>
                <span className="text-[11px] font-medium text-gray-500 leading-tight">Brand</span>
              </div>
            </div>

          </div>

          {/* Bottom Internshala Partnership Ribbon Bar */}
          <div className="bg-gray-50/80 rounded-xl border border-gray-100 p-4 flex items-center gap-4">
            <div className="text-red-600 shrink-0">
              <FaStar size={24} className="fill-current" />
            </div>
            <p className="text-gray-800 text-xs sm:text-sm font-semibold tracking-wide leading-relaxed">
              Proud partner of Internshala for over <span className="text-red-600 font-extrabold">5+ years</span> and ranked among the <span className="text-gray-900 font-extrabold">TOP Employers</span> on Internshala.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}