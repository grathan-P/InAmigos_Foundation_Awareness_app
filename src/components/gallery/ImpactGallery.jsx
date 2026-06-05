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
import img1 from "../../assets/project_img/s1.png"
import img2 from "../../assets/project_img/s2.png"
import img3 from "../../assets/project_img/s3.png"
import img4 from "../../assets/project_img/s4.png"
import img5 from "../../assets/project_img/seva.png"
import img6 from "../../assets/project_img/seva2.png"
import img7 from "../../assets/project_img/b.png"
import img8 from "../../assets/project_img/b1.png"
import img9 from "../../assets/project_img/b2.png"
import img10 from "../../assets/project_img/b3.png"
import img11 from "../../assets/project_img/b4.png"
import img12 from "../../assets/project_img/j1.png"
import img13 from "../../assets/project_img/jeeva.png"
import img14 from "../../assets/project_img/j2.png"
import img15 from "../../assets/project_img/j3.png"
import img16 from "../../assets/project_img/j4.png"
import img17 from "../../assets/project_img/u1.png"
import img18 from "../../assets/project_img/u2.png"
import img19 from "../../assets/project_img/u3.png"
import img20 from "../../assets/project_img/u4.png"
import img21 from "../../assets/project_img/udaan.png"
import img22 from "../../assets/project_img/p1.png"
import img23 from "../../assets/project_img/p2.png"
import img24 from "../../assets/project_img/p3.png"
import img25 from "../../assets/project_img/p4.png"
import img26 from "../../assets/project_img/phero.jpeg"
import img27 from "../../assets/project_img/prakriti.png"
import img28 from "../../assets/project_img/v.png"
import img29 from "../../assets/project_img/v1.png"
import img30 from "../../assets/project_img/v2.png"
import img31 from "../../assets/project_img/v3.png"
import img32 from "../../assets/project_img/v4.png"
import img33 from "../../assets/aboutus_img/aboutus.jpeg"
import img34 from "../../assets/aboutus_img/knowmore.jpeg"
import img35 from "../../assets/contact_img/contactus.png"
import img36 from "../../assets/contact_img/whoweare_img.jpg"
import img37 from "../../assets/volunteer/herov.jpeg"
import img38 from "../../assets/volunteer/joinus.jpeg"
import img39 from "../../assets/project_img/i1.jpg"
import img40 from "../../assets/project_img/i2.jpg"
import img41 from "../../assets/project_img/i3.jpg"
import img42 from "../../assets/project_img/i4.jpg"
import img43 from "../../assets/project_img/i5.jpg"
import img44 from "../../assets/project_img/i6.jpeg"
import img45 from "../../assets/project_img/i7.jpg"
import img46 from "../../assets/project_img/i8.jpg"
import img47 from "../../assets/project_img/i9.jpg"
import img48 from "../../assets/project_img/i10.jpeg"
import img49 from "../../assets/project_img/i11.jpg"
import img50 from "../../assets/project_img/i12.jpg"
import img51 from "../../assets/project_img/i13.jpg"
import img52 from "../../assets/project_img/i14.jpg"
import img53 from "../../assets/project_img/i15.jpg"

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
      image: img1,
    },
    {
      id: 2,
      category: "Seva",
      image: img2,
    },
    {
      id: 3,
      category: "Seva",
      image: img3,
    },
    {
      id: 4,
      category: "Seva",
      image: img4,
    },
    {
      id: 5,
      category: "Seva",
      image: img5,
    },
    {
      id: 6,
      category: "Seva",
      image: img6,
    },
    {
      id: 7,
      category: "Bachpanshala",
      image: img7,
    },
    {
      id: 8,
      category: "Bachpanshala",
      image: img8,
    },
    {
      id: 9,
      category: "Bachpanshala",
      image: img9,
    },
    {
      id: 10,
      category: "Bachpanshala",
      image: img10,
    },
    {
      id: 11,
      category: "Bachpanshala",
      image: img11,
    },
    {
      id: 12,
      category: "Jeev",
      image: img12,
    },
    {
      id: 13,
      category: "Jeev",
      image: img13,
    },
    {
      id: 14,
      category: "Jeev",
      image: img14,
    },
    {
      id: 15,
      category: "Jeev",
      image: img15,
    },
    {
      id: 16,
      category: "Jeev",
      image: img16,
    },
    {
      id: 17,
      category: "Udaan",
      image: img17,
    },
    {
      id: 18,
      category: "Udaan",
      image: img18,
    },
    {
      id: 19,
      category: "Udaan",
      image: img19,
    },
    {
      id: 20,
      category: "Udaan",
      image: img20,
    },
    {
      id: 21,
      category: "Udaan",
      image: img21,
    },
    {
      id: 22,
      category: "Prakriti",
      image: img22,
    },
    {
      id: 23,
      category: "Prakriti",
      image: img23,
    },
    {
      id: 24,
      category: "Prakriti",
      image: img24,
    },
    {
      id: 25,
      category: "Prakriti",
      image: img25,
    },
    {
      id: 26,
      category: "Prakriti",
      image: img26,
    },
    {
      id: 27,
      category: "Prakriti",
      image: img27,
    },
    {
      id: 28,
      category: "Vikas",
      image: img28,
    },
    {
      id: 29,
      category: "Vikas",
      image: img29,
    },
    {
      id: 30,
      category: "Vikas",
      image: img30,
    },
    {
      id: 31,
      category: "Vikas",
      image: img31,
    },
    {
      id: 32,
      category: "Vikas",
      image: img32,
    },
    {
      id: 33,
      category: "Events",
      image: img33,
    },
    {
      id: 34,
      category: "Events",
      image: img34,
    },
    {
      id: 35,
      category: "Events",
      image: img35,
    },
    {
      id: 36,
      category: "Events",
      image: img36,
    },
    {
      id: 37,
      category: "Events",
      image: img37,
    },
    {
      id: 38,
      category: "Events",
      image: img38,
    },
    {
      id: 39,
      category: "Events",
      image: img39,
    },
    {
      id: 40,
      category: "Events",
      image: img40,
    },
    {
      id: 41,
      category: "Events",
      image: img41,
    },
    {
      id: 42,
      category: "Events",
      image: img42,
    },
    {
      id: 43,
      category: "Events",
      image: img43,
    },
    {
      id: 44,
      category: "Events",
      image: img44,
    },
    {
      id: 45,
      category: "Events",
      image: img45,
    },
    {
      id: 46,
      category: "Events",
      image: img46,
    },
    {
      id: 47,
      category: "Events",
      image: img47,
    },
    {
      id: 48,
      category: "Events",
      image: img48,
    },
    {
      id: 49,
      category: "Events",
      image: img49,
    },
    {
      id: 50,
      category: "Events",
      image: img50,
    },
    {
      id: 51,
      category: "Events",
      image: img51,
    },
    {
      id: 52,
      category: "Events",
      image: img52,
    },
    {
      id: 53,
      category: "Events",
      image: img53,
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
      <div className="flex flex-wrap justify-center gap-4 mb-10 mt-35 md:mt-5 lg:mt-10 ">

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