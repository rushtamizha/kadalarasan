"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  IoCallOutline, 
  IoLocationOutline, 
  IoLogoWhatsapp,
  IoSendSharp
} from "react-icons/io5";

const ContactPage = () => {
  // 1. Setup Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <IoCallOutline size={22} />,
      label: "Call Us",
      value: "+91 80566 25577",
      subValue: "+91 99448 31502",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <IoLocationOutline size={22} />,
      label: "Office",
      value: "Fisheries Colony, Junglighat",
      subValue: "Sri Vijayapuram, Andaman",
      color: "bg-rose-50 text-rose-600",
    },
  ];

  // 2. Handle Form Submission to WhatsApp
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Formatting the message for a professional look
    const whatsappMessage = `*New Inquiry from Kadal Arasan Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Requirement:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/918056625577?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white py-28 lg:py-32">
      <div className="container mx-auto px-4">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] block mb-4"
          >
            Reach Out to Experts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter leading-[0.9]"
          >
            Plan Your <br />
            <span className="text-blue-600">Dream Trip.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((item, idx) => (
              <motion.div 
                key={idx}
                className="group p-8 rounded-[2.5rem] border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-500 flex items-start gap-6"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</h4>
                  <p className="text-lg font-black text-blue-950 leading-tight">{item.value}</p>
                  <p className="text-sm font-bold text-gray-400 mt-1">{item.subValue}</p>
                </div>
              </motion.div>
            ))}

            <motion.div className="bg-blue-950 rounded-[3rem] p-10 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-black tracking-tight mb-2">Instant Support?</h4>
                <p className="text-blue-200/70 font-bold text-xs mb-8 leading-relaxed max-w-[200px]">
                  Click here to chat with our travel desk directly.
                </p>
                <button 
                  onClick={() => window.open('https://wa.me/918056625577', '_blank')}
                  className="bg-[#25D366] hover:bg-[#1eb956] text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all"
                >
                  <IoLogoWhatsapp size={20} />
                  <span className="font-black text-[10px] uppercase tracking-widest">Direct Chat</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Information Collection Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-gray-50 rounded-[4rem] p-8 md:p-16 border border-gray-100 shadow-inner"
          >
            <form onSubmit={handleFormSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Ex: Mohan Kumar" 
                    className="w-full h-16 bg-white rounded-2xl px-8 font-bold text-blue-950 outline-none focus:ring-2 focus:ring-blue-500 transition-all border-none shadow-sm" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full h-16 bg-white rounded-2xl px-8 font-bold text-blue-950 outline-none focus:ring-2 focus:ring-blue-500 transition-all border-none shadow-sm" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Your Travel Plans</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  placeholder="Share your travel dates or specific island preferences..." 
                  className="w-full bg-white rounded-[2rem] p-8 font-bold text-blue-950 outline-none focus:ring-2 focus:ring-blue-500 transition-all border-none shadow-sm resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full h-20 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 transition-all shadow-xl shadow-blue-200 active:scale-[0.98] group">
                Send to WhatsApp
                <IoSendSharp size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                This will open WhatsApp on your device to send the inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;