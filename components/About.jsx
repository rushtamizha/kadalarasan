"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Map, Anchor, Star, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Map className="text-blue-600" size={24} />,
      title: "Local Experts",
      desc: "Our team lives and breathes the Andamans, curating hidden gems just for you.",
    },
    {
      icon: <Anchor className="text-blue-600" size={24} />,
      title: "Seamless Travel",
      desc: "From private ferries to luxury stays, we handle every detail of your journey.",
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={24} />,
      title: "Verified Stays",
      desc: "We partner only with the top-rated hotels and resorts across the islands.",
    },
    {
      icon: <Star className="text-blue-600" size={24} />,
      title: "Tailor-Made",
      desc: "Personalized itineraries designed to match your pace and your passion.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT: Image Stack */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden   border-white">
              <img 
                src="https://www.andamanislands.com/uploads/andamanislands/blog/main/675fb84b6fd30106_andaman_tour_packages_from_chennai.jpg" 
                alt="Andaman Experience"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-0 bg-white p-6 rounded-3xl  z-20 border border-blue-50"
            >
              <p className="text-4xl font-black text-blue-600">10+</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Expertise</p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-blue-950 leading-tight">
                Crafting Your <br />
                <span className="text-blue-500 italic">Unforgettable</span> Journey
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Welcome to <span className="font-bold text-blue-900">Kadalarasan tour & travels </span>, your trusted travel partner. We specialize in tailor-made tours that showcase the extraordinary wonders of these tropical islands.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-blue-950 mb-2">{f.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;