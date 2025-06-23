"use client";
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from 'next/navigation';

interface ButtonProps {
  variant?: 'default' | 'violet' | 'white';
  text: string;
  route: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', text, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div className="flex flex-row items-center group cursor-pointer" onClick={handleClick}>
        <div className={`px-4 py-2 rounded-full  tracking-tight ${
          variant === 'default' ? 'bg-stone-200/75' : 
          variant === 'violet' ? 'bg-black/85 text-white' : 
          'bg-white text-black'
        }`}>
          {text}
        </div>
        <div className={`rounded-full w-9 h-9 flex items-center justify-center ${
          variant === 'default' ? 'bg-black' : 
          variant === 'violet' ? 'bg-stone-200/75' : 
          'bg-black'
        }`}>
          <GoArrowUpRight className={`w-5 h-5 group-hover:rotate-45 transition-all duration-300 ease-in-out ${
            variant === 'default' ? 'fill-white' : 
            variant === 'violet' ? 'fill-black' : 
            'fill-white'
          }`}/>
        </div>
    </div>
  )
}

export default Button