'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import AdviceDetails from '@/components/advice/AdviceDetails';
import AdviceContent from '@/components/advice/AdviceContent';



const AdvicePage = () => {
  const pathname = usePathname();

 
 
  // Effectuez ici les traitements nécessaires pour récupérer les données spécifiques au slug

  return (
     <AdviceDetails>
        <AdviceContent slug={pathname}/>
     </AdviceDetails>
  );
};

export default AdvicePage;