import React from "react";

const Habilidades = () => {
  return (
    <div className="w-[80%] sm:w-[85%] md:w-[80%] mt-[5%] sm:mt-[3%] rounded bg-black/30 flex justify-center flex-col m-auto gap-8 p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      <div>
        <h2 className="text-[24px] sm:text-[30px] font-bold text-center sm:text-left">
          Habilidades blandas
        </h2>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8 text-darkD-300 text-[18px] sm:text-[20px]">
        <p className="border-b-2 border-yellow-400 hover:scale-110 transition duration-300 font-medium">
          Comunicación
        </p>
        <p className="border-b-2 border-sky-600 hover:scale-110 transition duration-300 font-medium">
          Autonomía
        </p>
        <p className="border-b-2 border-orange-600 hover:scale-110 transition duration-300 font-medium">
          Trabajo en equipo
        </p>
        <p className="border-b-2 border-green-400 hover:scale-110 transition duration-300 font-medium">
          Resolución de problemas
        </p>
        <p className="border-b-2 border-blue-700 hover:scale-110 transition duration-300 font-medium">
          Adaptabilidad
        </p>
      </div>
    </div>
  );
};

export default Habilidades;
