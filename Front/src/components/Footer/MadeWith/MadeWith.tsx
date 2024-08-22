import Image from "next/image";
import React from "react";

const MadeWith = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <h1 className="text-white text-[20px] flex items-center">Hecho con:</h1>
      <Image
        width={40}
        height={40}
        src="https://img.icons8.com/fluency/48/000000/nextjs.png"
        alt="nextjs"
      />
      <Image
        width="40"
        height="40"
        src="https://img.icons8.com/fluency/48/tailwind_css.png"
        alt="tailwind_css"
      />
    </div>
  );
};

export default MadeWith;
