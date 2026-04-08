"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IoCloseCircleOutline, 
  IoLogoWhatsapp, 
  IoSparklesOutline,
  IoCheckmarkCircle
} from "react-icons/io5";

const SpecialOfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the popup
  const openPopup = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    // 1. Initial trigger after 5 seconds
    const initialTimer = setTimeout(openPopup, 5000);

    // 2. Periodic trigger every 2 minutes (120,000ms)
    // This will re-open it even if they closed it before
    const periodicTimer = setInterval(openPopup, 120000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(periodicTimer);
    };
  }, [openPopup]);

  const handleClose = () => setIsOpen(false);

  const handleClaimOffer = () => {
    const text = `Hi Kadal Arasan Tours! I want to claim the Special 6-Person Group Offer for ₹9,999/person.`;
    window.open(`https://wa.me/918056625577?text=${encodeURIComponent(text)}`, "_blank");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0  backdrop-blur-xl z-[999] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-[850px] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Image Section - Ensure /logo.jpg or a valid path exists in /public */}
            <div className="relative w-full md:w-1/2 h-full md:h-[550px]">
              <img 
                src="/adventures/luxury-resort-maldives-finolhu-big-game-fishing-02.webp" // Change this to a valid path in your /public folder
                alt="Andaman Special Offer"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1589197331516-4d84593e6466?q=80&w=800"}} // Fallback image if local fails
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shadow-lg">
                <IoSparklesOutline /> Exclusive Deal
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Special Flash Sale</span>
                <h3 className="text-4xl font-black text-blue-950 tracking-tighter mt-2 leading-none">
                  Group <span className="text-blue-600">Savings.</span>
                </h3>
              </div>

              <ul className="space-y-3 mb-8">
                {["Incl. Havelock", "3 Nights / 4 Days", "Min. 6 Members Required"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-bold text-gray-600">
                    <IoCheckmarkCircle className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>

              <div className="mb-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Starting From</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-blue-950">₹9,999</span>
                  <span className="text-sm font-bold text-gray-400">/ person</span>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handleClaimOffer}
                  className="w-full h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-xl shadow-green-500/20 font-black text-xs uppercase tracking-widest"
                >
                  <IoLogoWhatsapp size={20} /> Claim Offer Now
                </button>
                <button 
                  onClick={handleClose}
                  className="w-full text-center text-gray-400 font-bold text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>

            {/* Mobile Close X */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-white md:text-gray-300 hover:text-red-500 transition-colors z-50"
            >
              <IoCloseCircleOutline size={32} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpecialOfferPopup;