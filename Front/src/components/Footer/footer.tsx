import React from "react";
import MadeWith from "./MadeWith/MadeWith";

const Footer = () => {
  return (
    <div className="bg-black/80 p-8 flex flex-col sm:flex justify-center items-center gap-2 sm:gap-4 m-auto text-center sm:text-left border-t">
      <div className="text-[20px]">
        &copy; 2024 Matias Videla. Todos los derechos reservados.
        </div>
      <div>
        <MadeWith />
      </div>
    </div>
  );
};

export default Footer;
