'use client';

import React from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

export function CardGrid() {
  const cards: Card[] = [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      color: "blue",
      icon: (
        <svg className="w-5 h-5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
          <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
          <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      color: "purple",
      icon: (
        <svg className="w-5 h-5 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      color: "green",
      icon: (
        <svg className="w-5 h-5 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 16c-3.047 0-5.5-2.735-5.5-5a.5.5 0 0 1 1 0c0 1.799 1.965 4 4.5 4s4.5-2.201 4.5-4a.5.5 0 0 1 1 0c0 2.265-2.453 5-5.5 5Z"/>
        </svg>
      )
    }
  ];

  const getBackgroundColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100';
      case 'purple':
        return 'bg-purple-100';
      case 'green':
        return 'bg-green-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getButtonColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300';
      case 'purple':
        return 'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300';
      case 'green':
        return 'bg-green-700 hover:bg-green-800 focus:ring-green-300';
      default:
        return 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-300';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${getBackgroundColor(card.color)}`}>
                {card.icon}
              </div>
              <button className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
              </button>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {card.title}
            </h5>
            <p className="mb-4 font-normal text-gray-700">
              {card.description}
            </p>
            <a 
              href="#" 
              className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${getButtonColor(card.color)}`}
            >
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 