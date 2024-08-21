"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div
      id="indicators-carousel"
      className="relative w-[80%] m-auto mt-[10%] bg-black/60"
      data-carousel="static"
    >
      <div className="p-4">
        <p className="text-[20px]">
          Aqui te dejo un vistazo de alguno de mis proyectos
        </p>
      </div>
      {/* Carousel wrapper */}
      <div className=" h-48 md:h-72 overflow-hidden transform transition-transform ">
        {/* Item 1 */}
        <div
          className={` absolute flex w-full transition-opacity duration-700 ease-in-out  ${
            activeIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
          data-carousel-item="active"
        >
          <div className="w-[60%]">
            <Image
              className="relative mx-auto my-auto h-48 md:h-72 "
              src="/images/PFhenry.png"
              alt="Producto 1"
              width={1300}
              height={1300}
            />
          </div>
          <div className="p-8">
            <p>DentAll</p>
            <p>Proyecto final realizado con un grupo de excelente desarroladores!</p>
          </div>
        </div>
        {/* Item 2 */}
        <div
          className={`absolute  w-full transition-opacity duration-700 ease-in-out flex ${
            activeIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
          data-carousel-item="active"
        >
          <div className="w-[60%]">
            <Image
              className="relative mx-auto my-auto h-48 md:h-72  "
              src="/images/modulo4.png"
              alt="Producto 2"
              width={1300}
              height={1300}
            />
          </div>
          <div className="p-8">
            <p>TECHNOVID</p>
          </div>
        </div>
        {/* Item 3 */}
        <div
          className={` absolute flex w-full transition-opacity duration-700 ease-in-out  ${
            activeIndex === 2 ? "opacity-100" : "opacity-0"
          }`}
          data-carousel-item="active"
        >
          <div className="w-[60%]">
            <Image
              className="relative mx-auto my-auto h-48 md:h-72 "
              src="/images/modulo3.png"
              alt="Producto 3"
              width={1300}
              height={1300}
            />
          </div>
          <div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
        onClick={() =>
          setActiveIndex((activeIndex - 1 + totalSlides) % totalSlides)
        }
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-16 md:w-10 md:h-20 border rounded-full bg-gray-200 border-gray-300 shadow-2xl transform transition-transform duration-200 hover:scale-105 group-hover:bg-gray-400">
          <svg
            className="w-3 h-6 md:w-4 md:h-8 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
        onClick={() => setActiveIndex((activeIndex + 1) % totalSlides)}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-16 md:w-10 md:h-20 border rounded-full bg-gray-200 border-gray-300 shadow-2xl transform transition-transform duration-200 hover:scale-105 group-hover:bg-gray-400">
          <svg
            className="w-3 h-6 md:w-4 md:h-8 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-gray-300"
            }`}
            aria-current={activeIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// bg-gradient-to-t from-white to-yellow-400
