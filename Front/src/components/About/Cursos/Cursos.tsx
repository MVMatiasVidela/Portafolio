import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cursos = () => {
  return (
    <div className=" rounded bg-black/30 flex justify-center flex-col m-auto gap-4  transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      <div className="m-4 p-4 ">
        <h2 className="text-[30px] font-bold">Cursos</h2>
        <p className="text-[20px] text-darkD-300 font-medium">
          Graduado como desarrolador Full Stack, cursos de introduccion al
          desarrollo web, figma, github
        </p>
      </div>
      <div className="border ml-8 sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl  text-center m-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
        <Link href="/cursos">
          <div className="flex gap-4 justify-center items-center">
            <p>Saber más</p>
            <Image
              width="30"
              height="30"
              src="/images/flecha.png"
              alt="long-arrow-right"
            />
          </div>
        </Link>
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
