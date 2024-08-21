import Image from "next/image";
import React from "react";

const Cursos = () => {
  return (
    <div className=" rounded bg-black/30 flex justify-center flex-col m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      <div className="m-4 p-4 ">
        <h2 className="text-[30px] font-semibold">Cursos</h2>
        <p className="text-[20px] text-darkD-300">
          Graduado como desarrolador Full Stack, cursos de introduccion al
          desarrollo web, figma, github
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 items-center ">
        <div className="hover:scale-125 transition duration-300">
          <Image
            className="rounded"
            src="/images/henry1.png"
            alt="Henry"
            width={60}
            height={60}
          />
        </div>
        <div className="hover:scale-125 transition duration-300">
          <Image
            className="rounded"
            src="/images/latam1.png"
            alt="Desafio Latam"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Cursos;
