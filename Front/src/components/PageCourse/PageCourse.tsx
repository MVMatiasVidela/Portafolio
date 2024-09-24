'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';

const PageCourse = () => {
     const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

     const openModal = (index: number) => {
       setOpenModalIndex(index);
     };

     const closeModal = () => {
       setOpenModalIndex(null);
     };

  return (
    <div className="grid grid-cols-3 w-[80%] m-auto gap-4">
      <div className="mt-[100px] m-auto flex flex-col bg-black/30 p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 rounded">
        <div>
          <Image
            src="/images/cursos/soyHenrry.png"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div className='m-auto'>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="border sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl p-1 text-center mt-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
          <p
            onClick={() => openModal(2)}
            className="cursor-pointer font-medium"
          >
            Ver certificado
          </p>
        </div>
        <Modal isOpen={openModalIndex === 2} onClose={closeModal}>
          <Image
            width="700"
            height="600"
            src="/docs/certificadoHenry.png"
            alt="Certificado"
          />
        </Modal>
      </div>

      <div className="mt-[100px] m-auto flex flex-col bg-black/30 p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 rounded">
        <div>
          <Image
            src="/images/cursos/introDesarrolloWeb.png"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div>
          <h2>Desarrollo web</h2>
        </div>
        <div className="border sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl p-1 text-center mt-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
          <p
            onClick={() => openModal(3)}
            className="cursor-pointer font-medium"
          >
            Ver certificado
          </p>
        </div>
        <Modal isOpen={openModalIndex === 3} onClose={closeModal}>
          <Image
            width="700"
            height="600"
            src="/docs/certificadoHenry.png"
            alt="Certificado"
          />
        </Modal>
      </div>

      <div className="mt-[100px] m-auto flex flex-col bg-black/30 p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 rounded">
        <div>
          <Image
            src="/images/cursos/git-github.png"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div>
          <h2>Gaduado como Desarrollador Full Stack Developer</h2>
        </div>
        <div className="border sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl p-1 text-center mt-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
          <p
            onClick={() => openModal(4)}
            className="cursor-pointer font-medium"
          >
            Ver certificado
          </p>
        </div>
        <Modal isOpen={openModalIndex === 4} onClose={closeModal}>
          <Image
            width="700"
            height="600"
            src="/docs/certificadoLatamGit.jpg"
            alt="Certificado"
          />
        </Modal>
      </div>

      <div className="mt-[100px] m-auto flex flex-col bg-black/30 p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 rounded">
        <div>
          <Image src="/images/cursos/css.png" alt="" width={400} height={400} />
        </div>
        <div>
          <h2>Gaduado como Desarrollador Full Stack Developer</h2>
        </div>
        <div className="border sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl p-1 text-center mt-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
          <p
            onClick={() => openModal(1)}
            className="cursor-pointer font-medium"
          >
            Ver certificado
          </p>
        </div>
        <Modal isOpen={openModalIndex === 1} onClose={closeModal}>
          <Image
            width="700"
            height="600"
            src="/docs/certificadoTA.png"
            alt="Certificado"
          />
        </Modal>
      </div>

      <div className="mt-[100px] m-auto flex flex-col bg-black/30 p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 rounded">
        <div>
          <Image
            src="/images/cursos/figma.png"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div>
          <h2>Gaduado como Desarrollador Full Stack Developer</h2>
        </div>
        <div className="border sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl p-1 text-center mt-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
          <p
            onClick={() => openModal(1)}
            className="cursor-pointer font-medium"
          >
            Ver certificado
          </p>
        </div>
        <Modal isOpen={openModalIndex === 1} onClose={closeModal}>
          <Image
            width="700"
            height="600"
            src="/docs/certificadoTA.png"
            alt="Certificado"
          />
        </Modal>
      </div>
    </div>
  );
};

export default PageCourse;
