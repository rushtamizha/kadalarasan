"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  IoArrowForwardCircleOutline, 
  IoLogoWhatsapp,
  IoWaterOutline,
  IoFlashOutline
} from "react-icons/io5";

const WaterSportsHub = () => {
  const sports = [
    { name: "Scuba Diving", slug: "scuba-diving", thrill: "High", tag: "Deep Sea", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800" },
    { name: "Sea Kart", slug: "sea-kart", thrill: "Medium", tag: "Self-Drive", img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=800" },
    { name: "Parasailing", slug: "parasailing", thrill: "High", tag: "Sky View", img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800" },
    { name: "Jet Ski Ride", slug: "jet-ski-ride", thrill: "Medium", tag: "Speed", img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798156?q=80&w=800" },
    { name: "Snorkelling", slug: "snorkelling", thrill: "Low", tag: "Surface View", img: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=800" },
    { name: "Sofa Ride", slug: "sofa-ride", thrill: "Medium", tag: "Family Fun", img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800" },
  ];

  const handleWhatsApp = (name) => {
    const text = `Hi Kadalarasan tour & travels ! I want to book *${name}*. Please let me know the price and location.`;
    window.open(`https://wa.me/918056625577?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-34 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
              <IoWaterOutline size={18} className="animate-bounce" /> 
              The Thrill of Andaman
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              Water <span className="text-blue-600">Sports.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold max-w-xs text-right hidden md:block uppercase tracking-widest text-[10px] leading-relaxed">
            Dive into adventure with our certified safety-first aquatic experiences.
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl bg-blue-900"
            >
              {/* Background Image */}
              <img 
                src={item.img} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-50"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-black/20" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black uppercase tracking-widest text-white">
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                       <IoFlashOutline size={12} />
                       <span className="text-[9px] font-black uppercase">Thrill: {item.thrill}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleWhatsApp(item.name)}
                    className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                  >
                    <IoLogoWhatsapp size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-white tracking-tight">
                    {item.name}
                  </h3>

                  <Link href={`/water-sports/${item.slug}`}>
                    <button className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] group/link hover:text-blue-400 transition-colors">
                      Activity Details 
                      <IoArrowForwardCircleOutline size={24} className="group-hover/link:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterSportsHub;