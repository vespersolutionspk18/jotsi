"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "CFO",
    company: "TechVentures Inc.",
    image: "/assets/testimonial1.jpg",
    quote: "Jotsi transformed our financial operations. Their offshore accounting team seamlessly integrated with our processes, reducing costs by 60% while maintaining exceptional accuracy. The expertise they bring is truly world-class.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "President",
    company: "BuildRight Construction",
    image: "/assets/testimonial2.jpg",
    quote: "Their estimation services have been a game-changer. We've won 40% more bids with their detailed takeoffs and accurate pricing. The turnaround time is incredible, and the quality speaks for itself.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Davis",
    title: "Managing Partner",
    company: "Davis & Associates CPA",
    image: "/assets/testimonial3.jpg",
    quote: "Jotsi's staffing solutions allowed us to scale during tax season without the overhead. Their accountants are highly skilled, well-trained, and communicate effectively with our clients. It's like having an extended team.",
    rating: 5
  },
  {
    id: 4,
    name: "Robert Thompson",
    title: "CEO",
    company: "Precision Builders",
    image: "/assets/testimonial4.jpg",
    quote: "The accuracy of their construction estimates is unmatched. They use the same software we do, understand our local market, and consistently deliver comprehensive bid packages that help us win profitable projects.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="p-4 flex flex-col tracking-tight leading-tight">
      <div className="flex flex-col w-full p-5 md:p-10 gap-6 bg-white rounded-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter">
              What Our Clients Say
            </h2>
            <p className="text-stone-600 text-xl mt-2 font-light">
              Trusted by industry leaders across accounting and construction
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row gap-8"
            >
              <div className="lg:w-[60%] flex flex-col gap-3">
                <div className="flex gap-1">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg lg:text-xl font-light leading-relaxed">
                  &quot;{activeTestimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">{activeTestimonial.name}</p>
                    <p className="text-stone-600 font-light text-sm">{activeTestimonial.title}, {activeTestimonial.company}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[40%] flex items-center justify-center">
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;