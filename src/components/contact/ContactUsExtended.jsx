import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon issues in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function ContactUsExtended() {
  // Approximate coordinates for Bilaspur, Chhattisgarh, India
  const position = [22.0797, 82.1401]; 
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=InAmigos+Foundation+Bilaspur+Chhattisgarh";

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1CeyCkB3uL/",
      brandClass: "bg-[#1877F2] text-white hover:bg-[#166FE5]"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/inamigos?utm_medium=copy_link",
      brandClass: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:opacity-90"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/inamigos-foundation",
      brandClass: "bg-[#0A66C2] text-white hover:bg-[#004182]"
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com/InamigosF?s=08",
      brandClass: "bg-black text-white hover:bg-neutral-800"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@inamigosfoundation?si=lcyRib3x-bScUF5M",
      brandClass: "bg-[#FF0000] text-white hover:bg-[#CC0000]"
    }
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 font-sans select-none -mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* ================= COLUMN 1: CONNECT WITH US ================= */}
        <div className="bg-white border border-[#F3F4F6] rounded-3xl p-6 flex flex-col justify-between shadow-sm min-h-95">
          <div>
            <h3 className="text-[#111827] font-black text-lg tracking-tight">Connect With Us</h3>
            <div className="w-6 h-[2.5px] bg-[#DC2626] mt-1.5 mb-3"></div>
            <p className="text-gray-500 text-[12px] font-medium leading-relaxed">
              Follow us on social media to stay updated with our latest initiatives and events.
            </p>

            {/* Social Media Circular Links */}
            <div className="flex flex-wrap gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-sm transition-all transform hover:scale-105 ${social.brandClass}`}
                  aria-label={social.name}
                >
                  {/* Inline letter/icon signifiers corresponding to layout layout */}
                  {social.name === "Facebook" && "f"}
                  {social.name === "Instagram" && "📸"}
                  {social.name === "LinkedIn" && "in"}
                  {social.name === "X (Twitter)" && "𝕏"}
                  {social.name === "YouTube" && "▶"}
                </a>
              ))}
            </div>
          </div>

          {/* Blockquote section wrapper box */}
          <div className="bg-[#FAFAFA] border border-[#F3F4F6] rounded-2xl p-5 relative mt-6">
            <span className="text-[#DC2626] font-serif text-3xl absolute top-2 left-4">“</span>
            <div className="pl-5 pr-5 pt-2">
              <p className="text-gray-900 font-extrabold text-[12.5px] tracking-tight leading-snug">
                Uniting minds for a change.
              </p>
              <p className="text-gray-900 font-extrabold text-[12.5px] tracking-tight leading-snug">
                Together, we can build a better world.
              </p>
            </div>
            <span className="text-[#DC2626] font-serif text-3xl absolute bottom-1 right-4">”</span>
          </div>
        </div>

        {/* ================= COLUMN 2: OFFICE LOCATION MAP ================= */}
        <div className="bg-white border border-[#F3F4F6] rounded-3xl p-6 flex flex-col justify-between shadow-sm min-h-95">
          <div>
            <h3 className="text-[#111827] font-black text-lg tracking-tight">Our Office Location</h3>
            <div className="w-6 h-[2.5px] bg-[#DC2626] mt-1.5 mb-4"></div>
            
            {/* Interactive Leaflet Map Wrapper Container */}
            <div className="w-full h-47.5 rounded-2xl overflow-hidden border border-gray-100 relative z-0">
              <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={false} 
                className="w-full h-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="font-sans text-xs">
                      <strong className="text-[#DC2626]">InAmigos Foundation</strong><br />
                      Bilaspur, Chhattisgarh
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="mt-4 flex justify-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#DC2626] text-[#DC2626] hover:bg-red-50 font-black text-xs px-6 py-2.5 rounded-xl flex items-center gap-2 transition-colors tracking-wide"
            >
              Get Directions
              <svg className="w-3.5 h-3.5 text-[#DC2626]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-9-7-9zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ================= COLUMN 3: PARTNERSHIPS & PRESS ROW COMBINATION ================= */}
        <div className="flex flex-col gap-4 justify-between h-full">
          
          {/* Box Segment A: Collaborate With Us */}
          <div className="bg-white border border-[#F3F4F6] rounded-3xl p-5 shadow-sm flex items-start gap-4 flex-1">
            <div className="w-14 h-14 rounded-full bg-[#FDF2F2] flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="text-gray-900 font-extrabold text-[14px] tracking-tight">Collaborate With Us</h4>
                <p className="text-gray-500 text-[11px] font-medium leading-relaxed mt-1">
                  We partner with individuals, companies, and organizations to maximize our impact.
                </p>
              </div>
              <button className="border border-[#DC2626] text-[#DC2626] hover:bg-red-50 font-extrabold text-[11px] px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors tracking-tight mt-3 self-start">
                Partnership Enquiry
                <span className="text-[12px] font-black">→</span>
              </button>
            </div>
          </div>

          {/* Box Segment B: Media & Press */}
          <div className="bg-white border border-[#F3F4F6] rounded-3xl p-5 shadow-sm flex items-start gap-4 flex-1">
            <div className="w-14 h-14 rounded-full bg-[#FDF2F2] flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-[#DC2626]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7v-2h10v2zm0-3H7V9h10v2zm0-3H7V6h10v2z"/>
              </svg>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="text-gray-900 font-extrabold text-[14px] tracking-tight">Media & Press</h4>
                <p className="text-gray-500 text-[11px] font-medium leading-relaxed mt-1">
                  For press inquiries, interviews, or media collaborations, please reach out to us.
                </p>
              </div>
              <button className="border border-[#DC2626] text-[#DC2626] hover:bg-red-50 font-extrabold text-[11px] px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors tracking-tight mt-3 self-start">
                Media Contact
                <span className="text-[12px] font-black">→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}