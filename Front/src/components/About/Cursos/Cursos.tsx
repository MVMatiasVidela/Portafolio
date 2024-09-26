import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cursos = () => {
  return (
    <div className=" max-h-[50em] rounded bg-black/30 flex justify-center flex-col m-auto gap-4  transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      
      <div className="m-4 p-4 ">
        <h2 className="text-[30px] font-bold">Cursos</h2>
        <p className="text-[20px] text-gray-300 font-medium">
          He realizado diferentes tipos de cursos para el desarrollo web con los cuales he logrado reforzar mis conocimientos.
        </p>
        <div className="border sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl p-1 text-center mt-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
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
      </div>

      <div className="flex flex-wrap justify-center gap-8 items-center mb-8">
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
