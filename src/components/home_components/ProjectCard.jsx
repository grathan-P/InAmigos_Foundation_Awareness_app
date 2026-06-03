import React from 'react';
import {Link} from "react-router-dom";
import sevaImg from "../../assets/home_img/projects/seva_img.jpeg";
import bachpanshalaImg from "../../assets/home_img/projects/bachpanshala.jpeg";
import jeevImg from "../../assets/home_img/projects/jeev.jpeg";
import udaanImg from "../../assets/home_img/projects/udaan.jpeg";
import prakritiImg from "../../assets/home_img/projects/prakriti.jpeg";
import vikasImg from "../../assets/home_img/projects/vikas.jpeg";

const ProjectCard = () => {
  const projects = [
    {
      name: "Seva",
      description: "Providing food, clothes, and essentials to those in need.",
      bgImage: sevaImg,
      iconColor: "text-orange-600 bg-orange-50",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3zm3 5H9a2 2 0 0 0-2 2v2h10V9a2 2 0 0 0-2-2zm2 5H7v5a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-5z"/>
        </svg>
      )
    },
    {
      name: "Bachpanshala",
      description: "Providing education and care to underprivileged children.",
      bgImage: bachpanshalaImg,
      iconColor: "text-red-600 bg-red-50",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: "Jeev",
      description: "Supporting, rescuing, and caring for animals.",
      bgImage: jeevImg, 
      iconColor: "text-amber-700 bg-amber-50",
      _icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="4.5" cy="9.5" r="2.5" /><circle cx="9" cy="5.5" r="2.5" /><circle cx="15" cy="5.5" r="2.5" /><circle cx="19.5" cy="9.5" r="2.5" /><path d="M12 14c-2.33 0-4.32.93-5.63 2.41C6 17.15 6 18.06 6.5 18.73c.53.72 1.54.81 2.2.33.68-.49 1.48-.76 2.3-.76s1.62.27 2.3.76c.66.48 1.67.39 2.2-.33.5-.67.5-1.58.13-2.32C16.32 14.93 14.33 14 12 14z" />
          </svg>
      ),
      get icon() {
          return this._icon;
      },
      set icon(value) {
          this._icon = value;
      },
    },
    {
      name: "Udaan",
      description: "Empowering women with skills and opportunities.",
      bgImage: udaanImg,
      iconColor: "text-purple-600 bg-purple-50",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      name: "Prakriti",
      description: "Protecting environment through clean-up drives and plantation.",
      bgImage: prakritiImg,
      iconColor: "text-green-600 bg-green-50",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C14 8 11.5 10 11 13c-.5-3-3-5-6-5-3.5 0-6 2.5-6 6 0 4.5 4.5 9 10 10 5.5-5 10-9.5 10-10 0-3.5-2.5-6-6-6zm-6 11c-3.33-2.67-5-5-5-6.5 0-1.38 1.12-2.5 2.5-2.5 1.5 0 2.5 1.5 2.5 3h1c0-1.5 1-3 2.5-3 1.38 0 2.5 1.12 2.5 2.5 0 1.5-1.67 3.83-5 6.5z"/>
        </svg>
      )
    },
    {
      name: "Vikas",
      description: "Helping youth grow through internships and skill-building.",
      bgImage: vikasImg,
      iconColor: "text-blue-600 bg-blue-50",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-3.34-8-3.34z"/>
        </svg>
      )
    }
  ];

  const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white -mt-16 py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <span className="text-red-600 text-sm font-bold uppercase tracking-wider block mb-2">
              Our Initiatives
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Projects
            </h2>
          </div>
          
          <div>
            <Link
              to="/projects"
              onClick={handlePageChange}
              className="inline-flex items-center gap-2 border border-red-600 text-red-600 hover:bg-red-50 font-bold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm tracking-wide"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col overflow-hidden text-center h-full group"
            >
              {/* Card Image Area */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100 shrink-0">
                <img 
                  src={project.bgImage} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlapping Floating Icon Wrapper */}
                <div className="absolute top-0 left-0 z-10">
  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md border-2 border-white ${project.iconColor}`}>
    {project.icon}
  </div>
</div>
              </div>

              {/* Card Content Area */}
              <div className="pt-10 pb-6 px-4 grow flex flex-col justify-start">
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectCard;