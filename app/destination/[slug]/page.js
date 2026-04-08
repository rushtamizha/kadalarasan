"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  IoArrowForwardCircleOutline, 
  IoLocationOutline, 
  IoLogoWhatsapp,
  IoCompassOutline 
} from "react-icons/io5";

const DestinationHub = () => {
  const destinations = [
    { name: "Port Blair", slug: "port-blair", tag: "Capital City", img: "/destination/barren-island-port-blair-andaman-and-nicobar-islands-1-attr-hero.jpg" },
    { name: "Havelock", slug: "havelock", tag: "Best Beaches", img: "/destination/kala-pathar-beach-havelock.webp" },
    { name: "Neil", slug: "neil", tag: "Coral Paradise", img: "/destination/neil-island-travel-guide-natural-bridge.png" },
    { name: "Baratang", slug: "baratang", tag: "Hidden Caves", img: "/destination/sailing-through-mangroves.jpg" },
    { name: "Diglipur", slug: "diglipur", tag: "Turtle Nesting", img: "/destination/Untitled-design-18.webp" },
    { name: "Barren Island", slug: "barren-island", tag: "Active Volcano", img: "/destination/barren-island-port-blair-andaman-and-nicobar-islands-1-attr-hero.jpg" },
    { name: "Mayabunder", slug: "mayabunder", tag: "Offbeat Trails", img: "/destination/mayabunder.jpg" },
    { name: "Little Andaman", slug: "little-andaman", tag: "Surfer's Haven", img: "/destination/caption.jpg" },
    { name: "Rangat", slug: "rangat", tag: "Eco Tourism", img: "/destination/2-yerrata-creek-rangat-andaman-nicobar-islands-2-attr-hero.jpg" },
  ];

  const handleWhatsApp = (name) => {
    const text = `Hi Kadalarasan tour & travels ! I'm interested in a trip to *${name}*. Can you share the best deals?`;
    window.open(`https://wa.me/918056625577?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-34 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header with Luxury Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
              <IoCompassOutline size={18} className="animate-spin-slow" /> 
              Curated Island Guides
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              Where to <span className="text-blue-600">Go?</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold max-w-xs text-right hidden md:block uppercase tracking-widest text-[10px] leading-relaxed">
            From active volcanoes to pristine sands, discover the 9 wonders of the archipelago.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl bg-blue-950"
            >
              {/* Background Image with Overlay */}
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    0{i + 1} // {dest.tag}
                  </span>
                  <button 
                    onClick={() => handleWhatsApp(dest.name)}
                    className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg translate-y-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <IoLogoWhatsapp size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-400">
                      <IoLocationOutline size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Andaman</span>
                    </div>
                    <h3 className="text-4xl font-black text-white tracking-tighter">
                      {dest.name}
                    </h3>
                  </div>

                  {/* Navigation Button */}
                    <button onClick={() => handleWhatsApp(dest.name)} className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] hover:text-blue-200 transition-colors group/link">
                      Explore Full Guide 
                      <IoArrowForwardCircleOutline size={24} className="group-hover/link:translate-x-2 transition-transform" />
                    </button>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DestinationHub;