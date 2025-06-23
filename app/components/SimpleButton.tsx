"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

interface SimpleButtonProps {
  variant?: 'default' | 'violet' | 'dark';
  text: string;
  route: string;
  className?: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ variant = 'default', text, route, className }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div className="flex flex-row items-center group cursor-pointer" onClick={handleClick}>
        <div className={`px-4 py-2 rounded-full tracking-tight transition-all ease-in-out duration-200 ${
          variant === 'default' ? 'bg-stone-200/75 hover:bg-stone-300' : 
          variant === 'violet' ? 'bg-black/85 text-white hover:bg-black' :
          'bg-black text-white hover:bg-white hover:text-black'
        } ${className || ''}`}>
          {text}
        </div>
        
    </div>
  )
}

export default SimpleButton