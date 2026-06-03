import React, { useState, useEffect } from 'react';
import { FaTree, FaBowlFood, FaUsers, FaPaw } from 'react-icons/fa6';
import { LuImage } from 'react-icons/lu';
import img1 from '../../assets/gallery_img/whoweare_img.jpg';

// ==========================================
// CUSTOM COUNTER COMPONENT FOR TICKING VALUES
// ==========================================
function CountUpNumber({ target, duration = 1500, suffix = "", isLakh = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Smooth easing out function
      const easeOutQuad = progressPercentage * (2 - progressPercentage);
      
      setCount(Math.floor(easeOutQuad * target));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure accurate final target value snap
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  if (isLakh) {
    if (count >= 100000) {
      return <span>1 Lakh{suffix}</span>;
    } else {
      return <span>{count.toLocaleString('en-IN')}{suffix}</span>;
    }
  }

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function HeroGallery() {
  const metrics = [
    {
      target: 500,
      suffix: "+",
      subtext: "Events Conducted",
      icon: <LuImage className="w-5 h-5 text-[#DC2626]" />,
      isLakh: false
    },
    {
      target: 100000, 
      suffix: "+",
      subtext: "Lives Impacted",
      icon: <FaUsers className="w-5 h-5 text-[#DC2626]" />,
      isLakh: true
    },
    {
      target: 20000,
      suffix: "+",
      subtext: "Trees Planted",
      icon: <FaTree className="w-5 h-5 text-[#DC2626]" />,
      isLakh: false
    },
    {
      target: 50000,
      suffix: "+",
      subtext: "Meals Distributed",
      icon: <FaBowlFood className="w-5 h-5 text-[#DC2626]" />,
      isLakh: false
    },
    {
      target: 50,
      suffix: "+",
      subtext: "Animals Fed Daily",
      icon: <FaPaw className="w-5 h-5 text-[#DC2626]" />,
      isLakh: false
    }
  ];

  return (
    <section className="relative w-full bg-white pt-14 pb-0 px-4 sm:px-6 lg:px-12 font-sans select-none overflow-visible mt-20 min-h-95 flex flex-col justify-between">
      <div className="max-w-[95%] mx-auto w-full flex flex-col relative z-10">
        
        {/* ================= STRUCTURAL TEXT GRID LAYER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-4">
          
          {/* Left Text Container (6 Columns Wide to hold layout spacing properly) */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-8 py-4 z-20">
            <span className="text-[#DC2626] font-extrabold text-[11px] tracking-widest uppercase mb-1">
              GALLERY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-gray-950 tracking-tight leading-[1.1] mb-2">
              Moments of <span className="text-[#DC2626]">Change</span>,<br />
              Memories for Life
            </h1>
            <div className="w-8 h-[2.5px] bg-[#DC2626] mb-5"></div>
            
            <p className="text-gray-600 text-[12.5px] font-semibold leading-relaxed tracking-normal max-w-sm">
              Every picture tells a story of hope, kindness, and impact. Here are some glimpses of our journey towards a better tomorrow.
            </p>
          </div>

          {/* Right Spacer Column (Maintains structural room for the absolute layout image below) */}
          <div className="hidden lg:block lg:col-span-6" />

        </div>

        {/* ================= FLOATING RIBBON BLOCK ================= */}
        <div className="relative z-20 w-full bg-white border border-gray-100 rounded-2xl py-5 px-6 shadow-xl shadow-gray-200/60 flex flex-wrap items-center justify-between gap-y-6 gap-x-2 transform translate-y-1/2 mt-16">
          {metrics.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3.5 flex-1 min-w-38.75 justify-center sm:justify-start py-1">
                <div className="w-9 h-9 rounded-xl bg-[#FDF2F2] flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-black text-gray-950 tracking-tight leading-none">
                    <CountUpNumber target={item.target} suffix={item.suffix} isLakh={item.isLakh} />
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 tracking-tight mt-1.5 leading-none">
                    {item.subtext}
                  </span>
                </div>
              </div>
              
              {idx < metrics.length - 1 && (
                <div className="hidden lg:block w-px h-6 bg-gray-100" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>

      {/* ================= HERO IMAGE BACKGROUND DISPLAY MASK ================= */}
      {/* Absolute image container frame that scales horizontally to take up 55% width on large viewports */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 pointer-events-none overflow-hidden rounded-l-none lg:rounded-l-[40px]">
        {/* Soft fading white gradient overlay screen masks onto text row content */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent z-10" />
        
        <img 
          src={img1} 
          alt="Smiles of children from community initiatives" 
          className="w-full h-full object-cover object-center bg-gray-100"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
          }}
        />
      </div>
    </section>
  );
}