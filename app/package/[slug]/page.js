"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoArrowForwardCircleOutline,
  IoLogoWhatsapp,
  IoTimeOutline,
  IoSparklesOutline,
  IoWalletOutline,
  IoFilterOutline,
} from "react-icons/io5";

const PackageHub = () => {
  const [activeTab, setActiveTab] = useState("Honeymoon");

  const categories = ["Honeymoon", "Group", "Family", "Glimpses"];

  const allPackages = {
    Honeymoon: [
      {
        name: "Mesmerizing Honeymoon",
        duration: "3 Nights / 4 Days",
        price: "₹24,500",
        img: "/package/honeymoon-package/honymoon1.jpg",
      },
      {
        name: "Romantic Holiday",
        duration: "4 Nights / 5 Days",
        price: "₹32,000",
        img: "/package/honeymoon-package/honymoon2.jpg",
      },
      {
        name: "Honeymoon Pleasure",
        duration: "5 Nights / 6 Days",
        price: "₹45,000",
        img: "/package/honeymoon-package/honymoon3.jpg",
      },
      {
        name: "Exotic Honeymoon Beaches",
        duration: "6 Nights / 7 Days",
        price: "₹52,000",
        img: "/package/honeymoon-package/honymoon4.jpg",
      },
      {
        name: "Island Paradise",
        duration: "7 Nights / 8 Days",
        price: "₹65,000",
        img: "/package/honeymoon-package/honymoon5.jpg",
      },
      {
        name: "Island Delight",
        duration: "8 Nights / 9 Days",
        price: "₹74,000",
        img: "/package/honeymoon-package/honymoon6.jpg",
      },
    ],
    Group: [
      {
        name: "Mesmerizing Group",
        duration: "3 Nights / 4 Days",
        price: "₹18,500",
        img: "/package/group-package/group1.jpg",
      },
      {
        name: "Group Holiday",
        duration: "4 Nights / 5 Days",
        price: "₹24,000",
        img: "/package/group-package/group2.jpg",
      },
      {
        name: "Andaman Group Pleasure",
        duration: "5 Nights / 6 Days",
        price: "₹30,000",
        img: "/package/group-package/group3.jpg",
      },
      {
        name: "Exotic Group Package",
        duration: "6 Nights / 7 Days",
        price: "₹38,000",
        img: "/package/group-package/group4.jpg",
      },
      {
        name: "Group Paradise",
        duration: "7 Nights / 8 Days",
        price: "₹45,000",
        img: "/package/group-package/group5.jpg",
      },
      {
        name: "Group Delight",
        duration: "8 Nights / 9 Days",
        price: "₹52,000",
        img: "/package/group-package/group6.jpg",
      },
    ],
    Family: [
      {
        name: "Mesmerizing Family",
        duration: "3 Nights / 4 Days",
        price: "₹22,000",
        img: "/package/family-package/family1.jpg",
      },
      {
        name: "Family Holiday",
        duration: "4 Nights / 5 Days",
        price: "₹29,000",
        img: "/package/family-package/family2.jpg",
      },
      {
        name: "Andaman Family Pleasure",
        duration: "5 Nights / 6 Days",
        price: "₹36,000",
        img: "/package/family-package/family3.jpg",
      },
      {
        name: "Exotic Family",
        duration: "6 Nights / 7 Days",
        price: "₹44,000",
        img: "/package/family-package/family4.jpg",
      },
      {
        name: "Family Island Paradise",
        duration: "7 Nights / 8 Days",
        price: "₹52,000",
        img: "/package/family-package/family5.jpg",
      },
      {
        name: "Family Island Delight",
        duration: "8 Nights / 9 Days",
        price: "₹60,000",
        img: "/package/family-package/family6.jpg",
      },
    ],
    Glimpses: [
      {
        name: "Mesmerizing Package",
        duration: "3 Nights / 4 Days",
        price: "₹16,000",
        img: "/package/glimpses-package/glimpses1.jpg",
      },
      {
        name: "Andaman Island View",
        duration: "4 Nights / 5 Days",
        price: "₹22,000",
        img: "/package/glimpses-package/glimpses2.jpg",
      },
      {
        name: "Andaman Pleasure",
        duration: "5 Nights / 6 Days",
        price: "₹28,000",
        img: "/package/glimpses-package/glimpses3.jpg",
      },
      {
        name: "Exotic Beaches",
        duration: "6 Nights / 7 Days",
        price: "₹34,000",
        img: "/package/glimpses-package/glimpses4.jpg",
      },
      {
        name: "Andaman Paradise",
        duration: "7 Nights / 8 Days",
        price: "₹41,000",
        img: "/package/glimpses-package/glimpses5.jpg",
      },
      {
        name: "Island Delight",
        duration: "8 Nights / 9 Days",
        price: "₹48,000",
        img: "/package/glimpses-package/glimpses6.jpg",
      },
    ],
  };

  const handleWhatsApp = (name, duration) => {
    const text = `Hi Kadalarasan tour & travels ! I'm interested in the *${name}* (${duration}). Can you share the full itinerary?`;
    window.open(
      `https://wa.me/918056625577?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  const createSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="py-24 bg-white overflow-hidden" id="packages">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
              <IoSparklesOutline size={18} /> Exclusive Tour Plans
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-none">
              Special <span className="text-blue-600">Packages</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest">
              <IoWalletOutline />
              <span>Best Price Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-3 mb-16 p-2 bg-gray-50 rounded-[2.5rem] w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${
                activeTab === cat
                  ? "bg-blue-600 text-white shadow-xl scale-105"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {allPackages[activeTab].map((pkg, i) => (
              <motion.div
                key={activeTab + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="group relative h-[420px] rounded-[3rem] overflow-hidden shadow-2xl bg-blue-950"
              >
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                />
                {/* Darker Gradient for better text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[8px] font-black uppercase tracking-widest text-white">
                      {activeTab} Special
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-blue-400">
                        <IoTimeOutline size={14} />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/60">
                          {pkg.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
                        {pkg.name}
                      </h3>
                    </div>

                    {/* Actions: Primary is WhatsApp, Secondary is Link */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <button
                        onClick={() => handleWhatsApp(pkg.name, pkg.duration)}
                        className="flex-grow flex items-center justify-center gap-2 bg-[#12ac4a] text-white px-4 py-3 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-[#0d6f1d] transition-all shadow-lg"
                      >
                        <IoLogoWhatsapp size={18} /> Get Quote
                      </button>

                      <Link
                        href={`/package/${createSlug(pkg.name)}`}
                        className="w-fit"
                      >
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PackageHub;
