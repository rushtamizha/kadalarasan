"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Clock,
  Star,
  MapPin,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const PackageSection = () => {
  const packages = [
    {
      title: "Andaman Family Pleasure",
      duration: "5 Nights / 6 Days",
      price: "32,000",
      image: "/package/family-package/family1.jpg",
      tag: "Family Choice",
    },
    {
      title: "Exotic Family Package",
      duration: "6 Nights / 7 Days",
      price: "38,500",
      image: "/package/family-package/family2.jpg",
      tag: "Luxury",
    },
    {
      title: "Group Holiday Package",
      duration: "4 Nights / 5 Days",
      price: "15,900",
      image: "/package/group-package/group1.jpg",
      tag: "Group Deal",
    },
    {
      title: "Andaman Pleasure",
      duration: "5 Nights / 6 Days",
      price: "15,900",
      image: "/package/group-package/group2.jpg",
      tag: "Trending",
    },
    {
      title: "Mesmerizing Glimpses Package",
      duration: "3 Nights / 4 Days",
      price: "15,900",
      image: "/package/glimpses-package/glimpses1.jpg",
      tag: "Trending",
    },
    {
      title: "Group Delight Package",
      duration: "8 Nights / 9 Days",
      price: "15,900",
      image: "/package/glimpses-package/glimpses2.jpg",
      tag: "Trending",
    },
  ];

  const handleWhatsAppInquiry = (title, duration) => {
    const text = `Hi Kadalarasan tour & travels ! I am interested in the *${title}* (${duration}). Could you please share more details and pricing?`;
    window.open(
      `https://wa.me/918056625577?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with Custom Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest shadow-sm">
              <TrendingUp size={14} />
              Most Popular Tours
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-blue-950 tracking-tighter">
              Curated <span className="text-blue-600">Andaman</span> Experiences
            </h2>
          </div>

          <div className="hidden gap-3 ">
            <button className="pkg-prev w-14 h-14 rounded-full border border-blue-100 flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
              <ChevronLeft size={24} />
            </button>
            <button className="pkg-next w-14 h-14 rounded-full border border-blue-100 flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".pkg-prev",
            nextEl: ".pkg-next",
          }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-14 !px-2"
        >
          {packages.map((pkg, i) => (
            <SwiperSlide key={i}>
              <motion.div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 transition-all duration-500 group h-full flex flex-col ">
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm z-10 border border-blue-50">
                    {pkg.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-blue-600/70">
                      <Clock size={14} strokeWidth={3} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star
                        size={12}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="text-[10px] font-black text-yellow-700">
                        5.0
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-blue-950 leading-tight mb-4 flex-grow group-hover:text-blue-600 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 mb-8">
                    <MapPin size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Andaman Archipelago
                    </span>
                  </div>

                  {/* Full Width WhatsApp Button */}
                  <div className="pt-6 border-t border-gray-50 mt-auto">
                    <button
                      onClick={() =>
                        handleWhatsAppInquiry(pkg.title, pkg.duration)
                      }
                      className="w-full h-16 rounded-[1.5rem] bg-[#10893c] text-white flex items-center justify-center gap-3 hover:bg-[#128c35] transition-all active:scale-[0.98] relative overflow-hidden group/btn"
                    >
                      <MessageCircle
                        size={22}
                        fill="currentColor"
                        className="group-hover/btn:rotate-12 transition-transform"
                      />
                      <span className="font-black text-xs uppercase tracking-[0.2em]">
                        Quick Inquiry
                      </span>

                      {/* Subtle Shine Effect */}
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover/btn:animate-shine" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CSS for Swiper Overrides */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 6px;
          border-radius: 4px;
          background: #d1d5db;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 30px;
          background: #2563eb;
        }
      `}</style>
    </section>
  );
};

export default PackageSection;
