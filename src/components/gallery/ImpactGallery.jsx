import { useState } from "react";
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import {
  FaThLarge,
  FaUtensils,
  FaBookOpen,
  FaPaw,
  FaFemale,
  FaLeaf,
  FaChartBar,
  FaCalendarAlt,
  FaCamera,
  FaArrowRight,
} from "react-icons/fa";

const GalleryGrid = () => {

  const location = useLocation();
  
    // Helper function to scroll smoothly to the top of the page when changing routes
    const handlePageChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  // CATEGORY BUTTONS
  const categories = [
    { name: "All", icon: <FaThLarge /> },
    { name: "Seva", icon: <FaUtensils /> },
    { name: "Bachpanshala", icon: <FaBookOpen /> },
    { name: "Jeev", icon: <FaPaw /> },
    { name: "Udaan", icon: <FaFemale /> },
    { name: "Prakriti", icon: <FaLeaf /> },
    { name: "Vikas", icon: <FaChartBar /> },
    { name: "Events", icon: <FaCalendarAlt /> },
  ];

  // GALLERY DATA
  // Replace image paths with your actual imports/paths
  const galleryData = [
    {
      id: 1,
      category: "Seva",
      image: "../../src/assets/project_img/s1.png",
    },
    {
      id: 2,
      category: "Seva",
      image: "../../src/assets/project_img/s2.png",
    },
    {
      id: 3,
      category: "Seva",
      image: "../../src/assets/project_img/s3.png",
    },
    {
      id: 4,
      category: "Seva",
      image: "../../src/assets/project_img/s4.png",
    },
    {
      id: 5,
      category: "Seva",
      image: "../../src/assets/project_img/seva.png",
    },
    {
      id: 6,
      category: "Seva",
      image: "../../src/assets/project_img/seva2.png",
    },
    {
      id: 7,
      category: "Bachpanshala",
      image: "../../src/assets/project_img/b.png",
    },
    {
      id: 8,
      category: "Bachpanshala",
      image: "../../src/assets/project_img/b1.png",
    },
    {
      id: 9,
      category: "Bachpanshala",
      image: "../../src/assets/project_img/b2.png",
    },
    {
      id: 10,
      category: "Bachpanshala",
      image: "../../src/assets/project_img/b3.png",
    },
    {
      id: 11,
      category: "Bachpanshala",
      image: "../../src/assets/project_img/b4.png",
    },
    {
      id: 12,
      category: "Jeev",
      image: "../../src/assets/project_img/j1.png",
    },
    {
      id: 13,
      category: "Jeev",
      image: "../../src/assets/project_img/jeeva.png",
    },
    {
      id: 14,
      category: "Jeev",
      image: "../../src/assets/project_img/j2.png",
    },
    {
      id: 15,
      category: "Jeev",
      image: "../../src/assets/project_img/j3.png",
    },
    {
      id: 16,
      category: "Jeev",
      image: "../../src/assets/project_img/j4.png",
    },
    {
      id: 17,
      category: "Udaan",
      image: "../../src/assets/project_img/u1.png",
    },
    {
      id: 18,
      category: "Udaan",
      image: "../../src/assets/project_img/u2.png",
    },
    {
      id: 19,
      category: "Udaan",
      image: "../../src/assets/project_img/u3.png",
    },
    {
      id: 20,
      category: "Udaan",
      image: "../../src/assets/project_img/u4.png",
    },
    {
      id: 21,
      category: "Udaan",
      image: "../../src/assets/project_img/udaan.png",
    },
    {
      id: 22,
      category: "Prakriti",
      image: "../../src/assets/project_img/p1.png",
    },
    {
      id: 23,
      category: "Prakriti",
      image: "../../src/assets/project_img/p2.png",
    },
    {
      id: 24,
      category: "Prakriti",
      image: "../../src/assets/project_img/p3.png",
    },
    {
      id: 25,
      category: "Prakriti",
      image: "../../src/assets/project_img/p4.png",
    },
    {
      id: 26,
      category: "Prakriti",
      image: "../../src/assets/project_img/phero.jpeg",
    },
    {
      id: 27,
      category: "Prakriti",
      image: "../../src/assets/project_img/prakriti.png",
    },
    {
      id: 28,
      category: "Vikas",
      image: "../../src/assets/project_img/v.png",
    },
    {
      id: 29,
      category: "Vikas",
      image: "../../src/assets/project_img/v1.png",
    },
    {
      id: 30,
      category: "Vikas",
      image: "../../src/assets/project_img/v2.png",
    },
    {
      id: 31,
      category: "Vikas",
      image: "../../src/assets/project_img/v3.png",
    },
    {
      id: 32,
      category: "Vikas",
      image: "../../src/assets/project_img/v4.png",
    },
    {
      id: 33,
      category: "Events",
      image: "../../src/assets/aboutus_img/aboutus.jpeg",
    },
    {
      id: 34,
      category: "Events",
      image: "../../src/assets/aboutus_img/knowmore.jpeg",
    },
    {
      id: 35,
      category: "Events",
      image: "../../src/assets/contact_img/contactus.png",
    },
    {
      id: 36,
      category: "Events",
      image: "../../src/assets/contact_img/whoweare_img.jpg",
    },
    {
      id: 37,
      category: "Events",
      image: "../../src/assets/volunteer/herov.jpeg",
    },
    {
      id: 38,
      category: "Events",
      image: "../../src/assets/volunteer/joinus.jpeg",
    },
    {
      id: 39,
      category: "Events",
      image: "../../src/assets/project_img/i1.jpg",
    },
    {
      id: 40,
      category: "Events",
      image: "../../src/assets/project_img/i2.jpg",
    },
    {
      id: 41,
      category: "Events",
      image: "../../src/assets/project_img/i3.jpg",
    },
    {
      id: 42,
      category: "Events",
      image: "../../src/assets/project_img/i4.jpg",
    },
    {
      id: 43,
      category: "Events",
      image: "../../src/assets/project_img/i5.jpg",
    },
    {
      id: 44,
      category: "Events",
      image: "../../src/assets/project_img/i6.jpeg",
    },
    {
      id: 45,
      category: "Events",
      image: "../../src/assets/project_img/i7.jpg",
    },
    {
      id: 46,
      category: "Events",
      image: "../../src/assets/project_img/i8.jpg",
    },
    {
      id: 47,
      category: "Events",
      image: "../../src/assets/project_img/i9.jpg",
    },
    {
      id: 48,
      category: "Events",
      image: "../../src/assets/project_img/i10.jpeg",
    },
    {
      id: 49,
      category: "Events",
      image: "../../src/assets/project_img/i11.jpg",
    },
    {
      id: 50,
      category: "Events",
      image: "../../src/assets/project_img/i12.jpg",
    },
    {
      id: 51,
      category: "Events",
      image: "../../src/assets/project_img/i13.jpg",
    },
    {
      id: 52,
      category: "Events",
      image: "../../src/assets/project_img/i14.jpg",
    },
    {
      id: 53,
      category: "Events",
      image: "../../src/assets/project_img/i15.jpg",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // FILTER IMAGES
  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10">

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">

        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl border text-sm md:text-base font-medium transition-all duration-300

            ${
              activeCategory === category.name
                ? "bg-red-600 text-white border-red-600 shadow-md"
                : "bg-white text-black border-gray-200 hover:border-red-500 hover:text-red-500"
            }
            `}
          >
            {category.icon}
            {category.name}
          </button>
        ))}

      </div>

      {/* MASONRY GALLERY */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">

        {filteredImages.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid overflow-hidden rounded-2xl relative group cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-2xl flex items-end p-4">

              <div className="translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">

                <h3 className="text-white text-lg font-semibold">
                  {item.category}
                </h3>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* BOTTOM CTA */}
      <div className="mt-14 bg-[#f8f8f8] rounded-3xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="flex items-center gap-5">

          <div className="bg-red-100 text-red-600 p-5 rounded-full text-3xl">
            <FaCamera />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black">
              Be Part of Our Journey
            </h2>

            <p className="text-gray-600 mt-1">
              Join us in creating more smiles and countless memories.
            </p>
          </div>

        </div>

        {/* BUTTON */}
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

    </section>
  );
};

export default GalleryGrid;