import React, { useState } from "react";
import { Link } from "react-router-dom";
import volunteerHeroBg from "../../assets/volunteer/herov.jpeg";

import VideoModal from "./VideoModal";

export default function HeroV() {

  // ================= VIDEO MODAL STATE =================
  const [openVideoModal, setOpenVideoModal] = useState(false);

  // ================= SCROLL TO TOP =================
  const handlePageChange = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-white min-h-175 lg:min-h-205 flex items-center relative overflow-hidden font-sans select-none">

        {/* ================= CONTENT WRAPPER ================= */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center px-6 sm:px-8 lg:px-12 py-16 lg:py-0 z-10">

          {/* ================= LEFT PANEL ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-12">

            {/* LABEL */}
            <span className="text-red-600 font-extrabold text-xs tracking-[0.25em] uppercase mb-3">
              Volunteer
            </span>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-5">

              Be the Reason
              <br />

              Someone
              <span className="text-red-600"> Smiles</span>
              {" "}Today!

            </h1>

            {/* RED LINE */}
            <div className="w-12 h-1 bg-red-600 rounded-full mb-7"></div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl mb-10">

              Join hands with InAmigos Foundation and become part of a meaningful movement.
              Your time, skills, compassion, and dedication can help create lasting impact
              in the lives of people, animals, and communities.

            </p>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="flex flex-wrap items-center gap-4">

              {/* JOIN BUTTON */}
              <Link
                to="/volunteer#joinus"
                onClick={handlePageChange}
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl text-sm font-black tracking-wide transition-all duration-300 shadow-lg hover:shadow-red-200 active:scale-[0.98]"
              >
                Join Us
              </Link>

              {/* WATCH VIDEO BUTTON */}
              <button
                onClick={() => setOpenVideoModal(true)}
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 border border-red-600/50 hover:border-red-600 px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
              >

                {/* PLAY ICON */}
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">

                  <svg
                    className="w-4 h-4 text-red-600 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>

                </div>

                <div className="flex flex-col items-start">

                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                    Watch
                  </span>

                  <span className="text-sm font-bold text-gray-900">
                    Impact Video
                  </span>

                </div>

              </button>

            </div>

            {/* ================= STATS ================= */}
            <div className="flex flex-wrap gap-8 mt-14">

              <div>
                <h3 className="text-3xl font-black text-gray-900">
                  1L+
                </h3>

                <p className="text-gray-500 text-sm font-semibold mt-1">
                  Interns Connected
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-gray-900">
                  6+
                </h3>

                <p className="text-gray-500 text-sm font-semibold mt-1">
                  Social Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-gray-900">
                  5+
                </h3>

                <p className="text-gray-500 text-sm font-semibold mt-1">
                  Years Impact
                </p>
              </div>

            </div>

          </div>

          {/* ================= EMPTY RIGHT GRID ================= */}
          <div className="hidden lg:block lg:col-span-6"></div>

        </div>

        {/* ================= HERO IMAGE ================= */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 pointer-events-none">

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 sm:via-white/75 lg:via-white/35 to-transparent z-10"></div>

          {/* IMAGE */}
          <img
            src={volunteerHeroBg}
            alt="InAmigos volunteers helping communities"
            className="w-full h-full object-cover object-center"
          />

        </div>

      </section>

      {/* ================= VIDEO MODAL ================= */}
      <VideoModal
        isOpen={openVideoModal}
        onClose={() => setOpenVideoModal(false)}
      />

    </>
  );
}