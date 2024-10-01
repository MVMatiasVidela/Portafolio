import Image from "next/image";
import React from "react";

const MadeWith = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <h1 className="text-white text-[20px] flex items-center">Hecho con:</h1>
      <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
        <Image width="60" height="60" src="/images/next-js.svg" alt="nextjs" />
      </div>
      <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
        <Image
          width="40"
          height="40"
          src="https://img.icons8.com/fluency/48/tailwind_css.png"
          alt="tailwind_css"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
        <Image
          width="70"
          height="70"
          src="/images/typescript.svg"
          alt="typescript"
        />
      </div>
    </div>
  );
};

export default MadeWith;
