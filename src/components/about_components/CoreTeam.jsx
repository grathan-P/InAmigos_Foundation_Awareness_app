import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img1 from "../../assets/aboutus_img/core_team/Govind_Shukla.jpeg"
import Img2 from "../../assets/aboutus_img/core_team/Sagarika_jaiswal.jpeg"

import govindImg from "../../assets/aboutus_img/core_team/Govind_Shukla.jpeg"; 
import ramanImg from "../../assets/aboutus_img/core_team/Raman_Swarnakar.jpeg";
import iniyaImg from "../../assets/aboutus_img/core_team/Iniya_Radhakrishnan.jpeg";
import khushImg from "../../assets/aboutus_img/core_team/Khush_Gupta.jpeg";
import akashImg from "../../assets/aboutus_img/core_team/Akash.jpeg";
import anushaImg from "../../assets/aboutus_img/core_team/Anusha.jpeg";
import faizKhanImg from "../../assets/aboutus_img/core_team/Faiz_Khan.jpeg";
import madhusoodanImg from "../../assets/aboutus_img/core_team/Madhusoodan_M.jpeg";
import manaviImg from "../../assets/aboutus_img/core_team/Manavi_jaiswal.jpeg";
import manemImg from "../../assets/aboutus_img/core_team/Manem_Padmasri.jpeg";
import shiwaniImg from "../../assets/aboutus_img/core_team/Shiwani.jpeg";
import shaikShahiraImg from "../../assets/aboutus_img/core_team/Shaik_Shahira_Bhanu.jpeg";
import vigneshImg from "../../assets/aboutus_img/core_team/Vignesh.jpeg";
import ramanSImg from "../../assets/aboutus_img/core_team/Raman_Swarnakar.jpeg";
import sagarikaImg from "../../assets/aboutus_img/core_team/Sagarika_jaiswal.jpeg";

export default function CoreTeam() {
  // State to handle floating panel visibility
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Explicit array mapping exactly to the structural layout of image_b62c7b.jpg
  const teamMembers = [
    {
      name: "Govind Shukla",
      role: "Founder & CEO",
      image: govindImg
    },
    {
      name: "Raman Swarnakar",
      role: "Chief Operating Officer",
      image: ramanImg
    },
    {
      name: "Iniya Radhakrishnan",
      role: "Head of Internship Dept.",
      image: iniyaImg
    },
    {
      name: "Khush Gupta",
      role: "Deputy Head (Core Member)",
      image: khushImg
    }
  ];

  // 15 total members (including the core 4 + 11 placeholders) structured to show 3 per row on desktop
  const allVolunteers = [
    { name: "Govind Shukla", role: "Founder & CEO", image: govindImg },
    { name: "Raman Swarnakar", role: "Chief Operating Officer", image: ramanImg },
    { name: "Iniya Radhakrishnan", role: "Head of Internship Dept.", image: iniyaImg },
    { name: "Khush Gupta", role: "Deputy Head (Core Member)", image: khushImg },
    { name: "Akash", role: "Volunteer Associate", image: akashImg },
    { name: "Anusha", role: "Junior core member", image: anushaImg },
    { name: "Faiz Khan", role: "Volunteer Supervisor Uttar pradesh", image: faizKhanImg },
    { name: "Madhusoodan M", role: "CSR lead", image: madhusoodanImg },
    { name: "Manavi Jaiswal", role: "Junior Volunteer Associate", image: manaviImg },
    { name: "Manem Padmasri", role: "JuniorCore-member", image: manemImg },
    { name: "Sagarika Jaiswal", role: "Head of core member", image: sagarikaImg },
    { name: "Raman Swarnakar", role: "Chief Operating Officer", image: ramanSImg },
    { name: "Shiwani", role: "Team leader of core member", image: shiwaniImg },
    { name: "Shaik Shahira Bhanu", role: "Senior Core-member", image: shaikShahiraImg },
    { name: "Vignesh", role: "Junior Core-member", image: vigneshImg },
  ];

  return (
    <section className="w-full bg-white py-14 px-6 sm:px-8 lg:px-12 font-sans select-none">
      <div className="max-w-7xl mx-auto -mt-6">
        
        {/* Section Heading with Red Left-Aligned Accent Bar */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            Our Core Team
          </h2>
          <div className="w-10 h-1 bg-red-600 rounded-full"></div>
        </div>

        {/* Core Layout Wrap: Flex grid with cards and standalone trailing action link */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-4">
          
          {/* Team Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 grow max-w-5xl">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 group"
              >
                {/* Round Profile Picture Wrapper */}
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border border-gray-100 shrink-0 bg-gray-50">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Typography Information Block */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-[15px] font-bold text-red-600 tracking-tight leading-snug mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-gray-900 text-xs font-semibold tracking-wide leading-tight">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Navigation Target Button Element */}
          <div className="shrink-0 pt-4 lg:pt-0">
            <button
              onClick={() => setIsPanelOpen(true)}
              className="inline-flex items-center gap-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-6 py-2.5 rounded-md transition duration-200 text-sm tracking-wide shadow-sm cursor-pointer"
            >
              Meet Our Team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>

      </div>

      {/* Floating Panel Backdrop Overlay Centered */}
      {isPanelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm transition-opacity duration-300">
          
          {/* Invisible click target behind panel to exit out when clicking outside */}
          <div className="absolute inset-0" onClick={() => setIsPanelOpen(false)} />

          {/* Center Floating Panel Canvas */}
          <div className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col transform transition-all duration-300 animate-in fade-in zoom-in-95">
            
            {/* Panel Top Header Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
              <div className="flex flex-col">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Core Members
                </h2>
                <div className="w-8 h-1 bg-red-600 rounded-full mt-1.5"></div>
              </div>
              <button 
                onClick={() => setIsPanelOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition duration-200"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Panel Grid Workspace */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              {/* Responsive layout: 1 column on mobile, 2 columns on tablet, exactly 3 columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {allVolunteers.map((volunteer, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    {/* Circle Image Frame */}
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-md border border-gray-100 shrink-0 bg-gray-100 flex items-center justify-center">
                      {volunteer.image ? (
                        <img 
                          src={volunteer.image} 
                          alt={volunteer.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      ) : (
                        /* Fallback graphic placeholder for empty image profiles */
                        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>

                    {/* Metadata Content Block */}
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[14px] font-bold text-red-600 tracking-tight leading-snug mb-0.5">
                        {volunteer.name}
                      </h4>
                      <p className="text-gray-900 text-xs font-semibold tracking-wide leading-tight">
                        {volunteer.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}