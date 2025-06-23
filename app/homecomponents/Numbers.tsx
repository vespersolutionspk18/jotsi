"use client";
import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Numbers = () => {
  const containerRef = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);

  useGSAP(() => {
    const nums = [num1Ref.current, num2Ref.current, num3Ref.current];
    
    nums.forEach((num, i) => {
      if (!num) return;
      
      gsap.fromTo(num, 
        { 
          innerText: 0,
        },
        {
          innerText: i === 0 ? 200 : i === 1 ? 50 : 98,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          onUpdate: function() {
            const val = Math.round(this.targets()[0].innerText);
            this.targets()[0].innerText = val + (i === 2 ? "%" : "+");
          }
        }
      );
    });
  }, { scope: containerRef });

  const stats = [
    { number: "200+", label: "Happy Clients", ref: num1Ref },
    { number: "50+", label: "Expert Professionals", ref: num2Ref },
    { number: "98%", label: "Client Satisfaction", ref: num3Ref }
  ];

  return (
    <div className="flex items-center justify-center p-6">
      <div 
        ref={containerRef}
        className="rounded-[40px] flex flex-col md:flex-row p-8 items-center justify-center gap-8 md:gap-32 bg-black/5 backdrop-blur-md border border-white/20 shadow-2xl"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-3 px-6 md:px-10 py-4">
            <h5 
              ref={stat.ref}
              className="text-5xl font-medium bg-gradient-to-br from-violet-600 to-violet-800 bg-clip-text text-transparent"
            >
              {stat.number}
            </h5>
            <p className="text-gray-700 text-lg leading-5 text-center md:text-left">
              {stat.label.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Numbers