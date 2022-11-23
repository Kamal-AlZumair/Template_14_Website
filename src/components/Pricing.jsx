import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing w-[100%] mt-4'>
      <div className='pricing-container max-w-[1240px] p-4 mx-auto overflow-hidden'>
        <div className='top-content  grid md:grid-cols-12 border-b border-b-[var(--lightgrey)] pb-8'>
          <div className=' col-span-8'>
            <h2 className='font-bold md:text-[24px] lg:text-[38px] '>Everything you need for <span className='text-[var(--primary)]'>$99 a month</span></h2>
            <p className=' text-[var(--grey)] text-[10px] py-4 sm:text-base'>Include every feature we offer plus unlimited projects and unlimited users.</p>
          </div>
          <div className='btn-div col-span-4'>
            <button className='btn'>Get started today</button>
          </div>
        </div>
        <div className='bottom-content grid sm:grid-cols-3 gap-[10px] my-8 mx-auto'>
          <div className='card flex flex-col pt-4 pr-4 pb-4 pl-0 '>
            <p><span className='text-[var(--primary)] uppercase font-medium text-sm'>Everything you need</span></p>
            <h3 className='text-[28px] my-3'>All-in-one platform</h3>
            <p className=' text-[12px] md:text-base'>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when looking
              at its layout.</p>
          </div>
          <div className='card flex flex-col pt-4 pr-4 pb-4 pl-0'>
            <div className=' flex  py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className=' flex py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)] '>Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className=' flex  py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className=' flex py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className=' flex py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
          </div>
          <div className='card card flex flex-col pt-4 pr-4 pb-4 pl-0'>
            <div className=' flex py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className=' flex py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className=' flex py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className=' flex py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className=' flex py-2'>
              <p className=' text-xs md:text-base border-b border-b-[var(--lightgrey)]'>Lorem Ipsum is simply dummy text.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
