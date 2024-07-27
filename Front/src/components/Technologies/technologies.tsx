import React from "react";

const Technologies = () => {
  return (
    <div
      className="max-w-[1000px]  border-t  flex justify-center flex-col mb-[100px] m-auto gap-4 mt-[250px]"
      id="sobre-mi"
    >
      <h1 className="text-2xl">Tecnologías</h1>

      <div className="flex flex-wrap justify-evenly items-center p-4 m-4">
        <div className="flex flex-col justify-center bg-transparent items-center p-4 hover:scale-125 transition duration-300">
          <p>HTML</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt="html-5--v1"
          />
        </div>
        <div className="flex flex-col justify-center items-center  p-4 hover:scale-125 transition duration-300">
          <p>CSS</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/css3.png"
            alt="css3"
          />
        </div>
        <div className="flex flex-col justify-center items-center  p-4 hover:scale-125 transition duration-300">
          <p>JAVASCRIPT</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        </div>
        <div className="flex flex-col justify-center items-center  p-4 hover:scale-125 transition duration-300">
          <p>TYPESCRIPT</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/typescript.png"
            alt="typescript"
          />
        </div>
        <div className="flex flex-col justify-center items-center  p-4 hover:scale-125 transition duration-300">
          <p>NEXT</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/fluency/48/000000/nextjs.png"
            alt="nextjs"
          />
        </div>
        <div className="flex flex-col justify-center items-center  p-4 hover:scale-125 transition duration-300">
          <p>REACT</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/react-native.png"
            alt="react-native"
          />
        </div>
        <div className="flex flex-col justify-center items-center  p-4 hover:scale-125 transition duration-300">
          <p>TAILWIND</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/fluency/48/tailwind_css.png"
            alt="tailwind_css"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <p>NODE JS</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/fluency/48/node-js.png"
            alt="node-js"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
