"use client";
import React from "react";
import { motion } from "framer-motion";
import { Compass, Palmtree, MapPinned, ArrowRight } from "lucide-react";

const DreamTripSection = () => {
  const cards = [
    {
      icon: <Compass className="text-blue-600" size={28} />,
      title: "Best Travel Agency",
      desc: "We cover every detail of this incredible archipelago so you can travel stress-free.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: <Palmtree className="text-blue-600" size={28} />,
      title: "Beautiful Destination",
      desc: "Perfect for romantic getaways or family vacations with world-class beaches and local cuisine.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-14 bg-white relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest border border-blue-100">
                <MapPinned size={14} />
                Explore the Unexplored
              </span>
              <h2 className="text-5xl lg:text-7xl font-black text-blue-950 leading-[1.05] tracking-tighter">
                Dream Your <br />
                <span className="text-blue-600">Next Trip</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium italic">
                Discover when & where you want to go.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
              Andaman is on everyone's bucket list, but choosing the right partner is key. 
              <span className="text-blue-900 font-bold"> Kadalarasan tour & travels </span> takes the tension out of planning, making your island escape truly memorable.
            </p>
          </motion.div>

          {/* RIGHT: Modern Offset Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 lg:pt-0">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`group relative p-8 rounded-[2.5rem] bg-white border border-gray-100  transition-all duration-500 ${i === 1 ? 'md:mt-12' : ''}`}
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 
                hover:text-white transition-all duration-500">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-black text-blue-950 mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-8">
                  {card.desc}
                </p>

                {/* Subtle Image Reveal */}
                <div className="relative h-40 rounded-3xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Decorative Dot Pattern */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DreamTripSection;