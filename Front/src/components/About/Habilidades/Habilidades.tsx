import React from "react";

const Habilidades = () => {
  return (
    <div className="w-[80%] mt-[3%] rounded bg-black/30 flex justify-center flex-col m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      <div>
        <h2 className="text-[30px] font-semibold">Habilidades blandas</h2>
      </div>
      <div className="flex gap-4 text-darkD-300 text-[20px]">
        <p className="border-b-2 border-yellow-400">Comunicación</p>
        <p className="border-b-2 border-sky-600">Autonomía</p>
        <p className="border-b-2 border-orange-600">Trabajo en equipo</p>
        <p className="border-b-2 border-green-400">Resolución de problemas</p>
        <p className="border-b-2 border-blue-700">Adaptabilidad</p>
      </div>
    </div>
  );
};

export default Habilidades;
