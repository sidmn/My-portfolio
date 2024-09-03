import { socialMedia } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">

      <div className="flex flex-col items-center md:gap-0 gap-5">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-row gap-5">
            <a href="mailto:sidmantri3@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
            </a>
            <a target="_blank" href="https://docs.google.com/presentation/d/1ljW24ROqc8CPDE1_rvswVl0mMDdJYBmL_no7pH3_u44/edit?usp=sharing">
          <MagicButton
            title="Check out my Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
            </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Siddharth Mantri
        </p>

       
      </div>
    </footer>
  )
}

export default Footer
