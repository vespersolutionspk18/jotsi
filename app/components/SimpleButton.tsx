"use client";
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from 'next/navigation';

interface SimpleButtonProps {
  variant?: 'default' | 'violet';
  text: string;
  route: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ variant = 'default', text, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div className="flex flex-row items-center group cursor-pointer" onClick={handleClick}>
        <div className={`px-4 py-2 rounded-full  tracking-tight hover:bg-black transition-all ease-in-out 200 ${
          variant === 'default' ? 'bg-stone-200/75' : 'bg-black/85 text-white'
        }`}>
          {text}
        </div>
        
    </div>
  )
}

export default SimpleButton