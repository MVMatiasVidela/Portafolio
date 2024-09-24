
import React from 'react';

const MaintenancePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Sitio en Mantenimiento
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
