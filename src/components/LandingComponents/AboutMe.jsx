import React from 'react'

const AboutMe = () => {
  return (
    <section className='px-20 py-16 bg-[#cfffc7]'>

          {/* heading */}
        <div>
            <h2 className='text-5xl font-bold text-center mb-10'>About <span className='text-orange-500'>Me</span> </h2>

            {/* content */}

             <div className='flex gap-5 justify-between items-center'>
                 <div>
                        <p>Mee</p>
                 </div>
                  <div>
                     <p>content</p>
                 </div>
             </div>
        </div>

    </section>
  )
}

export default AboutMe