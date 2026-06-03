import React from 'react';
import { Link, useLocation } from "react-router-dom";
import footerImg from "../assets/home_img/footer_img.png";
import logoPng from '../assets/inamigos_logo_with_bg.jpeg';

const Footer = () => {
  const location = useLocation();

  // Helper function to scroll smoothly to the top of the page when changing routes
  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans text-white">
      
      {/* 3. Main Link Directories Section (Deep Dark Background) */}
      <div className="bg-zinc-900 pt-16 pb-12 px-6 sm:px-8 lg:px-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
          
          {/* Brand Presentation Block */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoPng}
                alt="InAmigos Foundation Logo" 
                className="w-auto h-9 object-contain shrink-0" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                  In<span className="text-red-500">Amigos</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.22em] text-gray-400 uppercase -mt-0.5">
                  Foundation
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Uniting minds for a change. Together, we can build a compassionate, empowered and sustainable world.
            </p>

            {/* Social Sharing Link Row */}
            <div className="flex items-center gap-3 mt-2">
              {(() => {
                const socialLinks = {
                  facebook: "https://www.facebook.com/share/1CeyCkB3uL/",
                  instagram: "https://instagram.com/inamigos?utm_medium=copy_link",
                  linkedin: "https://www.linkedin.com/company/inamigos-foundation",
                  twitter: "https://twitter.com/InamigosF?s=08",
                  youtube: "https://youtube.com/@inamigosfoundation?si=lcyRib3x-bScUF5M"
                };

                const socialIcons = {
                  facebook: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  ),
                  instagram: (
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                  linkedin: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ),
                  twitter: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                  youtube: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                };

                return Object.keys(socialIcons).map((platform) => (
                  <a 
                    key={platform} 
                    href={socialLinks[platform]}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 h-8 rounded-full bg-white hover:bg-red-500 text-zinc-900 hover:text-white flex items-center justify-center transition-colors duration-200 shadow-sm"
                  >
                    <span className="sr-only">{platform}</span>
                    {socialIcons[platform]}
                  </a>
                ));
              })()}
            </div>
          </div>

          {/* Directory Column 1: Quick Links (Updated to standard React Router Links) */}
          <div className="md:col-span-2 md:pl-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-400">
              <li><Link to="/" onClick={handlePageChange} className="hover:text-red-500 transition">Home</Link></li>
              <li><Link to="/about" onClick={handlePageChange} className="hover:text-red-500 transition">About Us</Link></li>
              <li><Link to="/projects" onClick={handlePageChange} className="hover:text-red-500 transition">Projects</Link></li>
              <li><Link to="/gallery" onClick={handlePageChange} className="hover:text-red-500 transition">Gallery</Link></li>
              <li><Link to="/volunteer" onClick={handlePageChange} className="hover:text-red-500 transition">Volunteer</Link></li>
              <li><Link to="/contact" onClick={handlePageChange} className="hover:text-red-500 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Directory Column 2: Our Projects */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Our Projects</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-400">
              <li><Link to="/projects#seva" className="hover:text-red-500 transition">Seva</Link></li>
              <li><Link to="/projects#bachpanshaala" className="hover:text-red-500 transition">Bachpanshala</Link></li>
              <li><Link to="/projects#jeev" className="hover:text-red-500 transition">Jeev</Link></li>
              <li><Link to="/projects#udaan" className="hover:text-red-500 transition">Udaan</Link></li>
              <li><Link to="/projects#prakriti" className="hover:text-red-500 transition">Prakriti</Link></li>
              <li><Link to="/projects#vikas" className="hover:text-red-500 transition">Vikas</Link></li>
            </ul>
          </div>

          {/* Directory Column 3: Contact Channels */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-1">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-400">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72.598.598 0 00.55.41h3.46a.6.6 0 00.55-.41 1 1 0 01.94-.72H19a2 2 0 012 2v3.28a1 1 0 01-.72.94l-.41.55a.6.6 0 00-.41.55v3.46c0 .18.07.35.19.47l.41.41a1 1 0 01.27.77V19a2 2 0 01-2 2h-1C10.06 21 3 13.94 3 6V5z" />
                </svg>
                <a href="tel:++91 62673 09902" className="hover:text-white transition">+91 62673 09902</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:inamigosfoundation@gmail.com" className="hover:text-white transition break-all">inamigosfoundation@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                </svg>
                <a href="https://www.inamigosfoundation.org.in" target="_blank" rel="noreferrer" className="hover:text-white transition break-all">www.inamigosfoundation.org.in</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ward No. 5, Gram Post, Sipat Ujwal Nagar,<br/>Bilaspur. Chhattisgarh. Pin-Code: 495555</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 4. Bottom Ribbon: Legal Accreditations & Copyright */}
      <div className="bg-zinc-950 py-5 px-6 sm:px-8 lg:px-12 text-xs font-semibold text-gray-500 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <span>
            © 2026 InAmigos Foundation. All Rights Reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 divide-x divide-zinc-800 text-gray-400">
            <span>Registered Non-Profit Organization</span>
            <span className="pl-4">CSR-1 Registered</span>
            <span className="pl-4">80G & 12A Certified</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;