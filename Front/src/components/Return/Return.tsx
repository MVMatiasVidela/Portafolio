import Link from 'next/link'
import React from 'react'

const Return = () => {
  return (
    <div className="w-[11%]">
      <Link href="/">
        <div className="border rounded-2xl  p-1 text-center">
          Volver al inicio
        </div>
      </Link>
    </div>
  );
}

export default Return
