"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  IoArrowForwardCircleOutline, 
  IoLogoWhatsapp,
  IoCarOutline,
  IoBicycleOutline,
  IoBedOutline,
  IoShieldCheckmarkOutline,
  IoCheckmarkCircle
} from "react-icons/io5";

const RentalHub = () => {
  const rentals = [
    { 
      name: "Car Rental", 
      slug: "car-rental", 
      icon: <IoCarOutline size={24} />,
      tag: "Chauffeur Driven", 
      features: ["Airport Pickup", "All Island Sightseeing", "Professional Drivers"],
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800" 
    },
    { 
      name: "Bike Rental", 
      slug: "bike-rental", 
      icon: <IoBicycleOutline size={24} />,
      tag: "Explore Freely", 
      features: ["Scooty & Bikes", "Daily Rentals", "Helmets Included"],
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800" 
    },
    { 
      name: "Hotels", 
      slug: "hotels", 
      icon: <IoBedOutline size={24} />,
      tag: "Curated Stays", 
      features: ["3-Star to Luxury", "Beachside Resorts", "Best Rates Guaranteed"],
      img: "https://pix10.agoda.net/hotelImages/41448959/-1/10d940a3ce8547c8b5d8338bd3c9dcee.jpg?ce=0&s=702x392" 
    },
  ];

  const handleWhatsApp = (name) => {
    const text = `Hi Kadalarasan tour & travels ! I'm looking for *${name}* services. Can you share the categories and pricing?`;
    window.open(`https://wa.me/918056625577?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-34 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
              <IoShieldCheckmarkOutline size={18} /> 
              Travel Logistics
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              Stay & <span className="text-blue-600">Drive.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold max-w-xs text-right hidden md:block uppercase tracking-widest text-[10px] leading-relaxed">
            From luxury stays to wheels for the road, we manage your comfort so you can focus on the view.
          </p>
        </div>

        {/* Rentals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rentals.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[3.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-6 right-6">
                    <button 
                      onClick={() => handleWhatsApp(item.name)}
                      className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <IoLogoWhatsapp size={24} />
                    </button>
                </div>
                <div className="absolute bottom-6 left-8 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-2xl text-white">
                    {item.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 space-y-8 flex-grow flex flex-col">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{item.tag}</span>
                  <h3 className="text-4xl font-black text-blue-950 tracking-tight">{item.name}</h3>
                </div>

                <ul className="space-y-4 flex-grow">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-500">
                      <IoCheckmarkCircle className="text-blue-500" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                  <button  onClick={() => handleWhatsApp(item.name)} className="w-full flex items-center justify-between bg-blue-50 text-blue-950 px-8 py-5 rounded-[2rem] font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all group/link">
                    Explore Options 
                    <IoArrowForwardCircleOutline size={24} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Support Info */}
        <div className="mt-16 flex justify-center">
            <div className="bg-white px-8 py-4 rounded-full border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    24/7 Roadside Assistance & Local Support
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RentalHub;