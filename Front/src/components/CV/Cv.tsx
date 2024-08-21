import Link from "next/link";
import React from "react";

const Cv = () => {
  return (
    <div className="flex gap-[50px] mt-[50px]">
      <div>
        <Link
          href="mailto:matias.damian.vi@gmail.com?subject=Consulta%20desde%20el%20portafolio&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20ti..."
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="rounded border font-medium text-center p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
            Contáctame
          </div>
        </Link>
      </div>
      <div>
        <Link
          href="/docs/MatiasVidelaCVFullStack.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded border font-medium text-center p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
            Descargar CV
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cv;
