import Image from "next/image";
import React from "react";

const Herramientas = () => {
  return (
    <div className=" rounded bg-black/30 flex justify-center flex-col m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      <div className="m-4 p-4">
        <h2 className="text-[30px] font-semibold">Herramientas</h2>
        <p className="text-[20px] text-darkD-300">
          Ademas tengo amplios conocimientos en herramientas como Git, Figma,
          Cloudinary, Trello, Vercel.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly items-center ">
        <div className="flex flex-col justify-center items-center bg-transparent p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
            alt="Figma"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="64"
            height="64"
            src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
            alt="Github"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="60"
            height="60"
            src="data:image/png;base64,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"
            alt="Cloudinary"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="74"
            height="74"
            src="https://img.icons8.com/?size=48&id=21049&format=png"
            alt="Trello"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="55"
            height="55"
            src="/images/vercel.svg"
            alt="Vercel"
          />
        </div>
      </div>
    </div>
  );
};

export default Herramientas;
