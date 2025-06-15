import React from 'react';
import appStore from '../assets/appStore.svg';
import googlePlay from '../assets/googlePlay.svg';

const Footer = () => {
  return (
    <footer className='bg-black text-white px-6 md:px-16 lg:px-36 py-12 mt-40'>
      <div className='flex flex-col md:flex-row justify-between gap-12'>
        {/* Left: Brand + Text + Store Buttons */}
        <div className='md:w-1/2'>
          <h1 className='text-2xl font-bold text-white'>
            <span className='text-primary'>Quick</span>Show
          </h1>
          <p className='text-gray-400 mt-4 text-sm leading-relaxed max-w-md'>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className='flex gap-4 mt-6'>
            <img src={googlePlay} alt="Google Play" className='h-10 cursor-pointer' />
            <img src={appStore} alt="App Store" className='h-10 cursor-pointer' />
          </div>
        </div>

        {/* Center: Company Links */}
        <div>
          <h2 className='font-semibold text-white mb-4'>Company</h2>
          <ul className='space-y-2 text-gray-400 text-sm'>
            <li><a href='#' className='hover:text-white'>Home</a></li>
            <li><a href='#' className='hover:text-white'>About us</a></li>
            <li><a href='#' className='hover:text-white'>Contact us</a></li>
            <li><a href='#' className='hover:text-white'>Privacy policy</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className='font-semibold text-white mb-4'>Get in touch</h2>
          <p className='text-gray-400 text-sm mb-2'>+91 8279963459</p>
          <p className='text-gray-400 text-sm'>sagar@example.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className='border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500'>
        Copyright 2025 © Sagar Sharma. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
