import React from "react";
import Image from "next/image";
import Technologies from "../../About/Technologies/technologies";
import Cv from "../../CV/Cv";

const Title = () => {
  return (
    <div className="items-center flex flex-col mt-[150px]">
      <div className="">
        <h1 className="text-[80px] font-semibold">¡Hola! Soy Matías </h1>
      </div>
      <div className=" ">
        <h2 className="text-[40px]">Fullstack developer junior</h2>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="74"
            height="74"
            src="/images/react.svg"
            alt="React"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="74"
            height="74"
            src="/images/web.svg"
            alt="React"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="74"
            height="74"
            src="/images/typescript.svg"
            alt="React"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="74"
            height="74"
            src="/images/next-js.svg"
            alt="React"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="74"
            height="74"
            src="/images/node-js.svg"
            alt="React"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="74"
            height="74"
            src="/images/mongoose.svg"
            alt="React"
          />
        </div>
        {/* <p className="text-darkD-300">
          HTML | CSS | Javascript | Typescript | Next.js | React{" "}
        </p> */}
      </div>
      <div>
        <Cv />
      </div>
    </div>
  );
};

export default Title;
