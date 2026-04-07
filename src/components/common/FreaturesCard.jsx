
import { Heart } from 'lucide-react'
import React from 'react'

const FreaturesCard = ({feature}) => {

  
  return (
   <div className='border-2 border-gray-400 rounded-md p-4 bg-[#d5bbff5d] '>
    <div className='flex items-center gap-3 mb-4'>
      <feature.Icon size={24} className="text-blue-600 mb-4" />
    <h3 className='text-2xl font-medium mb-4'>{feature.title}</h3>
    </div>
  
    <p className='text-gray-500'>{feature.description}</p>
   </div>
  )
}

export default FreaturesCard