"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  const footerLinks = {
    Services: ["Accounting", "Estimating", "Offshore Staffing", "Consulting"],
    Company: ["About Us", "Our Team", "Careers", "Blog"],
    Support: ["Contact", "Help Center", "FAQs", "Resources"],
  };

  return (
    <footer className="bg-stone-50 p-10">
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          {/* Brand Section */}
          <div className="md:col-span-3">
            <Image src="/assets/jotsi.svg" alt="Jotsi" width={120} height={32} className="mb-3"/>
            <p className="text-base sm:text-lg lg:text-xl text-black font-light leading-tight">
              Expert-led solutions that help firms scale efficiently and maintain accuracy.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-6 grid grid-cols-3 gap-2">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-2xl font-medium text-black mb-2">{title}</h4>
                <ul className="space-y-0.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-lg text-black font-light hover:text-stone-600 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter & Contact */}
          <div className="md:col-span-3">
            {/* Newsletter */}
            <h4 className="text-xl font-medium text-black mb-2">Stay Updated</h4>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white border border-stone-200 rounded-full placeholder:text-stone-400 text-base focus:outline-none focus:border-black transition-colors mb-2"
              />
              <button className="w-full flex flex-row items-center group cursor-pointer">
                <div className="flex-1 px-4 py-2 bg-black/85 text-white rounded-full text-center">
                  Subscribe
                </div>
                <div className="rounded-full w-9 h-9 flex items-center justify-center bg-stone-200/75">
                  <GoArrowUpRight className="w-5 h-5 fill-black group-hover:rotate-45 transition-all duration-300 ease-in-out"/>
                </div>
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-0.5">
              <p className="text-base text-black">Toronto, ON M5V 3A8</p>
              <p className="text-base text-black">(416) 555-0123</p>
              <p className="text-base text-black">info@jotsi.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-base text-stone-600">© 2024 Jotsi. All rights reserved.</p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium text-stone-600 hover:text-black transition-colors uppercase tracking-wide">
                PRIVACY POLICY
              </a>
              <a href="#" className="text-sm font-medium text-stone-600 hover:text-black transition-colors uppercase tracking-wide">
                TERMS OF SERVICE
              </a>
              <a href="#" className="text-sm font-medium text-stone-600 hover:text-black transition-colors uppercase tracking-wide">
                COOKIES
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;