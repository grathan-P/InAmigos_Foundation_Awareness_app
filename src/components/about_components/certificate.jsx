import React from 'react';
import { FiExternalLink, FiDownload } from 'react-icons/fi';
import { ShieldCheckIcon } from '@heroicons/react/24/outline'; 
import { Link } from 'react-router-dom';

import cert1 from "../../assets/aboutus_img/certificates/certificate1.jpeg"; 
import cert2 from "../../assets/aboutus_img/certificates/certificate2.jpeg";
import cert3 from "../../assets/aboutus_img/certificates/certificate3.jpeg";
import cert4 from "../../assets/aboutus_img/certificates/certificate4.jpeg";
import cert5 from "../../assets/aboutus_img/certificates/certificate5.jpeg";

export default function Certificates() {
  
    const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const certificatesData = [
    {
      id: 1,
      title: "Certificate of Incorporation",
      subtitle: "Officially registered under the Ministry of Corporate Affairs, Government of India.",
      img: cert1,
    },
    {
      id: 2,
      title: "ISO 9001:2015 Certification",
      subtitle: "Certified for quality management and operational excellence.",
      img: cert2,
    },
    {
      id: 3,
      title: "NGO DARPAN Registration",
      subtitle: "Registered under NITI Aayog for transparency and accountability.",
      img: cert3,
    },
    {
      id: 4,
      title: "CSR-1 Registration",
      subtitle: "Authorized to undertake Corporate Social Responsibility activities.",
      img: cert4,
    },
    {
      id: 5,
      title: "GST Registration Certificate",
      subtitle: "Official GST registration issued by the Government of India.",
      img: cert5,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-12 font-sans select-none overflow-hidden">
      <div className="max-w-7xl mx-auto -mt-16">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
            <span className="text-red-600 font-extrabold text-xs tracking-widest uppercase">
              OUR CERTIFICATIONS
            </span>
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Our Licenses & Certifications
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
            We are registered and certified under various government and regulatory authorities for transparency, trust and accountability.
          </p>
        </div>

        {/* ================= HORIZONTAL SCROLL CARDS ROW ================= */}
        {/* 
          - 'flex overflow-x-auto' enables the horizontal layout and scroll native tracks.
          - 'pb-5' ensures space so the scrollbar doesn't clip card shadows.
          - custom scrollbar rules added via tailwind utility configuration or clean styles.
        */}
        <div className="w-full flex overflow-x-auto gap-5 pb-6 pt-2 scrollbar-thin scrollbar-thumb-gray-200 scroll-smooth snap-x snap-mandatory">
          {certificatesData.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col justify-between w-67.5 sm:w-72.5 shrink-0 snap-start"
            >
              <div>
                {/* Scaled down internal frame height for compact styling ('h-36') */}
                <div className="w-full h-36 rounded-lg overflow-hidden border border-gray-100 bg-slate-50 mb-4 relative group">
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition duration-300"
                  />
                </div>
                {/* Compressed text blocks */}
                <div className="text-center mb-4">
                  <h3 className="text-sm font-black text-gray-900 tracking-tight mb-0.5">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] font-semibold tracking-wide truncate px-1">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Action Button */}
              <a 
                href={cert.img} 
                target="_blank" 
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 border border-red-100 text-red-600 hover:bg-red-50 font-bold py-2 rounded-lg transition duration-200 text-[11px] tracking-wider"
              >
                <FiExternalLink className="stroke-[2.5]" />
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM BAR: ZIP ARCHIVE CTA ================= */}
        <div className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-3">
            <div className="text-red-600 bg-red-50 p-2.5 rounded-lg shrink-0">
              <ShieldCheckIcon className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="text-sm font-black text-gray-900 tracking-tight">
                Committed to Transparency & Accountability
              </h4>
              <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-2xl">
                These certifications reflect our continuous commitment to operate with integrity, transparency and create lasting impact in the communities we serve.
              </p>
            </div>
          </div>
          
          <Link 
            to="/volunteer#joinus" 
            onClick={handlePageChange}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-md text-base tracking-wide"
         >
           Join Us
         </Link>
        </div>

      </div>
    </section>
  );
}