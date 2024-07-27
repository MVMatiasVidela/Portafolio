import About from '@/components/About/about'
import Return from '@/components/Return/Return';
import React from 'react'

const page = () => {
  return (
    <div className="bg-black/50 p-8 ">
      <div>
        <Return />
      </div>
      <About />
    </div>
  );
}

export default page
