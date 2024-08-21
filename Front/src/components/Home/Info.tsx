import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Info = () => {
  return (
    <div className=" w-[86%] rounded bg-black/30 flex justify-center m-auto gap-4 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50 mt-[150px]">
      <div>
        <div>
          <h2 className="text-[30px] font-semibold">Programación, diseño</h2>
        </div>
        <div className='w-[80%]'>
          <p className="text-[20px] text-darkD-300">
            En cada proyecto que emprendo, mi propósito es fusionar de manera
            equilibrada la estética, la funcionalidad y la eficiencia, para
            ofrecer soluciones que no solo cubran las necesidades del usuario,
            sino que también generen un valor tangible para el negocio. Mi
            enfoque es lograr un impacto positivo y duradero, asegurando que
            cada detalle esté orientado a potenciar tanto la experiencia del
            usuario como los resultados comerciales.
          </p>
        </div>

        <div className="border w-[20%] rounded-xl p-1 text-center m-4">
          <Link href="/about">
            <div>Saber más</div>
          </Link>
        </div>
      </div>
      <div>
        <Image
          className="rounded"
          src="/images/perfil2.jpg"
          alt="Henry"
          width={1500}
          height={1000}
        />
      </div>
    </div>
  );
}

export default Info
