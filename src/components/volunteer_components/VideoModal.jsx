import React from "react";
import {
  FaTimes,
  FaYoutube,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";

const videos = [
  {
    id: 1,
    platform: "YouTube",
    title: "Project PRAKRITI | InAmigos Foundation at Social Impact Awards 2025 – SPJIMR @FUGA",
    description:
      "Watch our impactful journey with Project PRAKRITI, recognized at the Social Impact Awards 2025 by SPJIMR @FUGA, showcasing our commitment to environmental sustainability and community empowerment.",
    embedUrl: "https://www.youtube.com/embed/Wv50y2ahHls",
  },

  {
    id: 2,
    platform: "Instagram",
    title: "Stationery Drive for Underprivileged Children",
    description:
      "Children are the future, and nurturing them from the very beginning is our greatest responsibility. By donating stationery, guiding young minds, and supporting their education, we are planting the seeds of a brighter tomorrow. 📚✨",
    embedUrl: "https://www.instagram.com/reel/DVYnit8k5vZ/embed",
  },

  {
    id: 3,
    platform: "YouTube",
    title: "Plantation Awareness Campaign",
    description:
      "Watch volunteers work together to create a greener and cleaner future.",
    embedUrl: "https://www.youtube.com/embed/aL9SW9G5TYc",
  },

  {
    id: 4,
    platform: "Instagram",
    title: "Feeding Smiles with #ProjectSEVA",
    description:
      "Serving with compassion, spreading smiles, and reaching those who need it the most — under #ProjectSEVA, we are feeding people across different communities and ensuring no one is left behind. Every meal served is not just food, but a moment of dignity, happiness, and care. Together, we are turning kindness into action and making humanity stronger. ❤️🍽️",
    embedUrl: "https://www.instagram.com/reel/DW34-QKjfxq/embed",
  },

  {
    id: 5,
    platform: "YouTube",
    title: "Feed the voiceless ♥",
    description:
      "Feeding stray animals and providing shelter through our compassionate volunteers.",
    embedUrl: "https://www.youtube.com/embed/16glRO-GNpg",
  },

  {
    id: 6,
    platform: "Instagram",
    title: "Feeding the Voiceless with #ProjectPRAKRITI",
    description:
      "Feeding the voiceless is one of the purest forms of service. From birds and cows to dogs and other stray animals, every life deserves care, food, and compassion. A small effort from us can mean survival for them. Let’s be their support and their voice. 🐾🐦❤️",
    embedUrl: "https://www.instagram.com/reel/DXo0FTzjU8y/embed",
  },
];

export default function VideoModal({
  isOpen,
  onClose,
}) {

  if (!isOpen) return null;

  // ================= JOIN US SCROLL =================
  const handleJoinUs = () => {

    onClose();

    setTimeout(() => {

      const section = document.getElementById("joinus");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

    }, 250);
  };

  return (

    <div
      className="fixed inset-0 z-999 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 py-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >

      {/* ================= MAIN MODAL ================= */}
      <div className="relative w-full max-w-7xl max-h-[94vh] overflow-hidden rounded-4xl bg-white shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col">

        {/* ================= HEADER ================= */}
        <div className="relative px-6 md:px-10 py-7 border-b border-gray-200 bg-white/90 backdrop-blur-xl">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 w-12 h-12 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <FaTimes className="text-lg" />
          </button>

          {/* LABEL */}
          <span className="text-red-600 font-black text-xs tracking-[0.25em] uppercase">
            InAmigos Media
          </span>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
            Stories That Create
            <span className="text-red-600"> Impact</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed text-sm md:text-base">
            Explore real stories, volunteer journeys, food drives,
            educational support, environmental campaigns,
            and social impact created by InAmigos Foundation.
          </p>

        </div>

        {/* ================= SCROLLABLE CONTENT ================= */}
        <div className="overflow-y-auto px-6 md:px-10 py-8">

          {/* ================= FEATURED VIDEO ================= */}
          <div className="mb-12">

            <div className="relative overflow-hidden rounded-4xl border border-gray-200 shadow-xl">

              <div className="aspect-video">

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ApFogc_9-zo"
                  title="
Top 5 #NGOs of the Year 2025, an award presented by the Hon’ble Mayor of Delhi at Hyatt Centric."
                  allowFullScreen
                />

              </div>

            </div>

            {/* FEATURED CONTENT */}
            <div className="mt-6">

              <div className="flex items-center gap-3 mb-3">

                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <FaPlay className="text-sm" />
                </div>

                <span className="text-red-600 text-xs font-black tracking-widest uppercase">
                  Featured Story
                </span>

              </div>

              <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                Building Smiles Through Collective Action
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed max-w-4xl">
                Every volunteer, every campaign, and every act of kindness
                contributes toward building a more compassionate and sustainable future.
              </p>

            </div>

          </div>

          {/* ================= VIDEO GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {videos.map((video) => (

              <div
                key={video.id}
                className="group bg-white rounded-[1.75rem] overflow-hidden border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-500"
              >

                {/* VIDEO */}
                <div className="aspect-video overflow-hidden bg-black">

                  <iframe
                    className="w-full h-full group-hover:scale-[1.02] transition-all duration-500"
                    src={video.embedUrl}
                    title={video.title}
                    allowFullScreen
                  />

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* PLATFORM */}
                  <div className="flex items-center gap-2 mb-3">

                    {video.platform === "YouTube" ? (

                      <>
                        <FaYoutube className="text-red-600 text-xl" />

                        <span className="text-red-600 text-xs font-black uppercase tracking-widest">
                          YouTube
                        </span>
                      </>

                    ) : (

                      <>
                        <FaInstagram className="text-pink-500 text-xl" />

                        <span className="text-pink-500 text-xs font-black uppercase tracking-widest">
                          Instagram Reel
                        </span>
                      </>

                    )}

                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-black text-gray-900 leading-snug group-hover:text-red-600 transition-all duration-300">
                    {video.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-sm leading-relaxed mt-3">
                    {video.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="border-t border-gray-200 bg-white px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* LEFT */}
          <div>

            <h4 className="text-xl font-black text-gray-900">
              Want To Become Part Of The Change?
            </h4>

            <p className="text-gray-600 text-sm mt-1">
              Join our volunteer network and help create meaningful social impact.
            </p>

          </div>

          {/* BUTTON */}
          <button
            onClick={handleJoinUs}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-red-200 transition-all duration-300"
          >
            Join Us Now
          </button>

        </div>

      </div>

    </div>

  );
}