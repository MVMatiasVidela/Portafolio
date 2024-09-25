
import Image from 'next/image';
import React from 'react';

const MaintenancePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="bg-gradient-to-r from-purple-900  rounded-full w-[30%] border p-8 flex justify-center items-center">
        <Image
          className="flex justify-center items-center"
          width={300}
          height={300}
          alt="Logo"
          src="/images/logo.png"
        />
      </div>
      <div className="text-center ">
        <h1 className="text-5xl font-bold text-white mb-4">
          🚧 Sitio en Mantenimiento 🔧
        </h1>
        <p className="text-xl text-gray-300">
          Estamos trabajando para mejorar su experiencia. Por favor, vuelva
          pronto.
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
