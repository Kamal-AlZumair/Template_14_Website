import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer w-[100%] bg-[var(--darkgrey)]'>
      <div className="foot-container max-w-[1240px] py-8 px-4 mx-auto overflow-hidden grid md:grid-cols-12">
        <div className="col col-span-2">
          <h6 className=' text-[var(--lightgrey)] font-semibold  py-2'>Solutions</h6>
          <ul>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Marketing</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Analytics</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Commerce</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Insights</li>
          </ul>
        </div>
        <div className="col col-span-2">
          <h6 className=' text-[var(--lightgrey)] font-semibold  py-2'>Support</h6>
          <ul>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Pricing</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Documentation</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Guides</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>API Status</li>
          </ul>
        </div>
        <div className="col col-span-2">
          <h6 className=' text-[var(--lightgrey)] font-semibold  py-2'>Company</h6>
          <ul>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>About</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Blog</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Jobs</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Press</li>
          </ul>
        </div>
        <div className="col col-span-2">
          <h6 className=' text-[var(--lightgrey)] font-semibold  py-2'>Legal</h6>
          <ul>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Claims</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Privacy</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Cookies</li>
            <li className=' text-[var(--lightgrey)] text-sm py-1'>Terms</li>
          </ul>
        </div>
        <div className=' col-subscribe col-span-4 '>
          <h6 className=' text-[var(--lightgrey)] font-semibold  py-2'>Subscribe to our newsletter</h6>
          <p className='text-[var(--lightgrey)] py-2 text-sm'>The latest news, articles, and resources sent to your inbox weekly.</p>
          <div className='flex justify-center items-center'>
            <input type="email" placeholder='Enter your email' className=' py-[8px] mr-1 border border-[var(--lightgrey)]  text-sm rounded w-[250px] flex-1'/>
            <button className=' bg-[var(--primary)] py-[8px] px-1 rounded text-white'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className=' content max-w-[1240px] mx-auto p-4 flex flex-col md:flex-row  justify-between border-t border-t-[var(--grey)]'>
          <div className=' rights mb-4'>
            <p className=' text-white'> &copy; Workflow, Inc. All rights reserved.</p>
          </div>
          <div className=' flex justify-between'>
            <FaFacebook size={20} className='text-[#d3d3d3] mr-[10px]'/>
            <FaTwitter size={20} className='text-[#d3d3d3] mr-[10px]'/>
            <FaInstagram size={20} className='text-[#d3d3d3] mr-[10px]'/>
            <FaGithub size={20} className='text-[#d3d3d3] mr-[10px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
