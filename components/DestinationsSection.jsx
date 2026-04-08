"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowUpRight, Compass } from "lucide-react";

const DestinationsSection = () => {
  const destinations = [
    { name: "Havelock (Swaraj Dweep)", image: "https://images.unsplash.com/photo-1589197331516-4d84593e6466?q=80&w=800", size: "lg" },
    { name: "Neil (Shaheed Dweep)", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800", size: "sm" },
    { name: "Port Blair", image: "https://images.unsplash.com/photo-1626014903708-43030ca048ea?q=80&w=800", size: "sm" },
    { name: "Barren Island", image: "https://images.unsplash.com/photo-1614092102954-4740f959e984?q=80&w=800", size: "sm" },
    { name: "Diglipur Island", image: "https://images.unsplash.com/photo-1610123598197-2b73b573673c?q=80&w=800", size: "lg" },
    { name: "Baratang Island", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800", size: "sm" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em]">
            <Compass size={14} className="animate-spin-slow" />
            Island Explorer
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-blue-950 tracking-tighter">
            Andaman <span className="text-blue-600">Destinations</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            From active volcanoes to pristine white-sand beaches, explore the diverse soul of the islands.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {destinations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl ${
                loc.size === "lg" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* Background Image */}
              <img 
                src={loc.image} 
                alt={loc.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay (Always Visible for Readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between items-end">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-400">
                      <MapPin size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Andaman</span>
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                      {loc.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-yellow-400 fill-yellow-400" />)}
                      <span className="text-[10px] text-white/50 ml-1 font-bold">(5 Reviews)</span>
                    </div>
                  </div>

                  {/* Floating Action Button */}
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-2xl scale-0 group-hover:scale-100 transition-all duration-300"
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>

                {/* Glass Blur Details Button (Mobile visible, Desktop hover) */}
                <div className="mt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                   <button className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all">
                      View Details
                   </button>
                </div>
              </div>
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
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DestinationsSection;