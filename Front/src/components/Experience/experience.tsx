"use client";
import Image from "next/image";
import React, { useState } from "react";

import Modal from "@/components/Modal/Modal";

const Experience = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const openModal = (index:any) => {
    setOpenModalIndex(index);
  };

  const closeModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-[80%] m-auto ">
      <div className="flex  gap-4 w-[80%] bg-darkD-500 rounded">
        <div>
          <Image
            className="rounded"
            src="/images/henry1.png"
            alt="Henry"
            width={300}
            height={300}
          />
        </div>
        <div className="space-y-4 p-4">
          <div>
            <h1 className="text-[20px]">
              Desarrollo FullStack | Bootcamp "Soy Henry"
            </h1>
            <p className="text-darkD-400">Abril 2024 - Julio 2024</p>
            <p
              onClick={() => openModal(0)}
              className="cursor-pointer text-blue-500"
            >
              Ver certificado
            </p>

            <Modal isOpen={openModalIndex === 0} onClose={closeModal}>
              <Image
                width="700"
                height="600"
                src="/images/certificadoHenry.png"
                alt="Certificado"
              />
            </Modal>
          </div>
          <div>
            <h1 className="text-[20px]">
              Teacher Assistant | Bootcamp "Soy Henry"
            </h1>
            <p className="text-darkD-400">Mayo 2024 - Julio 2024</p>
            <p
              onClick={() => openModal(1)}
              className="cursor-pointer text-blue-500"
            >
              Ver certificado
            </p>

            <Modal isOpen={openModalIndex === 1} onClose={closeModal}>
              <Image width="700" height="600" src="" alt="Certificado" />
            </Modal>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-[80%] bg-darkD-500 rounded">
        <div>
          <Image
            className="rounded"
            src="/images/latam1.png"
            alt="Desafio Latam"
            width={300}
            height={300}
          />
        </div>
        <div className="space-y-4 p-4">
          <div>
            <h1 className="text-[20px]">Taller Figma | Desafio Latam</h1>
            <p className="text-darkD-400">Julio 2024 - Agosto 2024</p>
            <p
              onClick={() => openModal(2)}
              className="cursor-pointer text-blue-500"
            >
              Ver certificado
            </p>

            <Modal isOpen={openModalIndex === 2} onClose={closeModal}>
              <Image width="700" height="600" src="" alt="Certificado" />
            </Modal>
          </div>
          <div>
            <h1 className="text-[20px]">Taller Diseño UX/UI| Desafio Latam</h1>
            <p className="text-darkD-400">Julio 2024 - Agosto 2024</p>
            <p
              onClick={() => openModal(3)}
              className="cursor-pointer text-blue-500"
            >
              Ver certificado
            </p>

            <Modal isOpen={openModalIndex === 3} onClose={closeModal}>
              <Image
                width="700"
                height="600"
                src="/images/introUX-UI.png"
                alt="Certificado"
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
