"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const mRef = useRef(null);
  const lRef = useRef(null);
  const rRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const anim = animRef.current;
    const m = mRef.current;
    const l = lRef.current;
    const r = rRef.current;
    const heading = headingRef.current;

    if (!wrapper || !container || !anim || !m || !l || !r || !heading) return;

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    
    // Set initial states with mobile adjustments
    gsap.set([m, l, r], { opacity: 0 });
    if (isMobile) {
      gsap.set(m, { y: -50 });
      gsap.set(l, { x: -100, y: 80 });
      gsap.set(r, { x: 100, y: -20 });
    } else {
      gsap.set(m, { y: -100 });
      gsap.set(l, { x: -273, y: 164 });
      gsap.set(r, { x: 273, y: -44 });
    }

    // Split text into spans for each letter while preserving line break
    const lines = heading.innerHTML.split('<br>');
    heading.innerHTML = lines
      .map((line, lineIndex) => {
        const chars = line.split('').map((char, i) => 
          char === ' ' ? ' ' : `<span class="inline-block" style="transform-origin: center;">${char}</span>`
        ).join('');
        return lineIndex === 0 ? chars + '<br>' : chars;
      })
      .join('');
    
    const letters = heading.querySelectorAll('span');

    // Create timeline with mobile adjustments
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 70%" : "top 30%",
        end: isMobile ? "bottom 30%" : "+=200%", // Shorter scroll distance on mobile
        scrub: 1,
        pin: !isMobile,
        pinSpacing: true,
        anticipatePin: 1, // Prevents jump at start
        markers: false, // Set to true for debugging
      }
    });

    // Add color animation to letters - one at a time
    const letterDuration = 1.5 / letters.length; // Distribute across full animation
    letters.forEach((letter, i) => {
      tl.to(letter, {
        color: "#7c3aed", // Tailwind violet-600
        duration: letterDuration,
        ease: "none",
      }, i * letterDuration * 0.8); // Slight overlap for smooth transition
    });

    // Animate SVGs with mobile adjustments
    const finalPositions = isMobile ? {
      l: { x: -60, y: 40 },
      r: { x: 60, y: 38 }
    } : {
      l: { x: -100, y: 64 },
      r: { x: 100, y: 56 }
    };

    // Animate M (fade in and move down)
    tl.to(m, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, 0)
    // Animate L (fade in and move at 30 degree angle)
    .to(l, {
      opacity: 1,
      x: finalPositions.l.x,
      y: finalPositions.l.y,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
    // Animate R (fade in and move at 270 degree angle - from bottom)
    .to(r, {
      opacity: 1,
      x: finalPositions.r.x,
      y: finalPositions.r.y,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
    // Add a pause at the end to prevent jump
    .set({}, {}, "+=0.3");

  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="relative">
      <div ref={containerRef} className="relative h-[800px] md:h-[600px] flex items-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full p-4 md:p-12">
          <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-6">
            <h4 ref={headingRef} className="text-3xl md:text-6xl font-medium tracking-tighter text-center md:text-left">
              Focused on Quality, <br></br>Scaled for Growth
            </h4>
            <p className="text-base md:text-xl text-black/85 font-light text-justify">
              Jotsi is a specialized service provider helping accounting firms, construction companies, and growing businesses streamline operations through expert-led outsourcing. With dedicated teams across bookkeeping, payroll, tax compliance, construction estimating, and offshore staffing, we combine domain expertise with industry-standard tools to deliver accurate, timely, and scalable support. Our clients trust us to handle the backend — so they can focus on growth, strategy, and client relationships.
            </p>
          </div>
          <div ref={animRef} className="w-full md:w-[45%] relative flex items-center justify-center h-[300px] md:h-[400px] scale-100 md:scale-[1.4] mt-8 md:mt-0">
            <div ref={mRef} className="absolute w-20 md:w-32 will-change-transform">
              <Image src="/assets/m.svg" alt="M" width={128} height={180} />
            </div>
            <div ref={lRef} className="absolute w-16 md:w-24 h-auto will-change-transform">
              <Image src="/assets/l.svg" alt="L" width={96} height={120} />
            </div>
            <div ref={rRef} className="absolute w-18 md:w-28 h-auto will-change-transform">
              <Image src="/assets/r.svg" alt="R" width={112} height={140} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
