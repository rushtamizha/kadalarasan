"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const AutoSlidingGallery = () => {
  const galleryImages = [
    { src: "/gallery/611c9fe56325c154_blog28.jpg", label: "01" },
    { src: "/gallery/2020011381-1024x768.jpg", label: "02" },
    { src: "/gallery/2025092135.jpg", label: "03" },
    { src: "/gallery/Andaman-Isles-of-Paradise_Radhanagar-Beach_2.webp", label: "04" },
    { src: "/gallery/andaman.avif", label: "05" },
    { src: "/gallery/andamanhgg.jpg", label: "06" },
    { src: "/gallery/b4.jpg", label: "07" },
    { src: "/gallery/ross-island-andamans-india-37673933.webp", label: "08" },
    { src: "/DEERS_IN_ROSS_ISLAND_IN_ANDAMAN_AND_NICOBAR_ISLAND.jpg", label: "09" },
  ];

  return (
    <section id="gallery" className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-3">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
              Kadal Arasan Visuals
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              Island <span className="text-blue-600">Snapshots.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold max-w-xs text-right hidden md:block uppercase tracking-widest text-[10px]">
            A continuous loop of paradise, captured across the archipelago.
          </p>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="w-full cursor-grab active:cursor-grabbing">
        <Swiper
          loop={true}
          speed={6000} // Speed of the transition (higher = smoother for ticker)
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          slidesPerView={1.5}
          spaceBetween={20}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 30 },
            1440: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          className="premium-gallery-swiper"
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden group bg-blue-950 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50">
                <img
                  src={img.src}
                  alt="Andaman Gallery"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Index Number Badge */}
                <div className="absolute top-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center text-white text-[10px] font-black uppercase z-10">
                  {img.label}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AutoSlidingGallery;