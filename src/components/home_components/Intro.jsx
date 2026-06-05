import React from 'react';
import Img from "../../assets/home_img/whoweare_img.jpg";
import {Link} from "react-router-dom";

const WhoWeAre = () => {
  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const certifications = [
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Government",
      subtitle: "Licensed"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "80G & 12A",
      subtitle: "Certified"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "NGO DARPAN",
      subtitle: "Registered"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "ISO 9001:2015",
      subtitle: "Certified"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-[93%] rounded-2xl bg-white mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid  grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center mt-12">
            <span className="text-red-600 text-sm font-bold uppercase tracking-wider mb-2">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              InAmigos Foundation is a registered non-profit organization working towards social 
              upliftment through six impactful initiatives. We believe in uniting minds for a 
              change and creating a sustainable impact.
            </p>

            {/* Certifications Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {certifications.map((item, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="mb-3 p-1">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-gray-900 block leading-tight">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-500 block">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-start">
              <Link to="/about" onClick={handlePageChange}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-base tracking-wide"
              >
                Know More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Image & Floating Badge */}
          <div className="lg:col-span-6 relative lg:mt-10">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src={Img} 
                alt="InAmigos Foundation team and impact" 
                className="w-full h-auto object-cover min-h-80 lg:min-h-100"
              />

              {/* Floating Badge in the top left corner of the image container */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white bg-opacity-95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-3">
                {/* Heart / Spark SVG Icon */}
                <div className="shrink-0 bg-red-50 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-red-600 tracking-tight leading-none">
                    1 Lakh+
                  </span>
                  <span className="text-[11px] font-bold text-gray-500 tracking-wide mt-0.5 whitespace-nowrap">
                    Interns Onboarded
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;