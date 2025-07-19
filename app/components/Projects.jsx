import { assets, projectData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-sarif'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Projects</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
        Welcome to my development portfolio! Here you'll find a collection of projects that highlight my skills in full-stack development, database design, secure coding, and UI/UX implementation. Each project reflects my commitment to writing clean, maintainable code and solving real-world problems through innovative and user-focused solutions.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
      {projectData.map((project, index) => (
  <a
    key={index}
    href={project.link}
    target='_blank'
    rel='noopener noreferrer'
    className='group relative aspect-square bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden transition-shadow duration-500 hover:shadow-[-8px_0_15px_rgba(0,0,0,0.6)]'
    style={{ backgroundImage: `url(${project.image})` }}
  >
    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md group-hover:shadow-purple-300'>
      <div>
        <h2 className='font-semibold'>{project.title}</h2>
        <p className='text-sm text-gray-700'>{project.description}</p>
      </div>
      <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-purple-100 transition'>
        <Image
          src={assets.send_icon}
          alt='send icon'
          className='w-5'
          width={20}
          height={20}
        />
      </div>
    </div>
  </a>
))}

      </div>

      <a
        href='#'
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lime-100 duration-500'
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt='Right arrow'
          className='w-4'
          width={16}
          height={16}
        />
      </a>
    </div>
  );
};

export default Projects;
