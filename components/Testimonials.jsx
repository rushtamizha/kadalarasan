"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star, CheckCircle2, MessageSquareHeart } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      name: "Arun Kumar",
      location: "Chennai, Tamil Nadu",
      text: "The best travel partner for Andaman! They handled our ferry tickets and Scuba diving perfectly. No hidden costs, just pure memories.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=arun",
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "Our Day was magical. Havelock stays suggested by Kadalarasan tour & travels  were breathtaking. Highly recommend their premium packages!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=priya",
    },
    {
      name: "Rajesh V.",
      location: "Bangalore",
      text: "Seamless experience. From airport pickup to the last day, the coordination was professional. The local guides were very friendly.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=rajesh",
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      text: "The customized family package was perfect for my parents. Everything was slow-paced and comfortable. Thank you for the care!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sneha",
    }
  ];

  return (
    <section className="py-24 bg-white  overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <MessageSquareHeart size={14} />
            Guest Stories
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-blue-950 tracking-tighter">
            What Our <span className="text-blue-600">Travelers</span> Say
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            Join 500+ happy explorers who discovered paradise with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-20 !px-4"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <motion.div 
                className="bg-white p-10 rounded-[3rem] border border-blue-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,119,182,0.1)] transition-all duration-500 relative group h-full flex flex-col"
              >
                {/* Floating Icon */}
                <div className="absolute  -top-6 left-10 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Quote size={20} fill="currentColor" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed text-lg mb-8 italic font-medium flex-grow">
                  "{review.text}"
                </p>

                {/* User Info Section */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="relative">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-100 p-0.5 shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                      <CheckCircle2 size={16} className="text-green-500 fill-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-blue-950 text-lg leading-tight">
                      {review.name}
                    </h4>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-0.5">
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
           <div className="flex items-center gap-2 font-black text-gray-500">
              <span className="text-2xl">G</span> Google Reviews
           </div>
           <div className="flex items-center gap-2 font-black text-gray-500">
              <span className="text-2xl italic">Trip</span>Advisor
           </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 30px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;