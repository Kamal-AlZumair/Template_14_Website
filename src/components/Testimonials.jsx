import React from 'react'
import { FaDatabase } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className='testimonial w-[100%] bg-white my-4 md:my-12 text-white'>
      <div className=' text-container max-w-[1240px] mx-auto p-4 overflow-hidden'>
        <div className='test-img w-[100%] h-[450px] bg-left rounded-lg bg-cover'>
          <div className="content flex flex-col h-[100%] md:max-w-[50%] justify-center p-8">
            <i className=' flex items-center'><FaDatabase className='mr-1'/> Staxx</i>
            <p className=' py-5'>
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </p>
            <div className='name'>
              <p className=' text-sm'>Kamal Al-Zumair</p>
              <p className=' text-sm'>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
