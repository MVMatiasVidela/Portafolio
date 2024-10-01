
import Image from 'next/image';
import React from 'react'

const P1 = () => {
  return (
    <div className=" rounded bg-black/30 flex max-h-[50em] justify-center flex-col m-auto gap-4  transition-shadow duration-300 hover:shadow-lg hover:shadow-white/50">
      
      <div className="m-4 p-4 ">
        <h2 className="text-[30px] font-bold">Full stack developer</h2>
        <p className="text-[20px] text-gray-300 font-medium">
          Desde principios de 2024 vengo aprendiendo del mundo de la
          programación, mi meta es seguir experimentando como desarrollador y
          adquirir valiosas experiencias.
        </p>
      </div>
      <div className="justify-center items-center flex mb-8">
        <Image
          className="rounded"
          src="/images/matias1.jpg"
          alt="Henry"
          width={350}
          height={300}
        />
      </div>
    </div>
  );
}

export default P1
