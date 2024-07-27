import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-darkD-500 flex justify-between w-full ">
      <div className="m-4 ml-10 flex items-center justify-center">
        <Image
        width={100}
        height={100}
        alt="Logo"
        src="/images/logo.png"
        />
      </div>
      <div className="text-sky-200 text-xl flex m-4 mr-10 justify-center items-center">
        <ul className="flex space-x-8 ">
          <Link href="/about">
            <li className="hover:scale-110 transition duration-300">
              Sobre mi
            </li>
          </Link>
          <Link href="/">
            <li className="hover:scale-110 transition duration-300">
              Tecnologias
            </li>
          </Link>
          <Link href="/experience">
            <li className="hover:scale-110 transition duration-300">
              Experiencia
            </li>
          </Link>
          <Link href="/proyects">
            <li className="hover:scale-110 transition duration-300">
              Proyectos
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
