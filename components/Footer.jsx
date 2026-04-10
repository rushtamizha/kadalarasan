"use client";
import React from "react";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { HiArrowSmallRight } from "react-icons/hi2";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Your provided navData
  const navData = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    {
      name: "Destination",
      slug: "destination",
      items: ["Port Blair", "Havelock", "Neil", "Barren Island"], // Filtered for footer brevity
    },
    {
      name: "Package",
      slug: "package",
      items: [
        "Group Package",
        "Family Package",
        "Glimpses Of Andaman",
      ],
    },
    {
      name: "Water Sports",
      slug: "water-sports",
      items: ["Scuba Diving", "Sea Kart", "Parasailing"],
    },
    {
      name: "Ferries",
      slug: "ferries",
      items: ["Makruzz", "Nautika", "Green Ocean"],
    },
  ];

  // Utility to create clean URLs (e.g., "Port Blair" -> "port-blair")
  const formatSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <footer className="bg-white pt-24 pb-12 relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-20">
          {/* Brand & Identity */}
          <div className="col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-blue-950 tracking-tighter">
                Kadal Arasan <span className="text-blue-600">Tours.</span>
              </h2>
              <div className="flex items-start gap-3 text-gray-500 max-w-xs">
                <IoLocationOutline
                  size={20}
                  className="text-blue-600 shrink-0 mt-1"
                />
                <p className="text-[11px] font-bold leading-relaxed uppercase tracking-widest">
                  Fisheries Colony, Junglighat,
                  <br />
                  Sri Vijayapuram, S.Andaman,
                  <br />
                  744101
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kadal_arasan_tours"
                target="_blank"
                className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
              >
                <IoLogoInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Dynamic Link Columns from navData */}
          {navData
            .filter((nav) => nav.items)
            .map((category) => (
              <div key={category.name} className="space-y-7">
                <h4 className="font-black text-blue-950 uppercase tracking-[0.2em] text-[9px]">
                  {category.name}
                </h4>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${category.slug}/${formatSlug(item)}`}
                        className="text-gray-500 hover:text-blue-600 font-bold text-xs transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 rounded-full bg-blue-200 group-hover:w-2 group-hover:bg-blue-600 transition-all" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Contact Details */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-100">
                <IoCallOutline size={20} />
              </div>
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  Connect Now
                </p>
                <p className="text-sm font-black text-blue-950 tracking-tighter">
                  +91 80566 25577  /  9944831502
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-blue-600 border border-gray-100">
                <IoMailOutline size={20} />
              </div>
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  Email Us
                </p>
                <p className="text-sm font-black text-blue-950 lowercase">
                  info@kadalarasantours.com
                </p>
              </div>
            </div>
          </div>

          {/* Copyright & Security */}
          <div className="text-center lg:text-right space-y-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-80">
              © {currentYear} Kadal Arasan Tour & Travels.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-end gap-4">
              {/* Trust Badge */}
              <p className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2 bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                <IoShieldCheckmarkOutline size={12} className="animate-pulse" />
                Secure Booking Partner
              </p>

              {/* The Wepzite "Power-Link" */}
              <a
                href="https://wepzite.in"
                target="_blank"
                className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 text-white transition-all duration-500 hover:pr-8 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:scale-95 overflow-hidden"
              >
                <span className="text-[8px] font-black uppercase tracking-[0.3em] z-10">
                  Built by{" "}
                  <span className="text-yellow-400 group-hover:text-white transition-colors">
                    Wepzite.in
                  </span>
                </span>

                {/* Moving Arrow on Hover */}
                <div className="absolute right-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                  <HiArrowSmallRight size={14} />
                </div>

                {/* Glossy Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
