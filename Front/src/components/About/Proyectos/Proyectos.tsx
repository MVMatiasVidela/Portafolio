import React from "react";
import YouTubeVideo from "../../Video/YouTubeVideo";

const Proyectos = () => {
  return (
    <div className="m-auto p-8 text-white flex flex-col gap-4 mt-[100px]">
      <h2 className="text-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium">
        Mis proyectos
      </h2>

      <div className="w-full sm:w-[90%] m-auto flex flex-col sm:flex-row bg-black/60 rounded">
        <div className="rounded-xl w-full sm:w-[50%] p-2">
          <YouTubeVideo videoId="z2XJa-aqo54" />
        </div>
        <div className="w-full sm:w-[50%] p-8 space-y-4">
          <div className="text-center text-xl font-bold">
            Proyecto final | Bootcamp Soy Henry.
          </div>
          <div className="flex flex-col sm:flex-row gap-12 justify-center">
            <ul className="list-disc text-start">
              <p className="font-semibold">BACK</p>
              <li>Nest.</li>
              <li>PostgreSQL</li>
            </ul>
            <ul className="list-disc text-start">
              <p className="font-semibold">FRONT</p>
              <li>Next.js</li>
              <li>Tailwind.css</li>
            </ul>
            <ul className="list-disc text-start">
              <p className="font-semibold">BASE DE DATOS</p>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[90%] m-auto flex flex-col sm:flex-row bg-black/60 rounded">
        <div className=" w-full sm:w-[50%] p-2">
          <YouTubeVideo videoId="RJBqfHenyj4" />
        </div>
        <div className="w-full sm:w-[50%] p-8 space-y-4">
          <div className="text-center text-xl font-bold">
            E-commerce | Modulo 4 Bootcamp Soy Henry.
          </div>
          <div className="flex flex-col sm:flex-row gap-12 justify-center">
            <ul className="list-disc text-start">
              <p className="font-semibold">FRONT</p>
              <li>Next.js</li>
              <li>Tailwind.css</li>
            </ul>
            <ul className="list-disc text-start">
              <p className="font-semibold">BASE DE DATOS</p>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
