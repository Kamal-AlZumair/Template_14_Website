import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact w-[100%] my-4 md:my-8 flex'>
      <div className=' con-container max-w-[1240px] mx-auto overflow-hidden flex flex-col md:flex-row'>
        <div className="col-1 flex-[1 0 45%] py-20 px-4">
          <div className="content">
            <div>
              <h2 className=' text-[28px] py-2'>Get in touch</h2>
              <p className='text-[var(--grey)] max-w-[700px]'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className='address py-4'>
              <p>12 Evergreen Terrace</p>
              <p>Springfield, Or 12345</p>
            </div>
            <div className="icon flex items-center py-2">
              <FaPhone className='mr-2'/>
              <p>+967 770-600-218</p>
            </div>
            <div className="icon flex items-center py-2">
              <FaEnvelope className='mr-2'/>
              <p>kamalzumair@gmail.com</p>
            </div>
            <div className="career py-4">
              <p>Looking for careers? <span className=' text-[var(--primary)]'>View all jobs opening</span></p>
            </div>
          </div>
        </div>
        <div className="col-2 flex-[1 0 55%] md:py-20 px-4">
          <form className=' flex flex-col max-w-[500px] mx-auto'>
            <input className=' mb-4 p-2 border border-[var(--lightgrey)] rounded' type="text" placeholder='Full Name'/>
            <input className=' mb-4 p-2 border border-[var(--lightgrey)] rounded' type="email" placeholder='Email' />
            <input className=' mb-4 p-2 border border-[var(--lightgrey)] rounded' type="number" placeholder='Phone'/>
            <textarea className=' resize-none mb-4 p-2 border border-[var(--lightgrey)] rounded' name="message" placeholder='Message' cols="30" rows="5"></textarea>
            <div className="checkbox flex items-center justify-center py-4">
              <input type="checkbox" className=' mr-1'/>
              <p className=' text-xs'>By checking this box, you agree to the <span className=' text-[var(--primary)]'>Privacy Policy </span>
               and <span className='text-[var(--primary)]'>Cookie Policy</span>.</p>
            </div>
            <button className='btn'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
