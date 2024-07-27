import React from "react";

import MadeWith from "../MadeWith/MadeWith";

const Footer = () => {
  return (
    <div className="bg-darkD-500 p-3 flex justify-center items-center gap-4 m-auto">
      <div>&copy; Matias Videla. Todos los derechos reservados.</div>
      <p>| </p>
      <div>
        <MadeWith />
      </div>
    </div>
  );
};

export default Footer;
