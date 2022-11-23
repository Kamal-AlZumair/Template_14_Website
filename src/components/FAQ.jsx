import React from 'react'

const FAQ = () => {
  return (
    <div className=' faq w-[100%] my-4 md:my-8'>
      <div className=' faq-container max-w-[1240px] p-4 mx-auto overflow-hidden grid md:grid-cols-2'>
        <div className='col-1'>
          <h3 className='text-[20px] sm:text-[28px] py-4'>Frequently asked questions</h3>
          <p className=' text-[15px] text-[var(--grey)] sm:text-base'>Can't find the answer you're looking for?</p>
          <p className=' text-[15px] text-[var(--grey)] sm:text-base'>Reach out  to our <span className='text-[var(--primary)]'>customer support</span> team.</p>
        </div>
        <div className='col-2 '>
          <div className='faq py-4'>
            <h5 className=' py-2 font-bold'>How do you make holy water?</h5>
            <p className=' text-[var(--grey)]'>It has survived not only five centuries.</p>
          </div>
          <div className='faq py-4'>
            <h5 className=' py-2 font-bold'>How do you make holy water?</h5>
            <p className=' text-[var(--grey)]'>It has survived not only five centuries.</p>
          </div>
          <div className='faq py-4'>
            <h5 className=' py-2 font-bold'>How do you make holy water?</h5>
            <p className=' text-[var(--grey)]'>It has survived not only five centuries.</p>
          </div>
          <div className='faq py-4'>
            <h5 className=' py-2 font-bold'>How do you make holy water?</h5>
            <p className=' text-[var(--grey)]'>It has survived not only five centuries.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
