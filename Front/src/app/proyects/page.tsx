import Proyectos from '@/components/Proyectos/Proyectos';
import Return from '@/components/Return/Return';
import React from 'react'

const page = () => {
  return (
    <div className="bg-black/50 p-8 ">
      <Return />
      <Proyectos />
    </div>
  );
}

export default page
