import React from "react";
import Image from "next/image";
import Technologies from "../Technologies/technologies";
import Cv from "../CV/Cv";

const Title = () => {
  return (
    <div className="flex flex-col lg:flex-row m-auto w-[90%] lg:w-[80%] gap-8 justify-center items-center mt-[7px] ">
      <div className="flex justify-center mb-4 lg:mb-0">
        <Image
          className="rounded-full bg-black p-2"
          src="/images/perfil1.png"
          alt=""
          width={250}
          height={250}
        />
      </div>

      <div className="flex flex-col text-center lg:text-left">
        <h1 className="text-4xl lg:text-[110px]">Matías Videla</h1>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt- lg:mt-10">
          <h2 className="text-2xl lg:text-[50px]">Fullstack developer</h2>
          <Cv />
        </div>
      </div>
    </div>
  );
};

export default Title;
