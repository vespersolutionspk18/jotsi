"use client";
import React from "react";
import Button from "../components/Button";
import SimpleButton from "../components/SimpleButton";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col bg-white rounded-2xl mt-4 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 tracking-tight leading-tight">
        <motion.div 
          className="w-full lg:w-[50%] flex flex-col gap-3 justify-between"
          variants={containerVariants}
        >
          <motion.div 
            className="bg-stone-100/85 px-3 py-1 text-black text-xs sm:text-sm rounded-full w-fit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
          >
            Specialized Services. One Trusted Partner.
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-black mt-4 sm:mt-6"
            variants={itemVariants}
          >
            Accounting, Estimating & <br className="hidden sm:block"/>
            <span className="text-black">Offshore Staffing</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-black font-light text-left sm:text-justify mt-4 sm:mt-6"
            variants={itemVariants}
          >
            Jotsi delivers expert-led Accounting, Construction Estimating, and
            Offshore Staffing solutions that help firms scale efficiently,
            reduce overhead, and maintain accuracy, all powered by
            industry-grade tools and a highly skilled team.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-3"
            variants={itemVariants}
          >
            <SimpleButton text="About Us" route="/about" variant="violet" />
            <Button text="Get Started" route="/contact" />
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row mt-8 sm:mt-12 lg:mt-18 gap-3"
            variants={itemVariants}
          >
            <motion.div 
              className="flex flex-row items-center -space-x-3"
              variants={containerVariants}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-3 sm:border-4 border-white"
                variants={avatarVariants}
              ></motion.div>
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-3 sm:border-4 border-white"
                variants={avatarVariants}
              ></motion.div>
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-400 border-3 sm:border-4 border-white"
                variants={avatarVariants}
              ></motion.div>
            </motion.div>
            <motion.div 
              className="flex flex-col -space-y-1"
              variants={itemVariants}
            >
              <h5 className="text-lg sm:text-xl text-black font-semibold">
                Trusted by 50+ Firms
              </h5>
              <p className="text-xs sm:text-sm text-stone-600">
                Across Canada and the U.S., from boutique practices to national
                networks.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-[50%] flex flex-row gap-2 mt-8 lg:mt-0 h-64 sm:h-80 md:h-96 lg:h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div
            className="w-[50%] h-full rounded-xl sm:rounded-2xl bg-blend-multiply bg-cover bg-center bg-stone-100"
            style={{ backgroundImage: "url('/assets/construction.jpg')" }}
          ></div>
          <div className="w-[50%] flex flex-col h-full gap-2">
            <div
              className="h-[50%] w-full bg-blend-multiply bg-cover bg-center rounded-xl sm:rounded-2xl bg-stone-100"
              style={{ backgroundImage: "url('/assets/accountant.jpg')" }}
            ></div>
            <div
              className="h-[50%] w-full bg-blend-multiply bg-cover bg-center rounded-xl sm:rounded-2xl bg-stone-100"
              style={{ backgroundImage: "url('/assets/callcenter.jpg')" }}
            ></div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.0,
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <Marquee speed={30} pauseOnHover={false} gradient={false}>
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 p-6 sm:p-8 pb-8 sm:pb-12 md:pb-16">
            {["LOGO", "BRAND", "CLIENT", "PARTNER", "COMPANY", "FIRM", "FIRM", "FIRM"].map((text, index) => (
              <motion.div 
                key={index}
                className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2 + (index * 0.05),
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#d6d3d1"
                }}
              >
                <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">{text}</span>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
