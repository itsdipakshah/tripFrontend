import React from 'react'
import FreaturesCard from '../common/FreaturesCard'

const Features = () => {
  return (
    <section className='px-20 py-16 bg-[#bce0f5]'>

        {/* heading */}
        <div>
            <h2 className='text-5xl font-bold text-center mb-10'>Our <span className='text-orange-500'>Features</span> </h2>
        </div>

        {/* content */}
        <div className='grid grid-cols-4 gap-4'>
            <FreaturesCard/>
            <FreaturesCard/>
            <FreaturesCard/>
            <FreaturesCard/>
        </div>

    </section>
  )
}

export default Features