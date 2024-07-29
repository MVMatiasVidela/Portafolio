import React from "react";
import MadeWith from "../MadeWith/MadeWith";

const Footer = () => {
  return (
    <div className="bg-darkD-500 p-3 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 m-auto text-center sm:text-left">
      <div>&copy; Matias Videla. Todos los derechos reservados.</div>
      <p className="hidden sm:block">|</p>
      <div>
        <MadeWith />
      </div>
    </div>
  );
};

export default Footer;
