import React from "react";
import Experience from "./Experience/experience";
import Technologies from "./Technologies/technologies";
import P1 from "./Perfil/P1";
import Cursos from "./Cursos/Cursos";
import Herramientas from "./Herramientas/Herramientas";
import Cv from "../CV/Cv";
import TA from "./TA/TA";
import Habilidades from "./Habilidades/Habilidades";

const About = () => {
  return (
    <div>
      <div className="w-[80%] m-auto flex  p-4 mt-[100px]">
        <h2 className="text-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium">
          Soy un desarrollador Full Stack Junior, me apasiona la programación
          tanto como la musica.{" "}
        </h2>
      </div>

      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12  m-auto">
        <div className="space-y-12">
          <div>
            <TA />
          </div>
          <div>
            <Cursos />
          </div>
        </div>
        <div>
          <P1 />
        </div>

        <div>
          <Technologies />
        </div>
        <div>
          <Herramientas />
        </div>
      </div>
      <div>
        <Habilidades />
      </div>
      <div className="flex flex-col items-center m-[100px]">
        <p className="text-[40px] font-semibold">¿Te interesa contratarme?</p>
        <p className="text-[20px] mt-4 text-center">
          ¡Hablemos y exploremos cómo puedo aportar valor a tu equipo!
        </p>

        <Cv />
      </div>
    </div>
  );
};

export default About;
