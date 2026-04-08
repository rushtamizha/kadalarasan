"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  MapPin,
  Ship,
  Waves,
  Car,
  Package,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const AndamanNavbar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const WHATSAPP_NUMBER = "918056625577";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to convert names to slugs (e.g., "Port Blair" -> "port-blair")
  const createSlug = (text) => {
    return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
  };

  const handleWhatsApp = (item = "General Inquiry") => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in the ${item} for my Andaman trip.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const navData = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    {
      name: "Destination",
      slug: "destination", // Used for the URL base
      icon: <MapPin size={14} />,
      items: [
        "Port Blair", "Havelock", "Neil", "Baratang", "Diglipur", 
        "Barren Island", "Mayabunder", "Little Andaman", "Rangat",
      ],
    },
    {
      name: "Package",
      slug: "package", // Used for the URL base
      icon: <Package size={14} />,
      items: [
        "Honeymoon Package", "Group Package", "Family Package", "Glimpses Of Andaman",
      ],
    },
    {
      name: "Water Sports",
      slug: "water-sports",
      icon: <Waves size={14} />,
      items: ["Scuba Diving", "Sea Kart", "Parasailing", "Jet Ski Ride", "Snorkelling", "Sofa Ride"],
    },
    {
      name: "Ferries",
      slug: "ferries",
      icon: <Ship size={14} />,
      items: ["Makruzz", "Nautika", "Green Ocean", "ITT Majestic", "Government Ferry"],
    },
    {
      name: "Rentals",
      slug: "rentals",
      icon: <Car size={14} />,
      items: ["Car Rental", "Bike Rental", "Hotels"],
    },
  ];

  return (
    <nav className="fixed top-5 w-full flex justify-center px-4 z-[999]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-7xl  rounded-full p-3 flex items-center justify-between shadow-sm transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-md border-white/40" : "bg-white border-slate-300"
        }`}
      >
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group px-4">
          <div className="relative h-13 w-13 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover rounded-full" />
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <h1 className={`text-sm sm:text-xl font-black tracking-tighter uppercase ${scrolled ? "text-blue-900" : "text-blue-800"}`}>
              Kadalarasan <span className="text-blue-500">tours </span>
            </h1>
            <p className="text-[9px] font-bold tracking-[0.3em] text-gray-500 uppercase">Escape to Paradise</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center space-x-1 px-4">
          {navData.map((menu, idx) => (
            <div
              key={idx}
              className="relative px-3 py-2 rounded-full hover:bg-blue-100/40 transition-all cursor-pointer group"
              onMouseEnter={() => setActiveMenu(menu.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link href={menu.link || "#"}>
                <span className="text-sm font-bold text-slate-700 hover:text-blue-500 flex items-center gap-1">
                  {menu.name}
                  {menu.items && <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform duration-300" />}
                </span>
              </Link>

              <AnimatePresence>
                {activeMenu === menu.name && menu.items && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-6 w-64 bg-white/95 backdrop-blur-xl border border-blue-50 shadow-2xl rounded-[2rem] p-4 flex flex-col gap-1 z-[1000]"
                  >
                    {menu.items.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          const route = `/${menu.slug}/${createSlug(item)}`;
                          router.push(route);
                          setActiveMenu(null);
                        }}
                        className="text-left px-4 py-3 text-[13px] font-bold text-slate-700 hover:bg-blue-600 hover:text-white rounded-xl transition-all"
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT CTA */}
        <div className="hidden lg:block px-2">
          <button
            onClick={() => {
              router.push('/contact')
              setIsMobileOpen(false)
            }}
            className="bg-blue-900 text-white px-8 py-3 rounded-full text-sm font-black hover:bg-blue-600 transition-all shadow-lg flex items-center gap-2"
          >
            <MessageCircle size={16} /> Contact Us
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden h-12 w-12 bg-white rounded-full flex items-center justify-center text-blue-900 shadow-sm ">
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="lg:hidden fixed inset-4 top-26 bg-white rounded-[3rem] shadow-2xl border p-8 overflow-y-auto z-50"
          >
            <div className="flex flex-col gap-8">
              {navData.map((menu, idx) => (
                <div key={idx} className="border-b pb-4">
                  <h3 className="text-blue-700 font-black text-[10px] uppercase tracking-widest mb-4 opacity-50 flex items-center gap-2">
                    {menu.icon} {menu.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {menu.items ? (
                      menu.items.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            router.push(`/${menu.slug}/${createSlug(item)}`);
                            setIsMobileOpen(false);
                          }}
                          className="text-left text-sm font-bold text-gray-800 hover:text-blue-500 "
                        >
                          {item}
                        </button>
                      ))
                    ) : (
                      <Link href={menu.link} onClick={() => setIsMobileOpen(false)} className="text-sm font-bold text-gray-800 hover:text-blue-500">
                        {menu.name}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              <button
            onClick={() => {
              router.push('/contact')
              setIsMobileOpen(false)
            }}
            className="bg-blue-900 text-white px-8 py-3 rounded-full text-sm font-black hover:bg-blue-600 transition-all shadow-lg flex items-center gap-2"
          >
            <MessageCircle size={16} /> Contact Us
          </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AndamanNavbar;