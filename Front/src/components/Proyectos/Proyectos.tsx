import React from 'react';
import YouTubeVideo from '../Video/YouTubeVideo';
import Image from 'next/image';

const Proyectos = () => {
  return (
    <div className="m-auto p-8 text-white flex flex-col gap-4 mt-[100px]">
      <h2 className="text-center text-[40px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold">
        Dale un pequeño repaso a mis proyectos
      </h2>

      <div className="w-full sm:w-[90%] m-auto flex flex-col sm:flex-row bg-black/60 rounded transition-shadow duration-300 hover:shadow-lg hover:shadow-emerald-300/50">
        <div className="rounded-xl w-full sm:w-[50%] p-2">
          <YouTubeVideo videoId="z2XJa-aqo54" />
        </div>
        <div className="w-full sm:w-[50%] p-8 space-y-4">
          <div className="text-[30px] font-bold">
            <h2>Sistema de gestion de turnos DentAll</h2>
          </div>
          <div>
            <p className=" text-darkD-300 font-medium">
              Proyecto realizado como fronted en el cual implemente mis
              habilidades adquiridas durante el bootcam junto a un grupo
              excelente de compañeros.
            </p>
          </div>
          <div className="">
            <div>Tecnologias implementadas:</div>
            <div className="flex">
              <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
                <Image
                  width="50"
                  height="50"
                  src="/images/next-js.svg"
                  alt="nextjs"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
                <Image
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency/48/tailwind_css.png"
                  alt="tailwind_css"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
                <Image
                  width="50"
                  height="50"
                  src="/images/nest-js.svg"
                  alt="nest.js"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
                <Image
                  width="60"
                  height="60"
                  src="/images/typescript.svg"
                  alt="nest.js"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[90%] m-auto flex flex-col sm:flex-row bg-black/60 rounded transition-shadow duration-300 hover:shadow-lg hover:shadow-yellow-300/60">
        <div className=" w-full sm:w-[50%] p-2">
          <YouTubeVideo videoId="RJBqfHenyj4" />
        </div>
        <div className="w-full sm:w-[50%] p-8 space-y-4">
          <div className="text-[30px] font-bold">
            <h2>E-commerce Technovid</h2>
          </div>
          <div>
            <p>
              Proyecto realizado como fronted en el cual implemente mis
              habilidades adquiridas durante el bootcam, aqui añadi diseño
              responsive.
            </p>
          </div>
          <div className="">
            <div>Tecnologias implementadas:</div>
            <div className="flex">
              <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
                <Image
                  width="50"
                  height="50"
                  src="/images/next-js.svg"
                  alt="nextjs"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
                <Image
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency/48/tailwind_css.png"
                  alt="tailwind_css"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
                <Image
                  width="60"
                  height="60"
                  src="/images/typescript.svg"
                  alt="nest.js"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
