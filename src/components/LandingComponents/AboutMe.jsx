import React from 'react'

const AboutMe = () => {
  return (
    <section className='px-20 py-16 bg-gray-100'>

          {/* heading */}
        <div>
            <h2 className='text-5xl font-bold text-center mb-10'>About <span className='text-orange-500'>Me</span> </h2>

            {/* content */}

             <div className='flex gap-5 flex-col-2 justify-between'>
                 <div className='w-2/6 '>
                        <h3 className='mb-3'>Know About Trip ,</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat amet iure et vero quisquam doloribus ullam sint corporis perspiciatis nulla, repellat nisi dolorem earum? Dolorum quod officiis et. Quis, sapiente?</p>
                 </div>
                  <div className='w-4/6 '>
                     <img src="https://th.bing.com/th/id/R.5f68b2d6ff398042e068f65988aee2db?rik=LD7OcQo5WYyUXQ&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f81%2f55%2fPmbxsi.jpg&ehk=vArOQIsECzLBqyLhhiW0wMWXMCt49LGLXeNuonf1yKU%3d&risl=&pid=ImgRaw&r=0" width={400} height={350} alt="" />
                 </div>
             </div>
        </div>
 
    </section>
  )
}

export default AboutMe