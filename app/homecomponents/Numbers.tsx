"use client";
import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Numbers = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);

  useGSAP(() => {
    const nums = [num1Ref.current, num2Ref.current, num3Ref.current];
    
    // Subtle fade in and count animation
    nums.forEach((num, i) => {
      if (!num) return;
      
      gsap.fromTo(num, 
        { 
          innerText: 0,
          opacity: 0,
          y: 20,
        },
        {
          innerText: i === 0 ? 200 : i === 1 ? 50 : 98,
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.1,
          onUpdate: function() {
            const val = Math.round(this.targets()[0].innerText);
            this.targets()[0].innerText = val + (i === 2 ? "%" : "+");
          }
        }
      );
    });
  }, { scope: containerRef });

  const stats = [
    { 
      number: "200+", 
      label: "Happy Clients",
      subtext: "and counting",
      ref: num1Ref
    },
    { 
      number: "50+", 
      label: "Expert Professionals",
      subtext: "at your service",
      ref: num2Ref
    },
    { 
      number: "98%", 
      label: "Client Satisfaction",
      subtext: "average rating",
      ref: num3Ref
    }
  ];

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <div ref={sectionRef} className="px-6 sm:px-8 lg:px-10 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto">
          {/* Modern stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="text-center">
                  {/* Large number */}
                  <div className="mb-4">
                    <span 
                      ref={stat.ref}
                      className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-black inline-block"
                    >
                      {stat.number}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg sm:text-xl font-medium text-black/90 mb-1">
                    {stat.label}
                  </h3>
                  
                  {/* Subtext */}
                  <p className="text-sm text-black/60">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers