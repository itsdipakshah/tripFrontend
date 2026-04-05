import React from 'react'
import CustomBottom from '../common/CustomBottom'

const Hero = () => {
  return (
    <section className='h-[90dvh] overflow-hidden flex justify-center items-center '>
        <div>
            <img src="/hero.jpg" alt="Hero Image" />
        </div>

        {/* black overlay */}
        <div className='h-[90dvh] bg-black w-full absolute  opacity-50' ></div>

        {/* main content */}

        <div className='absolute w-1/2  text-center'>
          <h1 className='text-white text-5xl font-bold mb-8'> <span className='text-8xl text-yellow-700 animate-bounce'>D</span> iscover your Next Adventure</h1>
          <p className='text-gray-300 text-2xl mb-8 font-semibold'>Discover the world like never before. From breathtaking landscapes and vibrant cities to hidden gems off the beaten path, we bring you closer to unforgettable travel experiences.

Whether you're planning a relaxing getaway, an adventurous trek, or a cultural journey, our platform helps you explore destinations, find the best deals, and create memories that last a lifetime.</p>
          <CustomBottom text="Get Started" />
        </div>
    </section>
  )
}

export default Hero