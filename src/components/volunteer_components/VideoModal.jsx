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
    className="fixed inset-0 z-999 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <div className="w-full max-w-6xl h-[92vh] bg-white rounded-4xl overflow-hidden shadow-2xl flex flex-col">

      {/* HEADER */}
      <div className="border-b border-gray-100 px-6 md:px-10 py-6 flex items-start justify-between">

        <div>
          <span className="text-red-600 uppercase tracking-[0.2em] text-[11px] font-bold">
            Impact Stories
          </span>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-2">
            Stories That Create
            <span className="text-red-600"> Impact</span>
          </h2>
        </div>

        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition flex items-center justify-center"
        >
          <FaTimes />
        </button>

      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">

        {/* FEATURED VIDEO */}
        <section className="mb-12">

          <div className="overflow-hidden rounded-3xl border border-gray-200">

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ApFogc_9-zo"
                title="Featured Story"
                allowFullScreen
              />

            </div>

          </div>

          <div className="mt-6">

            <div className="flex items-center gap-3 mb-2">

              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
                <FaPlay size={10} />
              </div>

              <span className="uppercase tracking-widest text-[10px] font-bold text-red-600">
                Featured Story
              </span>

            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Building Smiles Through Collective Action
            </h3>

            <p className="text-sm text-gray-600 leading-7 mt-3 max-w-3xl">
              Every volunteer, every campaign, and every act of kindness
              contributes toward building a more compassionate and sustainable future.
            </p>

          </div>

        </section>

        {/* STORIES */}
        <section>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Recent Stories
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {videos.map((video) => {

              const shortDescription =
                video.description.length > 120
                  ? video.description.slice(0, 120) + "..."
                  : video.description;

              return (

                <div
                  key={video.id}
                  className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition duration-300 bg-white"
                >

                  <div className="aspect-video bg-black">

                    <iframe
                      className="w-full h-full"
                      src={video.embedUrl}
                      title={video.title}
                      allowFullScreen
                    />

                  </div>

                  <div className="p-5">

                    <div className="flex items-center gap-2 mb-3">

                      {video.platform === "YouTube" ? (
                        <>
                          <FaYoutube className="text-red-600" />
                          <span className="text-[10px] uppercase tracking-widest font-bold text-red-600">
                            YouTube
                          </span>
                        </>
                      ) : (
                        <>
                          <FaInstagram className="text-pink-500" />
                          <span className="text-[10px] uppercase tracking-widest font-bold text-pink-500">
                            Instagram Reel
                          </span>
                        </>
                      )}

                    </div>

                    <h4 className="text-base font-semibold text-gray-900 leading-snug">
                      {video.title}
                    </h4>

                    <p className="text-sm text-gray-600 mt-3 leading-6">
                      {shortDescription}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </section>

      </div>

      {/* CTA */}
      <div className="border-t border-gray-100 px-6 md:px-10 py-5 flex flex-col md:flex-row gap-4 items-center justify-between">

        <div>

          <p className="text-sm text-gray-600">
            Join our volunteer community and help create meaningful impact.
          </p>
        </div>

        <button
          onClick={handleJoinUs}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-3 rounded-xl text-sm transition"
        >
          Join Us Now
        </button>

      </div>

    </div>
  </div>

  );
}