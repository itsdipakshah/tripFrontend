import React from 'react'

const CustomBottom = ({text}) => {
  return (
    <button className='bg-blue-500 text-white px-6 py-1.5 rounded-md cursor-pointer hover:bg-green-500 hover:font-bold  animate-bounce hover:shadow-lg '>
     { text }
    </button>
  )
}

export default CustomBottom