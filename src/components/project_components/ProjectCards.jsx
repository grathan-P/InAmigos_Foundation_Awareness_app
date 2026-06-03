import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Individual Standalone Panel Component Imports
import SevaComponent from "./SevaComponent";
import BachpanshalaComponent from "./BachpanshalaComponent";
import JeevComponent from "./JeevComponent";
import UdaanComponent from "./UdaanComponent";
import PrakritiComponent from "./PrakritiComponent";
import VikasComponent from "./VikasComponent";

// Media Assets
import sevaCover from "../../assets/project_img/seva2.png";
import bachpanCover from "../../assets/project_img/b.png";
import jeevCover from "../../assets/project_img/jeeva.png";
import udaanCover from "../../assets/project_img/udaan.png";
import prakritiCover from "../../assets/project_img/prakriti.png";
import vikasCover from "../../assets/project_img/v.png";

export default function ProjectCards() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("All Projects");

  // Track the ID of the project whose unique modal panel is currently active (null means closed)
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  useEffect(() => {
    const projectIds = new Set(projectsData.map((project) => project.id));
    const hash = location.hash.replace("#", "");

    if (!hash || !projectIds.has(hash)) {
      return;
    }

    const scrollToProjectCards = () => {
      const section = document.getElementById("projectcards");

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const openProjectModal = () => {
      setActiveProjectModal(hash);
    };

    const scrollFrameId = window.requestAnimationFrame(scrollToProjectCards);
    const openTimeoutId = window.setTimeout(openProjectModal, 300);

    return () => {
      window.cancelAnimationFrame(scrollFrameId);
      window.clearTimeout(openTimeoutId);
    };
  }, [location.hash]);

  const tabs = [
    {
      name: "All Projects",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      name: "Education",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      name: "Environment",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      name: "Animal Welfare",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: "Women Empowerment",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      name: "Community Service",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: "Skill Development",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const projectsData = [
    {
      id: "seva",
      title: "Seva",
      category: "Community Service",
      description: "Providing food, clothes, and essentials to those in need.",
      metric: "50,000+ Meals Distributed",
      img: sevaCover,
      badgeColor: "text-red-500 bg-red-50 border-red-100",
      btnColor: "text-red-600 hover:text-red-700",
    },
    {
      id: "bachpanshaala",
      title: "Bachpanshala",
      category: "Education",
      description: "Providing education and care to underprivileged children.",
      metric: "Educating Children in Rural Areas",
      img: bachpanCover,
      badgeColor: "text-purple-600 bg-purple-50 border-purple-100",
      btnColor: "text-purple-600 hover:text-purple-700",
    },
    {
      id: "jeev",
      title: "Jeev",
      category: "Animal Welfare",
      description: "Supporting and rescuing animals in need of care and protection.",
      metric: "Feeding 50+ Animals Daily",
      img: jeevCover,
      badgeColor: "text-amber-600 bg-amber-50 border-amber-100",
      btnColor: "text-amber-600 hover:text-amber-700",
    },
    {
      id: "udaan",
      title: "Udaan",
      category: "Women Empowerment",
      description: "Empowering women with skills, training and opportunities.",
      metric: "Empowered 900+ Girls",
      img: udaanCover,
      badgeColor: "text-pink-500 bg-pink-50 border-pink-100",
      btnColor: "text-pink-500 hover:text-pink-700",
    },
    {
      id: "prakriti",
      title: "Prakriti",
      category: "Environment",
      description: "Protecting the environment through clean-up drives and plantation.",
      metric: "20,000+ Trees Planted",
      img: prakritiCover,
      badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
      btnColor: "text-emerald-600 hover:text-emerald-700",
    },
    {
      id: "vikas",
      title: "Vikas",
      category: "Skill Development",
      description: "Helping youth grow through internships and skill-building.",
      metric: "1 Lakh+ Interns Onboarded",
      img: vikasCover,
      badgeColor: "text-blue-600 bg-blue-50 border-blue-100",
      btnColor: "text-blue-600 hover:text-blue-700",
    },
  ];

  const filteredProjects =
    activeTab === "All Projects"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <section id="projectcards" className="w-full bg-white py-12 px-4 sm:px-8 lg:px-12 font-sans select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= CATEGORY FILTER TABS CONTAINER ================= */}
        <div className="w-full flex overflow-x-auto gap-2.5 pb-4 mb-10 items-center border-b border-gray-100">
          {tabs.map((tab, idx) => {
            const isSelected = activeTab === tab.name;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(tab.name)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs tracking-wide border transition-all duration-150 whitespace-nowrap outline-none ${
                  isSelected
                    ? "bg-red-600 border-red-600 text-white shadow-sm shadow-red-600/10"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* ================= PROJECTS GRID CONTAINER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const dynamicTab = tabs.find((t) => t.name === project.category);

            return (
              <div
                key={project.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex overflow-hidden group min-h-52.5"
              >
                {/* Left Column Content Block (55% Width) */}
                <div className="w-[55%] p-5 flex flex-col justify-between">
                  <div>
                    {/* Title & Badge Layout */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-1.5 rounded-lg border ${project.badgeColor}`}>
                        {dynamicTab ? dynamicTab.icon : tabs[0].icon}
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight leading-none">
                        {project.title}
                      </h3>
                    </div>

                    {/* Operational Description */}
                    <p className="text-gray-500 text-[11px] sm:text-xs font-semibold leading-relaxed tracking-wide mb-3 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics Indicator & Action Footer */}
                  <div className="flex flex-col gap-3 border-t border-gray-50 pt-3">
                    <div className="flex items-center gap-2">
                      <div className={project.badgeColor.split(" ")[0]}>
                        {dynamicTab ? dynamicTab.icon : tabs[0].icon}
                      </div>
                      <span className="text-gray-900 text-[11px] sm:text-xs font-extrabold tracking-tight leading-tight">
                        {project.metric}
                      </span>
                    </div>

                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveProjectModal(project.id);
                      }}
                      className={`inline-flex items-center gap-1 text-xs font-extrabold tracking-wider transition-colors duration-200 ${project.btnColor}`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Column Media Block (45% Width) */}
                <div className="w-[45%] h-full relative overflow-hidden bg-gray-50 shrink-0">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1504805572947-34fac43a4e68?q=80&w=400";
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CONDITIONAL MODAL MOUNTING CORES ================= */}
      <SevaComponent
        isOpen={activeProjectModal === "seva"}
        onClose={() => setActiveProjectModal(null)}
        sevaCover={sevaCover}
      />

      <BachpanshalaComponent
        isOpen={activeProjectModal === "bachpanshaala"}
        onClose={() => setActiveProjectModal(null)}
        bachpanCover={bachpanCover}
      />

      <JeevComponent
        isOpen={activeProjectModal === "jeev"}
        onClose={() => setActiveProjectModal(null)}
        jeevCover={jeevCover}
      />

      <UdaanComponent
        isOpen={activeProjectModal === "udaan"}
        onClose={() => setActiveProjectModal(null)}
        udaanCover={udaanCover}
      />

      <PrakritiComponent
        isOpen={activeProjectModal === "prakriti"}
        onClose={() => setActiveProjectModal(null)}
        prakritiCover={prakritiCover}
      />

      <VikasComponent
        isOpen={activeProjectModal === "vikas"}
        onClose={() => setActiveProjectModal(null)}
        vikasCover={vikasCover}
      />
    </section>
  );
}