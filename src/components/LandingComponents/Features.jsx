import React from 'react'
import FreaturesCard from '../common/FreaturesCard'
import { Bookmark, Check, CrossIcon, PhoneCall, User2 } from 'lucide-react'

const Features = () => {
  let featuresData =[
    {
      Icon:Bookmark,
      title:"24/7 Support",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi placeat maxime deserunt delectus commodi quam, odit distinctio ex expedita, perferendis temporibus quas et, accusantium laborum ullam totam! Aspernatur, accusamus officiis."
    },
    {
      title:"Security Services",
      description:"Quasi placeat maxime deserunt delectus commodi quam, odit distinctio ex expedita, perferendis temporibus quas et, accusantium laborum ullam totam! Aspernatur, accusamus officiis.",
      Icon: CrossIcon
    },
    {
      title:"Risk Management",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi placeat maxime deserunt delectus commodi quam, odit distinctio ex expedita, perferendis temporibus quas et, accusantium laborum ",
      Icon:User2
    },
    {
      title:"Payment Details",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi placeat maxime deserunt delectus commodi quam, odit distinctio ex expedita, perferendis temporibus quas et, accusantium laborum ",
      Icon:Check
    },
  ]
  return (
    <section className='px-20 py-16 bg-[#bce0f5]'>

        {/* heading */}
        <div>
            <h2 className='text-5xl font-bold text-center mb-10'>Our <span className='text-orange-500'>Features</span> </h2>
        </div>

        {/* content */}
        <div className='grid grid-cols-4 gap-4'>
           {
            featuresData.map((feature ,index)=>{
              return(
                <FreaturesCard feature={feature} key={index} />
              )
            })
           }
        </div>

    </section>
  )
}

export default Features