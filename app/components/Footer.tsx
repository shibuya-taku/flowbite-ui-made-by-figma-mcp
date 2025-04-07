'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 p-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <span className="text-sm text-gray-500">
            © 2021 Flowbite. All rights reserved.
          </span>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-blue-700 text-sm font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 text-sm font-medium">
              API
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center mt-4 space-x-5 justify-end">
          <button type="button" className="text-gray-500 hover:text-gray-900 flex items-center text-sm">
            <div className="w-5 h-5 mr-2 rounded-full overflow-hidden">
              <img src="https://www.flowbite-react.com/images/flags/us.svg" alt="English" />
            </div>
            English (US)
            <svg className="w-2.5 h-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div className="flex space-x-2">
            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V10m6-6.75V1m0 2.25a2.25 2.25 0 1 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M16 19V10"/>
              </svg>
              <span className="sr-only">Adjustments</span>
            </button>
            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"/>
              </svg>
              <span className="sr-only">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 