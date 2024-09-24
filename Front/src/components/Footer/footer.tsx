import React from "react";
import MadeWith from "./MadeWith/MadeWith";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black/80 p-4 flex flex-col sm:flex justify-center items-center gap-2 sm:gap-4 m-auto  text-center sm:text-left border-t">
      <div>
        <Image width={100} height={100} alt="Logo" src="/images/logo.png" />
      </div>
      <div>
        <MadeWith />
      </div>
      <div className="text-[20px]">
        &copy; 2024 Matias Videla. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Footer;
