"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  IoArrowForwardCircleOutline, 
  IoLogoWhatsapp,
  IoBoatOutline,
  IoShieldCheckmarkOutline,
  IoSpeedometerOutline
} from "react-icons/io5";

const FerryHub = () => {
  const ferries = [
    { 
      name: "Makruzz", 
      slug: "makruzz", 
      type: "Catamaran", 
      tag: "Most Popular", 
      speed: "Fastest",
      img: "/ferries/mv-makruzz.jpg" 
    },
    { 
      name: "Nautika", 
      slug: "nautika", 
      type: "High Speed", 
      tag: "Luxury Interiors", 
      speed: "Ultra-Modern",
      img: "/ferries/caption.jpg" 
    },
    { 
      name: "Green Ocean", 
      slug: "green-ocean", 
      type: "Deep Sea Vessel", 
      tag: "Open Deck Access", 
      speed: "Steady & Stable",
      img: "/ferries/green-ocean-1-provides.jpg" 
    },
    { 
      name: "ITT Majestic", 
      slug: "itt-majestic", 
      type: "High Speed craft", 
      tag: "Premium Service", 
      speed: "Efficient",
      img: "/ferries/ITT-Majestic-Ferry.jpg" 
    },
    { 
      name: "Government Ferry", 
      slug: "government-ferry", 
      type: "Conventional", 
      tag: "Budget Friendly", 
      speed: "Standard",
      img: "/ferries/Government-Ferries-in-Andaman.jpg" 
    },
  ];

  const handleWhatsApp = (name) => {
    const text = `Hi Kadalarasan tour & travels ! I want to check the schedule and book tickets for the *${name}* ferry.`;
    window.open(`https://wa.me/918056625577?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-34 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
              <IoBoatOutline size={18} className="animate-pulse" /> 
              Inter-Island Transfers
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              Premium <span className="text-blue-600">Ferries.</span>
            </h2>
          </div>
          <div className="text-right space-y-2">
            <p className="text-gray-400 font-bold max-w-xs hidden md:block uppercase tracking-widest text-[10px]">
              Secure your seats across the Andaman Sea with instant e-tickets.
            </p>
            <div className="flex items-center justify-end gap-2 text-green-600 font-black text-[10px] uppercase">
                <IoShieldCheckmarkOutline /> Verified Booking Partner
            </div>
          </div>
        </div>

        {/* Ferries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ferries.map((ferry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl bg-blue-950"
            >
              {/* Background Image */}
              <img 
                src={ferry.img} 
                alt={ferry.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/10 to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                        {ferry.tag}
                    </span>
                    <span className="text-[9px] font-bold text-blue-300 uppercase flex items-center gap-1">
                        <IoSpeedometerOutline size={12}/> {ferry.speed}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => handleWhatsApp(ferry.name)}
                    className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg translate-y-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <IoLogoWhatsapp size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50">{ferry.type}</p>
                    <h3 className="text-4xl font-black text-white tracking-tighter">
                      {ferry.name}
                    </h3>
                  </div>

                  <Link href={`/ferries/${ferry.slug}`}>
                    <button className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] group/link hover:text-blue-400 transition-colors">
                      View Schedule 
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

export default FerryHub;