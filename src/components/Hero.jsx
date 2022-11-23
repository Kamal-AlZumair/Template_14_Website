import React from 'react'
import {FaDatabase, FaAccusoft ,FaAsterisk, FaFacebook, FaGithub ,FaTwitter} from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='hero w-[100%] md:h-[90vh]  bg-[var(--darkgrey)]'>
      <div className='hero-container max-w-[1240px] px-4 mx-auto'>
        <div className='content grid md:grid-cols-2'>
          <div className='col-1 py-4 pr-4 pl-0 h-[70vh] flex flex-col justify-center'>
            <h1 className='text-[30px] sm:text-[42px] font-[700] text-white'>Data to enrich your</h1>
            <h1 className='text-[30px] sm:text-[42px] font-[700] text-white'><span className=' text-[var(--primary)]'>online bushiness</span></h1>
            <p className='text-[14px] sm:text-[1rem] text-[var(--grey)] mt-4 max-w-[400px]'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour,
              or randomised words which don't look even slightly believable.
              </p>
            <div className='used-by'>
              <p className=' text-[var(--lightgrey)] text-[12px] mt-8 mb-4'>USED BY</p>
              <div className='icons flex flex-row'>
                <i className=' text-[10px] md:text-base text-[var(--grey)] pr-2 flex items-center'><FaDatabase className='mr-4'/>Staxx</i>
                <i className=' text-[10px] md:text-base text-[var(--grey)] pr-2 flex items-center my-4'><FaAsterisk className='mr-4'/> Star AI</i>
                <i className=' text-[10px] md:text-base text-[var(--grey)] pr- flex items-center'><FaAccusoft className='mr-4'/> Accusoft</i>
              </div>
            </div>
          </div>
          <div className='col-2 mt-4 sm:mt-0 items-center p-4 h-[70vh] flex flex-col justify-center text-[.8rem]'>
            <div className='form-layout lg:w-[400px] mx-auto bg-white rounded-md'>
              <div className='form-container py-6 px-8'>
                <p className='sign-in-text text-[var(--grey)] mb-[10px]'>Sign in with</p>
                <div className='social flex w-[100%] justify-evenly'>
                  <i className=' '><FaFacebook size={20}/></i>
                  <i className=' '><FaTwitter size={20}/></i>
                  <i className=' '><FaGithub size={20}/></i>
                </div>
                <div className='divider'>
                  <p className=' w-[100%] text-center border-b border-b-[var(--lightgrey)] mt-4 mb-4'><span className='px-[10x]'>Or</span></p>
                </div>
                <form className=' flex flex-col'>
                  <input className=' w-[100%] my-4 p-[8px] border border-[var(--lightgrey)] rounded-md' type="text" placeholder='Enter Your Name'/>
                  <input className=' w-[100%] my-4 p-[8px] border border-[var(--lightgrey)] rounded-md' type="email" placeholder='Enter Your Email'/>
                  <input className=' w-[100%] my-4 p-[8px] border border-[var(--lightgrey)] rounded-md' type="password" placeholder='Enter Your Password'/>
                  <button className=' btn'>Create Your Account</button>
                </form>
              </div>
              <div className='form-footer border-t border-t-[var(--lightgrey)] mx-auto  bg-[#f8f8f8] rounded-b-md'>
                <p className='py-[1.5rem] px-8'>By signing up, you agree to our
                  <span className='text-[var(--primary)] fon-bold'> Terms, Data Policy</span> and
                  <span className='text-[var(--primary)] fon-bold'> Cookies Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
