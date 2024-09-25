import { IconCloudDemo } from "@/components/magicui/Cloud/Cloud";
import OrbitingCirclesDemo from "@/components/magicui/Orbit/circles";
import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <div className=" rounded bg-black/30 max-h-[40em] flex justify-center flex-col m-auto gap-4  transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      <div className="m-4 p-4 ">
        <h2 className="text-[30px] font-bold">Tecnologías</h2>
        <p className="text-[20px] text-darkD-300 font-medium">
          Hasta el día de hoy busco adquirir más habilidades y reforzar mis
          conocimientos.
        </p>
      </div>
      <IconCloudDemo />
      {/* <div className="flex flex-wrap justify-evenly items-center "> */}
      {/* <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt="html-5--v1"
          />
        </div> */}
      {/* <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/css3.png"
            alt="css3"
          />
        </div> */}
      {/* <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">

          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        </div> */}
      {/* <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/typescript.png"
            alt="typescript"
          />
        </div> */}
      {/* <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/fluency/48/000000/nextjs.png"
            alt="nextjs"
          />
        </div> */}
      {/* <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/react-native.png"
            alt="react-native"
          />
        </div> */}
      {/* <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/fluency/48/tailwind_css.png"
            alt="tailwind_css"
          />
        </div> */}
      {/* <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/fluency/48/node-js.png"
            alt="node-js"
          />
        </div> */}

      {/* </div> */}
    </div>
  );
};

export default Technologies;
