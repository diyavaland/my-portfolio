import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="mt-10 py-4 bg-transparent">
      <div className="text-center">
        <Image 
          src={assets.logo} 
          alt="Logo" 
          className="mx-auto" 
          width={100} 
          height={40} 
        />
        <p className="text-sm text-gray-500 mt-2">&copy; 2025 Diya Valand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
