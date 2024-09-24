import React from "react";
import Image from "next/image";
import Technologies from "../../About/Technologies/technologies";
import Cv from "../../CV/Cv";
import BlurFade from "@/components/magicui/blurFade/blur-fade";
import HyperText from "@/components/magicui/hyperText/hyper-text";

const Title = () => {
  return (
    <div className="items-center justify-center  flex flex-col mt-[80px] sm:mt-[120px] w-[80%] m-auto">
      <div>
        <BlurFade delay={0.25} inView>
          <h1 className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-bold text-center">
            ¡Hola! Soy Matías
          </h1>
        </BlurFade>
      </div>
      <div>
        <HyperText
          className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] text-center font-semibold"
          text="Full Stack Developer"
        />
       
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image width="80" height="80" src="/images/react.svg" alt="React" />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image width="80" height="80" src="/images/web.svg" alt="Web" />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="80"
            height="80"
            src="/images/typescript.svg"
            alt="TypeScript"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="80"
            height="80"
            src="/images/next-js.svg"
            alt="Next.js"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="80"
            height="80"
            src="/images/node-js.svg"
            alt="Node.js"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4 hover:scale-125 transition duration-300">
          <Image
            width="80"
            height="80"
            src="/images/mongoose.svg"
            alt="Mongoose"
          />
        </div>
      </div>
      <div className="mt-8">
        <Cv />
      </div>
    </div>
  );
};

export default Title;
