import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Info = () => {
  return (
    <div className="w-[80%] sm:w-[86%] rounded bg-black/30 flex flex-col sm:flex-row justify-center m-auto gap-4 p-4 sm:p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 mt-[50px] sm:mt-[150px]">
      <div className="flex-1">
        <div>
          <h2 className="text-[24px] sm:text-[30px] font-semibold">
            Programación, diseño
          </h2>
        </div>
        <div className="w-[100%] sm:w-[80%]">
          <p className="text-[16px] sm:text-[20px] text-darkD-300">
            En cada proyecto que emprendo, mi propósito es fusionar de manera
            equilibrada la estética, la funcionalidad y la eficiencia, para
            ofrecer soluciones que no solo cubran las necesidades del usuario,
            sino que también generen un valor tangible para el negocio. Mi
            enfoque es lograr un impacto positivo y duradero, asegurando que
            cada detalle esté orientado a potenciar tanto la experiencia del
            usuario como los resultados comerciales.
          </p>
        </div>

        <div className="border  sm:w-[30%] md:w-[30%] lg:w-[30%] rounded-3xl p-1 text-center m-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
          <Link href="/about">
            <div className="flex gap-4 justify-center items-center">
              <p>Saber más</p>
              <Image
                width="30"
                height="30"
                src="/images/flecha.png"
                alt="long-arrow-right"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Image
          className="rounded"
          src="/images/perfil2.jpg"
          alt="Henry"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default Info
