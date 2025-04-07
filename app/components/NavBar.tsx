'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
  onMenuClick?: () => void;
}

export function NavBar({ onMenuClick }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  useEffect(() => {
    const initFlowbite = async () => {
      const flowbite = await import('flowbite');
      if (typeof flowbite.initFlowbite === 'function') {
        flowbite.initFlowbite();
      }
    };
    
    initFlowbite();
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed w-full z-50">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo and Search */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-6">
            <svg className="h-8 w-8 mr-2" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.1516 1.15456C30.1516 1.15456 19.0957 -0.326663 11.5957 7.17334C4.09567 14.6733 4.59567 24.7733 4.59567 24.7733" stroke="url(#paint0_linear_0_1)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.59567 24.7734C4.59567 24.7734 15.6516 26.2546 23.1516 18.7546C30.6516 11.2546 30.1516 1.15456 30.1516 1.15456" stroke="url(#paint1_linear_0_1)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.8742 14.7548C16.2231 13.1037 13.5394 13.1037 11.8883 14.7548C10.2373 16.4058 10.2373 19.0896 11.8883 20.7406C13.5394 22.3917 16.2231 22.3917 17.8742 20.7406C19.5253 19.0896 19.5253 16.4058 17.8742 14.7548Z" stroke="url(#paint2_linear_0_1)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear_0_1" x1="30.1516" y1="1.15456" x2="4.59567" y2="24.7733" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1C64F2"/>
                  <stop offset="1" stopColor="#0092FF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_0_1" x1="4.59567" y1="24.7734" x2="30.1516" y2="1.15456" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1724C9"/>
                  <stop offset="1" stopColor="#1C64F2"/>
                </linearGradient>
                <linearGradient id="paint2_linear_0_1" x1="11.8883" y1="20.7406" x2="17.8742" y2="14.7548" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0092FF"/>
                  <stop offset="1" stopColor="#45B2FF"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
          </Link>
          
          <div className="hidden md:flex relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" className="block p-2.5 pl-10 w-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" />
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          type="button"
          data-collapse-toggle="mobile-menu-2"
          className="inline-flex items-center p-2 ml-1 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu-2"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Notification Icon */}
          <button type="button" className="p-2 rounded-lg hover:bg-gray-100">
            <span className="sr-only">View notifications</span>
            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.4V3m0 2.4a5.1 5.1 0 0 1 5.1 5.1v2.92l1.076 1.618a.6.6 0 0 1-.506.922H6.33a.6.6 0 0 1-.506-.922L6.9 13.42V10.5A5.1 5.1 0 0 1 12 5.4Zm0 0V3m0 14.4a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Z"/>
            </svg>
          </button>
          
          {/* Apps Icon */}
          <button type="button" className="p-2 rounded-lg hover:bg-gray-100">
            <span className="sr-only">View apps</span>
            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          
          {/* User Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-200 relative">
            <Image 
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
              alt="User avatar" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} fixed top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden`}
          id="mobile-menu-2"
        >
          <div className="px-4 py-3">
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" className="block w-full p-2 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" />
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <button type="button" className="p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.4V3m0 2.4a5.1 5.1 0 0 1 5.1 5.1v2.92l1.076 1.618a.6.6 0 0 1-.506.922H6.33a.6.6 0 0 1-.506-.922L6.9 13.42V10.5A5.1 5.1 0 0 1 12 5.4Zm0 0V3m0 14.4a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Z"/>
                </svg>
              </button>
              <button type="button" className="p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-200 relative">
                <Image 
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
                  alt="User avatar" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 