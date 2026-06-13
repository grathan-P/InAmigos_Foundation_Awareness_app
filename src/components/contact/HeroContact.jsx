import React, { useState } from 'react';
import contactus from "../../assets/contact_img/whoweare_img.jpg";

export default function ContactUs() {
  const [message, setMessage] = useState("");
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  setMessage(
    "Thank you for reaching out! The contact service is currently under maintenance."
  );
};

  const contactDetails = [
    {
      title: "Call Us",
      value: "+91 62673 09902",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    },
    {
      title: "Email Us",
      value: "inamigosfoundation@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      title: "Visit Us",
      value: "Bilaspur, Chhattisgarh, India",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-9-7-9zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    {
      title: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans select-none overflow-hidden mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
        
        {/* ================= LEFT COLUMN: INFRASTRUCTURE & DETAILS (5 Columns Wide) ================= */}
        <div className="lg:col-span-4 flex flex-col justify-center z-10">
          <span className="text-[#DC2626] font-extrabold text-[11px] tracking-widest uppercase mb-1">
            CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-[1.1] mb-2">
            We'd Love to <br /> Hear From <span className="text-[#DC2626]">You!</span>
          </h2>
          <div className="w-8 h-[2.5px] bg-[#DC2626] mb-5"></div>
          
          <p className="text-gray-600 text-[12px] font-medium leading-relaxed tracking-normal mb-8 max-w-sm">
            Have a question, suggestion, or want to collaborate with us? Feel free to reach out. We're here to help and would love to connect with you.
          </p>
          
          {/* Info Rows */}
          <div className="space-y-4">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                {/* Soft Red Rounded Square Wrapper Icon */}
                <div className="w-9 h-9 rounded-xl bg-[#FDF2F2] text-[#DC2626] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-extrabold text-[12px] leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[#DC2626] font-bold text-[11.5px] mt-0.5 leading-tight">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MIDDLE COLUMN: TEAM IMAGE ASSET BACKGROUND CONTAINER (4 Columns Wide) ================= */}
        <div className="lg:col-span-4 w-full h-90 lg:h-115 rounded-4xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden relative p-2 my-4 lg:my-0">
          {/* PLACEHOLDER FOR IMAGE */}
          <img 
            src={contactus} 
            alt="InAmigos Foundation team illustration" 
            className="w-full h-full object-cover rounded-3xl bg-gray-200"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">InAmigos Group Photo</span>
            <span className="text-[10px] text-gray-400 mt-1">Image Field Placeholder</span>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: INTERACTIVE INPUT FORM GRID (4 Columns Wide) ================= */}
        <div className="lg:col-span-4 bg-white border border-gray-100 rounded-4xl p-6 lg:p-7 shadow-2xl shadow-gray-200/60 flex flex-col justify-between z-10">
          <div className="mb-4">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">
              Send Us a <span className="text-[#DC2626]">Message</span>
            </h3>
            <p className="text-gray-400 font-bold text-[10.5px] tracking-normal mt-1">
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-800 placeholder-gray-400 outline-none focus:border-red-500 transition-colors"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-800 placeholder-gray-400 outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-800 placeholder-gray-400 outline-none focus:border-red-500 transition-colors"
                required
              />
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-800 placeholder-gray-400 outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>

            <textarea 
              name="message"
              rows="4" 
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-800 placeholder-gray-400 outline-none focus:border-red-500 transition-colors resize-none"
              required
            ></textarea>

            <button 
              type="submit" 
              className="w-full bg-[#DC2626] hover:bg-red-700 active:scale-[0.99] text-white font-black text-xs py-3 rounded-xl shadow-md shadow-red-600/10 transition-all flex items-center justify-center gap-2 tracking-wide"
            >
              Send Message
              <svg className="w-3.5 h-3.5 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-7-9-7v14z" />
              </svg>
            </button>
            {message && (
  <div className="mt-3 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-xl text-sm font-medium">
    {message}
  </div>
)}
          </form>
        </div>

      </div>
    </section>
  );
}