import React from 'react';
//images
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <>
      <header className='py-5'>
        <div id='home' className='container mx-auto pt-6'>
          <div className='flex justify-between items-center'>
            <a href='#'>
              <span className='text-gradient btn-link font-black text-4xl'>TAM</span>
              <br />
              <span className='text-white btn-link font-black text-4xl'>DEVELOPER</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
