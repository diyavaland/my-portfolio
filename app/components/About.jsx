import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo dark:text-white text-black'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo dark:text-white text-black'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>

            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-serif dark:text-white text-black'>I'm Diya Valand, a dedicated software developer based in Canada with a strong interest in full-stack development. I enjoy building user-friendly web applications using technologies like React, Python, and SQL. Passionate about learning and problem-solving, I aim to create impactful digital experiences.</p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li  className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:bg-gray-100 hover:shadow-[8px_0_15px_rgba(0,0,0,0.6)] dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:shadow-[8px_0_15px_rgba(255,255,255,0.15)]' key={index}>
     <Image src={icon} alt={title}/>
     <h3 className='my-4 font-semibold dark:text-white text-gray-700'>{title}</h3>
     <p className='text-sm dark:text-gray-300 text-gray-600'>{description}</p>
                        </li>

                    ))}
                </ul>

                 <h4 className='my-6 font-serif dark:text-white text-gray-700'>Tools I Use</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                        key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    </div>
  )
}

export default About