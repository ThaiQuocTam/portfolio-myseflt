import React from 'react';
//images
import Images from '../assets/avatar.png'
//icons
import { FaGithub, FaFacebookF, FaPhone } from 'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <>
      <section id='banner' className='min-h-[85vh] lg:min-h-[78vh] flex items-center '>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
            {/* text */}
            <div className='flex-1 text-center font-secondary lg:text-left'>
              <motion.h1
                variants={fadeIn('up', 0.3)} initial="hidden"
                whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>TAM <span>DEV</span></motion.h1>
              <motion.div
                variants={fadeIn('up', 0.4)} initial="hidden"
                whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold
              uppercase leading-[1]'>
                <span className='text-white mr-4'>I am a</span>
                <TypeAnimation
                  sequence={[
                    'FE Developer',
                    2000,
                    'JS Developer',
                    2000,
                  ]}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                />
                <motion.p
                  variants={fadeIn('up', 0.5)} initial="hidden"
                  whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                  className='mb-8 max-w-lg mx-auto lg:mx-0 italic'>
                  <span className='text-accent'>"</span>Do not give up!<span className='text-accent'>"</span>
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 0.6)} initial="hidden"
                  whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto
                lg:mx-0'>
                  <button className='btn btn-lg'>Contact me</button>
                  <a href='#' className='text-gradient btn-link'> My portfolio</a>
                </motion.div>
                {/* socials */}
                <motion.div
                  variants={fadeIn('up', 0.7)} initial="hidden"
                  whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                  className='flex text-[20px] gap-x-6 max-w-full justify-center lg:justify-normal'>
                  <a target="_blank" href='https://www.facebook.com/viet.tam.3956/'>
                    <FaFacebookF />
                  </a>
                  <a target="_blank" href='https://github.com/ThaiQuocTam'>
                    <FaGithub />
                  </a>
                  <a target="_blank" href='https://zalo.me/s/qrwallet?fbclid=IwAR3bFlqtM_epUpEiUTrLMZTCJCkJlxh78JQ9y4BRHZdeOdZcbajm1O8B_Qk'>
                    <FaPhone />
                  </a>
                </motion.div>
              </motion.div>
            </div>
            {/* image */}
            <motion.div
              variants={fadeIn('down', 0.5)} initial="hidden"
              whileInView={'show'}
              className='hidden lg:flex h-[446px] flex-1 max-w-[320px] lg:max-w-[482px] mx-auto '>
              <img className='w-full object-none' src={Images} alt='image avatar' />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
