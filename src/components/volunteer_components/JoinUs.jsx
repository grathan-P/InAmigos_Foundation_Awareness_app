import React, { useState } from 'react';
import joinusimg from "../../assets/volunteer/joinus.jpeg";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Submitted:', formData);
  };

  const benefits = [
    "Gain real-world experience and develop new skills.",
    "Work with a passionate and supportive team.",
    "Make a meaningful impact in the lives of people and animals.",
    "Receive a certificate of appreciation for your contribution.",
    "Opportunities for future permanent roles in the organization."
  ];

  return (
    <section id="joinus" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans select-none -mt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* ================= LEFT COLUMN: BENEFITS LIST ================= */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Why <span className="text-[#DC2626]">Volunteer</span> With Us?
            </h2>
            <div className="w-8 h-0.75 bg-[#DC2626] mt-2"></div>
          </div>
          
          <ul className="space-y-4">
            {benefits.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#DC2626] shrink-0 mt-0.5">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="text-gray-800 text-[13px] font-bold tracking-tight leading-snug">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= MIDDLE COLUMN: IMAGE PLACEHOLDER ================= */}
        <div className="w-full h-70 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden relative group p-2">
          {/* PLACEHOLDER FOR IMAGE: Replace the src string below with "image_5744ec.jpg" */}
          <img 
            src={joinusimg} 
            alt="Volunteers collaborating placeholder" 
            className="w-full h-full object-cover rounded-2xl bg-gray-200"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Volunteer Action Image Asset</span>
            <span className="text-[10px] text-gray-400 mt-1">"image_5744ec.jpg"</span>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: REGISTRATION FORM ================= */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-gray-100/50 flex flex-col justify-between">
          <div className="mb-5">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Become a <span className="text-[#DC2626]">Volunteer</span>
            </h2>
            <div className="w-8 h-0.75 bg-[#DC2626] mt-2"></div>
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
              <div className="relative">
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-500 placeholder-gray-400 outline-none focus:border-red-500 appearance-none transition-colors cursor-pointer"
                  required
                >
                  <option value="" disabled>Area of Interest</option>
                  <option value="community">Community Service</option>
                  <option value="education">Education & Teaching</option>
                  <option value="environment">Environment</option>
                  <option value="animal">Animal Welfare</option>
                  <option value="women">Women Empowerment</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <textarea 
              name="reason"
              rows="3" 
              placeholder="Tell us why you want to volunteer with us..."
              value={formData.reason}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-800 placeholder-gray-400 outline-none focus:border-red-500 transition-colors resize-none"
              required
            ></textarea>

            <button 
              type="submit" 
              className="w-full bg-[#DC2626] hover:bg-red-700 active:scale-[0.99] text-white font-black text-xs py-3 rounded-xl shadow-md shadow-red-600/10 transition-all flex items-center justify-center gap-2 tracking-wide uppercase"
            >
              Submit Application
              <svg className="w-3.5 h-3.5 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-7-9-7v14z" />
              </svg>
            </button>
          </form>

          <p className="text-center text-gray-400 font-bold text-[10px] mt-4 tracking-normal">
            We will get back to you soon!
          </p>
        </div>

      </div>
    </section>
  );
}