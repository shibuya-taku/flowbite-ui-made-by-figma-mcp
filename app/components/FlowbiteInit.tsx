'use client';

import { useEffect } from 'react';

export function FlowbiteInit() {
  useEffect(() => {
    const initFlowbite = async () => {
      const flowbite = await import('flowbite');
      
      // Flowbite 1.xの場合
      if (typeof flowbite.default?.initFlowbite === 'function') {
        flowbite.default.initFlowbite();
      } 
      // Flowbite 2.xの場合
      else if (typeof flowbite.initFlowbite === 'function') {
        flowbite.initFlowbite();
      }
      // 個別の初期化関数がある場合
      else {
        if (typeof flowbite.initDropdowns === 'function') {
          flowbite.initDropdowns();
        }
        
        if (typeof flowbite.initModals === 'function') {
          flowbite.initModals();
        }
        
        if (typeof flowbite.initCollapses === 'function') {
          flowbite.initCollapses();
        }
      }
    };
    
    initFlowbite();
  }, []);
  
  return null;
} 