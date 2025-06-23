"use client";
import React from "react";
import Button from "./Button";
import SimpleButton from "./SimpleButton";
import { motion } from "framer-motion";
import Orb from "@/src/blocks/Backgrounds/Orb/Orb";

const Cta = () => {
  return (
    <div className="bg-stone-50 p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-black text-white relative"
      >
        <div className="flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg md:text-xl font-light text-white/85 mb-8 max-w-2xl">
            Let our expert teams handle the backend complexity while you focus on growth. From accounting to estimating, we deliver precision at scale.
          </p>
          <div className="flex items-center gap-4">
            <SimpleButton text="Get Started" route="/contact" variant="dark" />
            <Button text="Contact" route="/contact" variant="white" />
          </div>
        </div>
        <div className="flex-1 relative hidden md:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
          <div className="relative h-full min-h-[400px] flex items-center justify-end pr-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-[450px] h-[450px]"
            >
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />

            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cta;
