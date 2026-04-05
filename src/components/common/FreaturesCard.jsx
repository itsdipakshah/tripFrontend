
import { Heart } from 'lucide-react'
import React from 'react'

const FreaturesCard = () => {
  return (
   <div className='border-2 border-gray-400 rounded-md p-4 bg-[#d5bbff5d] '>
  <Heart size={24} />
    <h3 className='text-2xl font-medium mb-4'>24/7 Availability</h3>
    <p className='text-gray-500'>Our team is avaliable around the clock to assist you wiht any question or concerms.</p>
   </div>
  )
}

export default FreaturesCard