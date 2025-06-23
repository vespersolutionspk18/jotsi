"use client";
import React, { useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiPackage } from "react-icons/pi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoBusinessOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      x: "100%",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const
      }
    }
  };

  const navItems = [
    { icon: BiHomeAlt2, text: "Home" },
    { icon: IoBusinessOutline, text: "About" },
    { icon: PiPackage, text: "Services" },
    { icon: IoFolderOpenOutline, text: "Projects" }
  ];

  return (
    <>
      <motion.div 
        className="flex flex-row bg-white w-full p-4 rounded-2xl relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-[30%] md:w-[30%]">
          <Image src="/assets/jotsi.svg" alt="" width={90} height={20}/>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row w-[40%] gap-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row bg-stone-100 hover:shadow-md hover:cursor-pointer hover:scale-[105%] transition-all 300 ease-in-out w-fit rounded-full py-1 px-1 items-center"
            >
              <div className="bg-white flex items-center justify-center rounded-full w-8 h-8">
                <item.icon className="w-5 h-5" />
              </div>
              <p className="text-md text-black px-3">{item.text}</p>
            </div>
          ))}
        </div>
        
        {/* Desktop Contact Button */}
        <div className="hidden md:flex flex-row w-[30%] justify-end pr-1">
          <Button text="Contact" route="/" />
        </div>
        
        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden w-[70%] justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-stone-100 transition-colors"
          >
            {isMenuOpen ? (
              <IoClose className="w-6 h-6 text-black" />
            ) : (
              <div className="flex flex-col gap-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </div>
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed right-0 top-0 h-full w-[70%] max-w-xs bg-white z-50 shadow-xl md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col p-4">
              <div className="flex justify-between items-center mb-6">
                <Image src="/assets/jotsi.svg" alt="" width={80} height={20}/>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <IoClose className="w-5 h-5 text-black" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-stone-100 transition-colors text-left"
                  >
                    <div className="bg-stone-200 flex items-center justify-center rounded-full w-8 h-8">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base text-black">{item.text}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-6">
                <Button text="Contact" route="/" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
