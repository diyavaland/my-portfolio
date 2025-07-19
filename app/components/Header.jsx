import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-28 flex flex-col items-center justify-center gap-4'>

        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
         <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Diya Valand <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
         <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-Ovo'/>
         <p className='text-sm sm:text-base max-w-xl mx-auto font-Ovo px-2 sm:px-0'>
            I am a Software Developer from Canada, passionate about crafting efficient, scalable, and user-centric web applications using modern technologies like React, Node.js, and Python along with Java and Database.
         </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className=' px-6 py-2 sm:px-10 sm:py-3 border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me<Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

            <a href='/Diya Valand.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume<Image src={assets.download_icon} alt='' className= 'w-4'/></a>
        </div>
    </div>
  )
}

export default Header