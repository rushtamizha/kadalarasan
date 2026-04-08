"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  IoHeartOutline, 
  IoBoatOutline, 
  IoWaterOutline, 
  IoEarthOutline,
  IoCheckmarkCircle
} from "react-icons/io5";

// Import the Quote icon from Bootstrap icons (bi) or FontAwesome (fa)
import { BiSolidQuoteLeft } from "react-icons/bi"; 
import { HiArrowSmallRight } from "react-icons/hi2";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION: Minimalist & Atmospheric */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-blue-950">
        <img 
          src="https://www.holidaymonk.com/wp-content/uploads/2017/08/1267_Andaman-Tour-Package.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          alt="Andaman Soul"
        />
        <div className="relative z-10 text-center space-y-6 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-black uppercase tracking-[0.3em]"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter"
          >
            Discover the <span className="text-blue-400">Soul</span> <br /> of Andaman
          </motion.h1>
        </div>
      </section>

      {/* 2. THE SUTRULA STORY: Content + Visual Offset */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
               <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000" alt="Island Life" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-[3rem] -z-10 hidden lg:block" />
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-blue-950 tracking-tight leading-tight">
              Our Passion for <br />the <span className="text-blue-600 italic font-serif">Islands</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We were born on an island where time seems to pause. For us, this isn’t just home — it’s a living story. 
              <span className="font-bold text-blue-900"> Kadal Arasan</span> came to life as a heartfelt dream to share our island’s soul with the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                { icon: <IoWaterOutline size={24}/>, text: "Beaches & Serenity" },
                { icon: <IoBoatOutline size={24}/>, text: "Thrilling Adventures" },
                { icon: <IoHeartOutline size={24}/>, text: "Rich Island Culture" },
                { icon: <IoEarthOutline size={24}/>, text: "Eco-Conscious Travel" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                  <div className="text-blue-600">{item.icon}</div>
                  <span className="font-black text-blue-950 text-xs uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FOUNDER'S JOURNEY: High-End Narrative */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-24" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-center lg:text-left">
               <div className="relative inline-block">
                  <div className="w-64 h-80 rounded-[3rem] overflow-hidden border-4 border-blue-400/30">
                    <img src="/owner.png" alt="Mohan Kumar Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-3xl shadow-xl">
                     <p className="text-xs font-black uppercase tracking-widest">Founder</p>
                     <p className="text-xl font-bold">Mohan Kumar</p>
                  </div>
               </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              <BiSolidQuoteLeft size={60} className="text-blue-500 opacity-30" />
              <h3 className="text-3xl lg:text-4xl font-black italic font-serif">
                "Kadal Arasan is the lifelong passion of a small boy blessed to be born in paradise."
              </h3>
              <p className="text-blue-100/70 text-lg leading-relaxed">
                While other children dreamed of cities, Mohan Kumar’s world was the endless blue. What began as a boy’s curiosity has grown into a heartfelt mission to share the authentic Andaman — not just as a destination, but as a living story.
              </p>
              <button className="px-8 py-4 bg-white text-blue-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-400 hover:text-white transition-all shadow-xl">
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION: Modern Bento Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-12 rounded-[3.5rem] bg-gray-50 border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <IoBoatOutline size={30} />
              </div>
              <h4 className="text-3xl font-black text-blue-950 uppercase tracking-tighter">Our Mission</h4>
              <p className="text-gray-500 text-lg leading-relaxed">
                To create journeys that feel personal, authentic, and unforgettable. We craft memories that last forever, not just itineraries.
              </p>
              <ul className="space-y-3">
                {["Authentic Travel", "Adventure & Comfort", "Soulful Experiences"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-blue-900 font-bold">
                    <IoCheckmarkCircle className="text-blue-500" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-12 rounded-[3.5rem] bg-blue-600 text-white space-y-6 shadow-2xl shadow-blue-200"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                <IoEarthOutline size={30} />
              </div>
              <h4 className="text-3xl font-black uppercase tracking-tighter">Our Vision</h4>
              <p className="text-blue-100 text-lg leading-relaxed">
                To become the world's most trusted guide for Andaman while protecting the paradise we call home for future generations.
              </p>
              <ul className="space-y-3">
                {["Sustainable Tourism", "Local Empowerment", "Island Preservation"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-blue-50 font-bold">
                    <IoCheckmarkCircle className="text-blue-200" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA: Final Call to Action */}
      <section className="pb-24 pt-12 container mx-auto px-4 hidden">
        <div className="bg-blue-50 rounded-[4rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter">
              Your Andaman Adventure <br /> Starts <span className="text-blue-600 italic">Here</span>.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-semibold">
              Let us plan every detail so you can focus on making memories. From pristine beaches to thrilling water sports.
            </p>
            <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-3 mx-auto">
              Book Your Trip <HiArrowSmallRight size={24}/>
            </button>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-blue-100/50 select-none -z-0">
             ANDAMAN
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;