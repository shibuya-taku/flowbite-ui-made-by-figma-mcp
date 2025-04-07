'use client';

import React, { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Sidebar } from './components/Sidebar';
import { PageHeader } from './components/PageHeader';
import { InvoiceTable } from './components/InvoiceTable';
import { Footer } from './components/Footer';

export default function Home() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // レスポンシブ対応：画面サイズに応じて状態を変更
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    // 初期設定
    handleResize();
    
    // リサイズイベントに対応
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // モバイル表示時のサイドバー開閉
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <NavBar onMenuClick={toggleSidebar} />
      
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-30 transition-opacity duration-300 ${
        isMobileView && sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={toggleSidebar}></div>
      
      <div className={`transform transition-transform duration-300 ease-in-out ${
        isMobileView ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
      }`}>
        <Sidebar />
      </div>
      
      <div className={`pt-16 transition-all duration-300 ${isMobileView ? 'ml-0' : 'sm:ml-64'}`}>
        <div className="p-4 responsive-container">
          <PageHeader />
          <InvoiceTable />
        </div>
        <Footer />
      </div>
    </main>
  );
} 