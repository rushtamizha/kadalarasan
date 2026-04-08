"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { 
  User, 
  Phone, 
  Hotel, 
  Package,
  MessageSquare, 
  ChevronRight,
  Sparkles
} from "lucide-react";

const AndamanHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: " Special",
    hotelCategory: "4 Star (Premium)",
    adults: 2,
    infants: 0,
    rooms: 1,
    message: ""
  });

  const bgImages = [
    "https://www.andamanislands.com/uploads/andamanislands/blog/main/675fb84b6fd30106_andaman_tour_packages_from_chennai.jpg",
    "https://www.viacation.com/_next/image?url=https%3A%2F%2Fmedia.viacation.com%2F5d3534f4d4b06aa7cb2ef.jpg&w=2560&q=75",
    "https://www.gokitetours.com/wp-content/uploads/2024/09/andaman-tour-packages-from-india.webp",
    "https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fd1zvcmhypeawxj.cloudfront.net%2Fmisc%2Fcover_mobile%2Fandaman-mobile-webp-c26b998102-1752187289665.webp&w=3840&q=75"
  ];
const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `*New Booking Inquiry*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Package:* ${formData.package}%0A*Hotel:* ${formData.hotelCategory}%0A*Guests:* ${formData.adults} Adults, ${formData.infants} Infants%0A*Rooms:* ${formData.rooms}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918056625577?text=${text}`, "_blank");
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-34 pb-12 overflow-hidden bg-gray-50">
      
      {/* 1. Swiper Background Looper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          speed={3000} // Slow, elegant fade
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
        >
          {bgImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img 
                src={img} 
                className="w-full h-full object-cover"
                alt={`Andaman Scene ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* PREMIUM READABILITY LAYER: High Opacity White */}
        <div className="absolute inset-0 bg-white/50 z-1" />

        {/* GRADIENT FADE: Bottom to Top */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-50 z-2" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Lighter Emotional Content */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-blue-950 space-y-6"
        >
          <span className="inline-flex px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-[0.3em]  items-center gap-2 w-fit bg-blend-color shadow-sm">
            <Sparkles size={14} />
            Premium Travel Partner
          </span>
          <h2 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-blue-950">
            Andaman <br /> 
            <span className="text-blue-600 drop-shadow-sm">
              Your Paradise.
            </span>
          </h2>
          <p className="text-lg text-gray-800 max-w-md leading-relaxed font-semibold">
            Discover turquoise waters, historical landmarks, and personalized luxury itineraries crafted just for you.
          </p>
          
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/100?img=${i+15}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-gray-900">
              <span className="text-blue-600 text-lg">500+</span> Explorers last month
            </p>
          </div>
        </motion.div>

        {/* RIGHT: High-End Light Theme Booking Form */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 border border-white p-8 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,119,182,0.1)]"
        >
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative col-span-2 lg:col-span-1">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" size={18} />
                <input 
                  type="text" placeholder="Full Name" required
                  className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl py-4 pl-12 pr-4 text-blue-950 placeholder:text-blue-900/40 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-inner-sm"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              {/* Phone */}
              <div className="relative col-span-2 lg:col-span-1">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" size={18} />
                <input 
                  type="tel" placeholder="WhatsApp Number" required
                  className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl py-4 pl-12 pr-4 text-blue-950 placeholder:text-blue-900/40 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-inner-sm"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Package Select */}
              <div className="relative">
                <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" size={18} />
                <select 
                  className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl py-4 pl-12 pr-4 text-blue-950 appearance-none focus:outline-none shadow-inner-sm"
                  onChange={(e) => setFormData({...formData, package: e.target.value})}
                >
                  
                  <option className="bg-white">Family Pkg</option>
                  <option className="bg-white">Adventure Pkg</option>
                </select>
              </div>
              {/* Hotel Category */}
              <div className="relative">
                <Hotel className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" size={18} />
                <select 
                  className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl py-4 pl-12 pr-4 text-blue-950 appearance-none focus:outline-none shadow-inner-sm"
                  onChange={(e) => setFormData({...formData, hotelCategory: e.target.value})}
                >
                  <option className="bg-white">5 Star Luxury</option>
                  <option className="bg-white">4 Star Premium</option>
                  <option className="bg-white">3 Star Deluxe</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Adults */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-3 flex flex-col items-center shadow-inner-sm">
                <span className="text-[10px] uppercase font-bold text-blue-600">Adults</span>
                <input type="number" defaultValue={2} className="bg-transparent text-center text-blue-950 font-bold w-full focus:outline-none" onChange={(e) => setFormData({...formData, adults: e.target.value})}/>
              </div>
              {/* Infants */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-3 flex flex-col items-center shadow-inner-sm">
                <span className="text-[10px] uppercase font-bold text-blue-600">Infants</span>
                <input type="number" defaultValue={0} className="bg-transparent text-center text-blue-950 font-bold w-full focus:outline-none" onChange={(e) => setFormData({...formData, infants: e.target.value})}/>
              </div>
              {/* Rooms */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-3 flex flex-col items-center shadow-inner-sm">
                <span className="text-[10px] uppercase font-bold text-blue-600">Rooms</span>
                <input type="number" defaultValue={1} className="bg-transparent text-center text-blue-950 font-bold w-full focus:outline-none" onChange={(e) => setFormData({...formData, rooms: e.target.value})}/>
              </div>
            </div>

            {/* Message Area */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-blue-400" size={18} />
              <textarea 
                placeholder="Any special requests? (e.g. Birthday surprise, Scuba booking)"
                className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl py-4 pl-12 pr-4 text-blue-950 h-24 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-inner-sm"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* Premium Light CTA Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
            >
              PLAN MY DREAM TRIP
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AndamanHero;