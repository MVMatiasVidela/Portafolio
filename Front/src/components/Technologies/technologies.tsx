import React from "react";

const Technologies = () => {
  return (
    <div className="max-w-[1000px] flex justify-center flex-col m-auto gap-4 p-4">
      <div className="flex flex-wrap justify-evenly items-center m-4">
        <div className="flex flex-col justify-center items-center bg-transparent p-4 hover:scale-125 transition duration-300">
          <p className="text-center">HTML</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt="html-5--v1"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <p className="text-center">CSS</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/css3.png"
            alt="css3"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <p className="text-center">JAVASCRIPT</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <p className="text-center">TYPESCRIPT</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/typescript.png"
            alt="typescript"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <p className="text-center">NEXT</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/fluency/48/000000/nextjs.png"
            alt="nextjs"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <p className="text-center">REACT</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color/48/react-native.png"
            alt="react-native"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <p className="text-center">TAILWIND</p>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/fluency/48/tailwind_css.png"
            alt="tailwind_css"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <p className="text-center">NODE JS</p>
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
