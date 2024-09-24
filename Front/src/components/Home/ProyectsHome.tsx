import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProyectsHome = () => {
  return (
    <div className="w-[90%] md:w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 m-auto mt-[20px]">
      <Link
        href="https://dent-all-black.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded bg-black/30 flex justify-center flex-col gap-4 p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-emerald-300/50 h-[280px] sm:h-[300px]">
          <div className="flex justify-center items-center">
            <Image
              className="rounded"
              src="/images/Dentall.png"
              alt="Dentall"
              width={200}
              height={200}
            />
          </div>
          <p className="text-[18px] sm:text-[20px] text-darkD-300 text-center">
            Sistema de gestion de turnos para clinicas.
          </p>
        </div>
      </Link>

      <div className="rounded bg-black/30 flex justify-center flex-col gap-4 p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 h-[280px] sm:h-[300px]">
        <h2 className="text-[24px] sm:text-[30px] font-bold text-start">
          Proyecto Dentall
        </h2>
        <p className="text-[18px] sm:text-[20px] text-darkD-300 text-start font-medium">
          Este proyecto fue realizado como proyecto final en Soy Henry con un
          grupo excelente de compañeros de los cuales también logré aprender
          mucho.
        </p>
      </div>

      <div className="rounded bg-black/30 flex justify-center flex-col gap-4 p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 h-[280px] sm:h-[300px]">
        <h2 className="text-[24px] sm:text-[30px] font-bold text-end">
          Proyecto Technovid
        </h2>
        <p className="text-[18px] sm:text-[20px] text-darkD-300 text-end font-medium">
          Este proyecto fue realizado como proyecto integrador en Soy Henry
          donde elegí la especialización como Front-end.
        </p>
      </div>

      <Link
        href="https://ft49-m4-deploy-front.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded bg-black/30 flex justify-center flex-col gap-4 p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-yellow-300/60 h-[280px] sm:h-[300px]">
          <div className="flex justify-center items-center">
            <Image
              className="rounded"
              src="/images/Technovid.png"
              alt="Technovid"
              width={150}
              height={200}
            />
          </div>
          <p className="text-[18px] sm:text-[20px] text-darkD-300 text-center font-medium">
            E-Commerce para venta de productos electrónicos.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProyectsHome;
