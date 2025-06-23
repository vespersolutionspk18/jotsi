"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  route: string;
}

const servicesData: Record<string, ServiceData> = {
  accounting: {
    id: "accounting",
    title: "Accounting Services",
    subtitle: "Comprehensive Financial Management",
    description: "From bookkeeping to tax compliance, our accounting experts handle your financial operations with precision. We specialize in QuickBooks, Xero, and industry-specific platforms to deliver accurate, timely financial reporting that drives informed business decisions.\n\nOur team manages everything from daily transaction recording and monthly reconciliations to complex financial statement preparation and year-end tax filings. With deep expertise across multiple industries including real estate, healthcare, and professional services, we ensure your books are always audit-ready and compliant with the latest regulations.",
    image: "/assets/accountant.jpg",
    route: "/services/accounting"
  },
  estimation: {
    id: "estimation",
    title: "Construction Estimating",
    subtitle: "Accurate Project Cost Analysis",
    description: "Our certified estimators use industry-leading software like Planswift, Bluebeam, and ProEst to deliver detailed takeoffs and comprehensive cost estimates. We help contractors win more bids with precise material quantities and labor calculations.\n\nFrom residential renovations to commercial developments and infrastructure projects, our estimators have successfully bid on projects worth over $500M. We provide detailed quantity takeoffs, labor analysis, material pricing, and comprehensive bid packages that give you the competitive edge while maintaining healthy profit margins.",
    image: "/assets/construction.jpg",
    route: "/services/estimation"
  },
  staffing: {
    id: "staffing",
    title: "Offshore Staffing",
    subtitle: "Skilled Remote Professionals",
    description: "Scale your team efficiently with our vetted offshore professionals. From administrative support to specialized technical roles, we provide dedicated staff that seamlessly integrate with your operations while reducing overhead by up to 70%.\n\nOur rigorous selection process ensures you get top-tier talent across accounting, data entry, customer service, IT support, and specialized industry roles. Each team member undergoes comprehensive training on North American business practices and your specific workflows, backed by local management to ensure consistent quality and communication.",
    image: "/assets/callcenter.jpg",
    route: "/services/staffing"
  }
};

const Services = () => {
  const [activeService, setActiveService] = useState<string>("accounting");
  const currentService = servicesData[activeService];

  return (
    <div className="p-4 flex flex-col tracking-tight leading-tight">
      <div className="flex flex-col lg:flex-row w-full p-5 md:p-10 gap-16 bg-white rounded-2xl">
        <div className="flex flex-col lg:w-[35%]">
          <h2 className="text-4xl lg:text-5xl mb-4 font-medium tracking-tighter">
            Specialized Solutions for Modern Business
          </h2>
          <p className="text-stone-600 mb-8 text-xl mt-4 font-light" >
            We deliver expert-led services that help firms scale efficiently, reduce overhead, and maintain accuracy through industry-grade tools and highly skilled teams.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setActiveService("accounting")}
              className={`flex items-center justify-between text-left text-xl font-normal border-b-[1px] pb-3 transition-all duration-300 ${
                activeService === "accounting"
                  ? "text-black border-stone-300"
                  : "text-stone-400 border-stone-200 hover:text-stone-600"
              }`}
            >
              <span>Accounting</span>
              <span className={`text-3xl font-light transition-transform duration-300 ${
                activeService === "accounting" ? "rotate-45" : ""
              }`}>+</span>
            </button>
            <button
              onClick={() => setActiveService("estimation")}
              className={`flex items-center justify-between text-left text-xl font-normal border-b-[1px] pb-3 transition-all duration-300 ${
                activeService === "estimation"
                  ? "text-black border-gray-300"
                  : "text-gray-400 border-gray-200 hover:text-gray-600"
              }`}
            >
              <span>Estimation</span>
              <span className={`text-3xl font-light transition-transform duration-300 ${
                activeService === "estimation" ? "rotate-45" : ""
              }`}>+</span>
            </button>
            <button
              onClick={() => setActiveService("staffing")}
              className={`flex items-center justify-between text-left text-xl font-normal border-b-[1px] pb-3 transition-all duration-300 ${
                activeService === "staffing"
                  ? "text-black border-gray-300"
                  : "text-gray-400 border-gray-200 hover:text-gray-600"
              }`}
            >
              <span>Staffing</span>
              <span className={`text-3xl font-light transition-transform duration-300 ${
                activeService === "staffing" ? "rotate-45" : ""
              }`}>+</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:w-[65%] gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  width={800}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold">{currentService.subtitle}</h3>
              <div className="text-stone-600 font-light text-xl space-y-4">
                {currentService.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <Button text={`Explore ${activeService.charAt(0).toUpperCase() + activeService.slice(1)}`} route={currentService.route} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;