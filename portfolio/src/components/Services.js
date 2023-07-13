import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { m, motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const services = [
  {
    name: 'UI/UX Design',
    description: 'Description',
    link: 'Learn more'
  },
  {
    name: 'Digital Marketing',
    description: 'Description',
    link: 'Learn more'
  }
]

const Services = () => {
  return (
    <>
      <section id='services' className='section'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>
            {/* text && image */}
            <motion.div
              variants={fadeIn('right', 0.3)} initial="hidden"
              whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
              className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten 
            mb-12 lg:mb-0'>
              <h2 className='h2 text-accent mb-6'>What I Do.</h2>
              <h3 className='h3 max-w-[455px] mb-16'>
                I'm a freelancer
              </h3>
              <button className='btn btn-bg'>See my work</button>
            </motion.div>
            {/* services */}
            <motion.div
              variants={fadeIn('left', 0.5)} initial="hidden"
              whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
              className='flex-1'>
              {/* service list */}
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px]' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                      <div className='flex flex-col flex-1 items-end'>
                        <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                          <BsArrowUpRight />
                        </a>
                        <a className='text-gradient text-sm' href='#'>{link}</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Services;