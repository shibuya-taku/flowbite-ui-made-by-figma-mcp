'use client';

import React from 'react';

export function PageHeader() {
  const stats = [
    {
      id: 1,
      title: "$76,940",
      subtitle: "350 invoices",
      status: "Paid",
      badgeColor: "green"
    },
    {
      id: 2,
      title: "$23,145",
      subtitle: "64 invoices",
      status: "Unpaid",
      badgeColor: "red"
    },
    {
      id: 3,
      title: "$7,431",
      subtitle: "14 invoices",
      status: "Pending",
      badgeColor: "yellow"
    },
    {
      id: 4,
      title: "$2,826",
      subtitle: "10 invoices",
      status: "Overdue",
      badgeColor: "gray"
    }
  ];

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-800';
      case 'red':
        return 'bg-red-100 text-red-900';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-800';
      case 'gray':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="px-4 mb-4">
      {/* Breadcrumb */}
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">E-commerce</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ml-1 text-sm font-medium text-blue-600 md:ml-2">Invoices</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-900 mb-5">My Invoices</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white border border-gray-200 rounded-lg p-5 shadow-card">
            <div className="flex justify-start mb-3">
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getBadgeColor(stat.badgeColor)}`}>
                {stat.status}
              </span>
            </div>
            <div className="text-xl font-bold text-gray-900 mb-2">{stat.title}</div>
            <div className="text-sm font-normal text-gray-500">{stat.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 