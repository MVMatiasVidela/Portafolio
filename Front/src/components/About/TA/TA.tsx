'use client'
import Image from 'next/image';
import React, { useState } from "react";
import Modal from "@/components/Modal/Modal";

const TA = () => {
    const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
      setOpenModalIndex(index);
    };

    const closeModal = () => {
      setOpenModalIndex(null);
    };

  return (
    <div className=" rounded bg-black/30 flex justify-center flex-col m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      <div className="m-4 p-4">
        <h2 className="text-[30px] font-semibold">Teacher Assistant</h2>
        <p className="text-[20px] text-darkD-300">
          He tenido el privilegio de compartir mis conocimientos con alumnos del
          bootcamp Me apasiona conectar con la audiencia y fomentar el
          aprendizaje colaborativo.
        </p>
        <div className='w-[35%]'>

        <p
          onClick={() => openModal(1)}
          className="cursor-pointer text-blue-500"
        >
          Ver certificado
        </p>
        </div>

        <Modal isOpen={openModalIndex === 1} onClose={closeModal}>
          <Image width="700" height="600" src="" alt="Certificado" />
        </Modal>
        <div className="justify-center items-center flex hover:scale-125 transition duration-300 mt-8">
          <Image
            className="rounded"
            src="/images/henri.png"
            alt="Henry"
            width={250}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default TA