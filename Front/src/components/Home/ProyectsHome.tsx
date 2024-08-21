import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProyectsHome = () => {
  return (
    <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 m-auto mt-[10px]">
      <Link
        href="https://dent-all-black.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded bg-black/30 flex justify-center flex-col m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-emerald-300/50 h-[300px]">
          <div className="flex justify-center items-center">
            <Image
              className="rounded"
              src="/images/Dentall.png"
              alt="Henry"
              width={200}
              height={200}
            />
          </div>
          <p className="text-[20px] text-darkD-300 text-center">
            Plataforma E-Commerce para venta de productos electrónicos.
          </p>
        </div>
      </Link>
      <div className="rounded bg-black/30 flex justify-center flex-col m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 h-[300px]">
        <h2 className="text-[30px] font-semibold text-center">
          Proyecto Final Dentall
        </h2>
        <p className="text-[20px] text-darkD-300 text-center">
          Este proyecto fue realizado como proyecto final en el bootcamp Soy
          Henry con un grupo excelente de compañeros de los cuales también logré
          aprender mucho.
        </p>
      </div>
      <div className="rounded bg-black/30 flex justify-center flex-col m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 h-[300px]">
        <h2 className="text-[30px] font-semibold text-center">
          Proyecto Integrador Technovid
        </h2>
        <p className="text-[20px] text-darkD-300 text-center">
          Este proyecto fue realizado como proyecto final en el bootcamp Soy
          Henry con un grupo excelente de compañeros de los cuales también logré
          aprender mucho.
        </p>
      </div>
      <Link
        href="https://ft49-m4-deploy-front.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded bg-black/30 flex justify-center flex-col m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-yellow-300/60 h-[300px]">
          <div className="flex justify-center items-center">
            <Image
              className="rounded"
              src="/images/Technovid.png"
              alt="Henry"
              width={150}
              height={200}
            />
          </div>
          <p className="text-[20px] text-darkD-300 text-center">
            Plataforma E-Commerce para venta de productos electrónicos.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProyectsHome;
