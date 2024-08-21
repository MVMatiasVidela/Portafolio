'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black/70 backdrop-blur-md flex flex-col sm:flex-row justify-between w-full border-b  fixed">
      <div className="m-4 ml-10 flex items-center justify-between sm:justify-center">
        <Image width={100} height={100} alt="Logo" src="/images/logo.png" />
        <button
          className="sm:hidden text-sky-200 text-xl p-2"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>
      <div
        className={`text-xl flex-col sm:flex-row flex m-4 mr-10 justify-center items-center ${
          isOpen ? "flex" : "hidden"
        } sm:flex`}
      >
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <Link href="/">
            <li className="hover:scale-110 transition duration-300">Inicio</li>
          </Link>
          <Link href="/about">
            <li className="hover:scale-110 transition duration-300">
              Sobre mí
            </li>
          </Link>
          {/* <Link href="/technologies">
            <li className="hover:scale-110 transition duration-300">
              Tecnologías
            </li>
          </Link> */}
          {/* <Link href="/experience">
            <li className="hover:scale-110 transition duration-300">
              Experiencia
            </li>
          </Link> */}
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

