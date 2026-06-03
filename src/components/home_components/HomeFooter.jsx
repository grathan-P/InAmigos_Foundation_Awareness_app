import React from 'react';
import { Link, useLocation } from "react-router-dom";
import footerImg from "../../assets/home_img/footer_img.png";
import logoPng from '../../assets/inamigos_logo_with_bg.jpeg';
import Footer from "../Footer.jsx";

const HomeFooter = () => {
  const location = useLocation();

  // Helper function to scroll smoothly to the top of the page when changing routes
  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans text-white">
      
      {/* 1. Top Section: Quote Banner (Black with Grayscale Kids Image) */}
      <div 
        className="relative bg-zinc-950 py-12 px-6 sm:px-8 lg:px-12 border-b border-zinc-800 bg-cover bg-right sm:bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(9, 9, 11, 0.95) 30%, rgba(9, 9, 11, 0.4) 100%), url(${footerImg})` 
        }}
      >
        <div className="max-w-7xl mx-auto flex items-start gap-4">
          <span className="text-red-600 text-6xl font-serif font-black leading-none select-none">
            “
          </span>
          <div className="flex flex-col mt-2">
            <p className="text-xl sm:text-2xl font-semibold tracking-wide text-gray-100 max-w-xl leading-snug">
              Alone we can do so little; <br />
              together we can do so much. 
            </p>
            
            <span className="text-red-500 font-medium text-sm mt-2 tracking-wider">
              — Helen Keller
            </span>
          </div>
          <span className="text-red-600 text-6xl font-serif font-black leading-none select-none">
            ”
          </span>
        </div>
      </div>

      {/* 2. Middle Section: Red Volunteer CTA Banner */}
      <div className="bg-red-600 py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Be The Reason Someone Smiles Today!
            </h3>
            <p className="text-red-100 text-sm sm:text-base font-medium tracking-wide">
              Join us in our mission to create lasting change in society.
            </p>
          </div>
          <Link
            to="/volunteer"
            onClick={handlePageChange}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-red-600 font-bold px-6 py-3 rounded-lg shadow-md transition duration-200 text-base shrink-0"
          >
            Become a Volunteer
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <Footer/>

    </footer>
  );
};

export default HomeFooter;