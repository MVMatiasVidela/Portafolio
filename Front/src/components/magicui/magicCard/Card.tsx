'use client'
import { useTheme } from 'next-themes';

import { MagicCard } from '@/components/magicui/magicCard/magic-card';
import Modal from '@/components/Modal/Modal';
import Image from 'next/image';
import { useState } from 'react';

export function MagicCardDemo() {
   const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

   const openModal = (index: number) => {
     setOpenModalIndex(index);
   };

   const closeModal = () => {
     setOpenModalIndex(null);
   };

  const { theme } = useTheme();
  return (
    <div
      className={
        'flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row'
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
      >
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
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
      >
        Card
      </MagicCard>
    </div>
  );
}
