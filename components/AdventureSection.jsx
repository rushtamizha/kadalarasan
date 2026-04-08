"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { 
  Waves, 
  Anchor, 
  Wind, 
  Fish, 
  Navigation as NavIcon, 
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";

const AdventureSection = () => {
  const activities = [
    {
      title: "Scuba Diving",
      desc: "Explore vibrant coral reefs and colorful marine life with certified instructors.",
      icon: <Waves size={20} />,
      image: "/adventures/Blog-Header-Diver-School-of-Fish.jpg",
    },
    {
      title: "Parasailing",
      desc: "Fly high above turquoise waters and enjoy breathtaking aerial views of islands.",
      icon: <Wind size={20} />,
      image: "/adventures/Parasailing-in-Florida.webp",
    },
    {
      title: "Sea Walk",
      desc: "Walk on the ocean floor with a special helmet and witness marine life up close.",
      icon: <Anchor size={20} />,
      image: "/adventures/bora-bora-aqua-safari.webp",
    },
    {
      title: "Game Fishing",
      desc: "Try your luck catching exotic fish in deep Andaman waters with experts.",
      icon: <Fish size={20} />,
      image: "/adventures/luxury-resort-maldives-finolhu-big-game-fishing-02.webp",
    },
    {
      title: "Kayaking",
      desc: "Paddle through calm waters and explore serene mangroves at your own pace.",
      icon: <NavIcon size={20} />,
      image: "/adventures/tourist-enjoying-kayaking-on-chapora-river.png",
    },
  ];

  const handleBookActivity = (name) => {
    const text = `Hi Kadalarasan tour & travels ! I want to book the *${name}* activity. Please share the slots and pricing.`;
    window.open(`https://wa.me/918056625577?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] border border-blue-100">
              <Waves size={14} className="animate-pulse" />
              Dive Into Adventure
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-blue-950 tracking-tighter">
              Unforgettable <br />
              <span className="text-blue-600 font-outline-2">Water Experiences</span>
            </h2>
          </div>

        </div>

        {/* Swiper Activity Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".adv-prev",
            nextEl: ".adv-next",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {activities.map((act, i) => (
            <SwiperSlide key={i}>
              <motion.div 
                className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-900"
              >
                {/* Activity Image */}
                <img 
                  src={act.image} 
                  alt={act.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                />

                {/* Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-300">
                      {act.icon}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">{act.title}</h3>
                  </div>
                  
                  <p className="text-blue-100/80 leading-relaxed mb-8 font-medium">
                    {act.desc}
                  </p>

                  {/* CTA Button */}
                  <button 
                    onClick={() => handleBookActivity(act.title)}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-white text-blue-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 group/btn"
                  >
                    Book Activity
                    <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>

                {/* Floating WhatsApp Quick Icon */}
                <button 
                  onClick={() => handleBookActivity(act.title)}
                  className="absolute top-6 right-6 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  <MessageCircle size={24} fill="currentColor" />
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default AdventureSection;