import Link from "next/link";
import React from "react";
import ShimmerButton from "../magicui/buton/shimmer-button";
import { RainbowButton } from "../magicui/rainButon/rainbow-button";

const Cv = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[50px] mt-[30px] sm:mt-[50px]">
      <div className="flex justify-center">
        <Link
          href="mailto:matias.damian.vi@gmail.com?subject=Consulta%20desde%20el%20portafolio&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20ti..."
          rel="noopener noreferrer"
          target="_blank"
        >
          <ShimmerButton className="shadow-2xl">
            <div className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
              Contáctame
            </div>
          </ShimmerButton>
          {/* <div className="rounded border font-semibold text-center p-3 sm:p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
            Contáctame
          </div> */}
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
          href="/docs/MatiasVidelaCVFullStack.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RainbowButton> Descargar CV</RainbowButton>
          {/* <div className="rounded border font-semibold text-center p-3 sm:p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50"></div> */}
        </Link>
      </div>
    </div>
  );
};

export default Cv;
