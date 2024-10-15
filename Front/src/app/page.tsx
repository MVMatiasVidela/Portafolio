'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import './globals.css';
import Title from '@/components/Home/Title/title';
import Cv from '@/components/CV/Cv';
import ProyectsHome from '@/components/Home/ProyectsHome';
import Info from '@/components/Home/Info';
import Particles from '@/components/ui/particles';

export default function Home() {
   const { theme } = useTheme();
   const [color, setColor] = useState('#ffffff');

   useEffect(() => {
     setColor(theme === 'white' ? '#ffffff' : '#ffffff');
   }, [theme]);

  return (
    <div className=" relative bg-black/50 p-8">
      <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
     
        <Title />
      
     
        <Info />
    
   
        <ProyectsHome />
      
      <div className="flex flex-col items-center m-[100px]">
        <p className="text-[40px] font-semibold">¿Te interesa contratarme?</p>
        <p className="text-[20px] mt-4 text-center">
          ¡Hablemos y exploremos cómo puedo aportar valor a tu equipo!
        </p>

        <Cv />
      </div>
    </div>
  );
}
