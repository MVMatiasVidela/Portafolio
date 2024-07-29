import Link from "next/link";
import React from "react";

const Return = () => {
  return (
    <div className="w-[50%] bg-darkD-500 sm:w-[20%] rounded-2xl hover:bg-darkD-400 mx-auto sm:mx-0 sm:ml-0 sm:mr-auto">
      <Link href="/">
        <div className="block border rounded-2xl p-2 md:p-1 text-center">
          Volver al inicio
        </div>
      </Link>
    </div>
  );
};

export default Return;
