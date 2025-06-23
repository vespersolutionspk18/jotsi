"use client";
import React from "react";
import Button from "../components/Button";
import Orb from "@/src/blocks/Backgrounds/Orb/Orb";
import SimpleButton from "../components/SimpleButton";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl mt-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 p-6 sm:p-8 lg:p-10 tracking-tight leading-tight">
        <div className="w-full lg:w-[50%] flex flex-col gap-3 justify-between">
          <div className="bg-black/85 px-3 py-1 text-white text-xs sm:text-sm rounded-full w-fit">
            Specialized Services. One Trusted Partner.
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-black/90 mt-4 sm:mt-6">
            Accounting, Estimating & <br className="hidden sm:block"/>
            <motion.span
              className="inline-block pb-1 sm:pb-2"
              style={{
                background:
                  "linear-gradient(90deg, #7c3aed 0%, #3b82f6 25%, #7c3aed 50%, #3b82f6 75%, #7c3aed 100%)",
                backgroundSize: "400% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                lineHeight: "1",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "-100% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Offshore Staffing
            </motion.span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-black text-left sm:text-justify mt-4 sm:mt-6">
            Jotsi delivers expert-led Accounting, Construction Estimating, and
            Offshore Staffing solutions that help firms scale efficiently,
            reduce overhead, and maintain accuracy, all powered by
            industry-grade tools and a highly skilled team.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-3">
            <SimpleButton text="About Us" route="/about" variant="violet" />
            <Button text="Get Started" route="/contact" />
          </div>
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-12 lg:mt-18 gap-3">
            <div className="flex flex-row items-center -space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-3 sm:border-4 border-white"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-3 sm:border-4 border-white"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-400 border-3 sm:border-4 border-white"></div>
            </div>
            <div className="flex flex-col -space-y-1">
              <h5 className="text-lg sm:text-xl text-black font-semibold">
                Trusted by 50+ Firms
              </h5>
              <p className="text-xs sm:text-sm text-stone-600">
                Across Canada and the U.S., from boutique practices to national
                networks.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-row gap-2 mt-8 lg:mt-0 h-64 sm:h-80 md:h-96 lg:h-auto">
          <div
            className="w-[50%] h-full rounded-xl sm:rounded-2xl bg-blend-multiply bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/construction.jpg')" }}
          ></div>
          <div className="w-[50%] flex flex-col h-full gap-2">
            <div
              className="h-[50%] w-full bg-blend-multiply bg-cover bg-center rounded-xl sm:rounded-2xl"
              style={{ backgroundImage: "url('/assets/accountant.jpg')" }}
            ></div>
            <div
              className="h-[50%] w-full bg-blend-multiply bg-cover bg-center rounded-xl sm:rounded-2xl"
              style={{ backgroundImage: "url('/assets/callcenter.jpg')" }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <Marquee speed={30} pauseOnHover={false} gradient={false}>
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 p-6 sm:p-8 pb-8 sm:pb-12 md:pb-16">
            <div className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">LOGO</span>
            </div>
            <div className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">BRAND</span>
            </div>
            <div className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">CLIENT</span>
            </div>
            <div className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">PARTNER</span>
            </div>
            <div className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">COMPANY</span>
            </div>
            <div className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">FIRM</span>
            </div>
            <div className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">FIRM</span>
            </div>
            <div className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-stone-200 rounded-lg flex items-center justify-center">
              <span className="text-stone-500 font-semibold text-xs sm:text-sm md:text-base">FIRM</span>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
