import React from "react";
import Image from "next/image";
import Technologies from "../Technologies/technologies";
import Cv from "../CV/Cv";

const Title = () => {
  return (
    <div className="flex m-auto w-[80%] gap-8 justify-center items-center mt-[7%]">
      <div className="">
        <Image
          className="rounded-full bg-black p-2"
          src="/images/perfil1.png"
          alt=""
          width={250}
          height={250}
        />
      </div>

      <div className="flex flex-col ">
        <div>
          <h1 className="text-[110px]">Matías Videla</h1>
        </div>
        <div className="flex justify-between">
          <Cv />
          <h2 className="text-[50px]">Fullstack developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
