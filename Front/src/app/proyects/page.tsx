import Proyectos from '@/components/Proyectos/Proyectos';
import Cv from '@/components/CV/Cv';
import SuscribeButton from '@/components/Suscribe/Suscribe';

import React from 'react';

const page = () => {
  return (
    <div className="bg-black/50 p-8 ">
      <Proyectos />
      <div>
        <h1 className="text-center text-3xl font-bold mt-8">
          ¡Suscribete a mi canal de You Tube!
        </h1>
        <SuscribeButton />
      </div>
      <div className="flex flex-col items-center m-[100px]">
        <p className="text-[40px] font-semibold">¿Te interesa contratarme?</p>
        <p className="text-[20px] mt-4 text-center">
          ¡Hablemos y exploremos cómo puedo aportar valor a tu equipo!
        </p>
        <Cv />
      </div>
    </div>
  );
};

export default page;
