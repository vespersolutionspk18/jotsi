"use client";
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from 'next/navigation';

interface ButtonProps {
  variant?: 'default' | 'white';
  text: string;
  route: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', text, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div className="flex flex-row group cursor-pointer" onClick={handleClick}>
        <div className={`px-4 py-2 rounded-full font-medium tracking-tight ${
          variant === 'default' ? 'bg-jyellow' : 'bg-white text-black'
        }`}>
          {text}
        </div>
        <div className={`rounded-full w-10 h-10 flex items-center justify-center ${
          variant === 'default' ? 'bg-black' : 'bg-jyellow'
        }`}>
          <GoArrowUpRight className={`w-5 h-5 group-hover:rotate-45 transition-all duration-300 ease-in-out ${
            variant === 'default' ? 'fill-white' : 'fill-black'
          }`}/>
        </div>
    </div>
  )
}

export default Button