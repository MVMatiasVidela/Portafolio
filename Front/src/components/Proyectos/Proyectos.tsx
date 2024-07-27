import React from "react";
import YouTubeVideo from "../Video/YouTubeVideo";

const Proyectos = () => {
  return (
    <div className="m-auto p-8 text-white flex flex-col gap-4 ">
      <div className="w-[90%] m-auto flex  bg-darkD-500 rounded  ">
        <div className="rounded-xl w-[50%] p-2 ">
          <YouTubeVideo videoId="z2XJa-aqo54"/>
        </div>
        <div className="w-[50%] p-8 space-y-4">
          <div className="text-center text-xl font-bold">
            Proyecto final | Bootcam "Soy Henry"
          </div>
          <div className="flex gap-12 justify-center">
            <ul className="list-disc  text-start">
              <p>BACK</p>
              <li>Nest.</li>
              <li>PostgreSQL</li>
            </ul>
            <ul className="list-disc  text-start">
              <p>FRONT</p>
              <li>Next.js</li>
              <li>Tailwind.css</li>
            </ul>
            <ul className="list-disc  text-start">
              <p>BASE DE DATOS</p>
              <li>Next.js</li>
              <li>Tailwind.css</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[90%] m-auto flex bg-darkD-500 rounded ">
        <div className="p-8 w-[50%]  ">
          <YouTubeVideo videoId="RJBqfHenyj4" />
        </div>
        <div className="w-[50%] p-8 space-y-4">
          <div className="text-center text-xl font-bold">
            E-commerce | Modulo 4 Bootcam "Soy Henry"
          </div>
          <div className="flex gap-12">
            <ul className="list-disc  text-start">
              <p>BACK</p>
              <li>Nest.</li>
              <li>PostgreSQL</li>
            </ul>
            <ul className="list-disc  text-start">
              <p>FRONT</p>
              <li>Next.js</li>
              <li>Tailwind.css</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
