import Link from "next/link";
import React from "react";

const Cv = () => {
  return (
    <div className="w-[20%] mt-5 ">
      <Link href="/docs/CVM.pdf" target="_blank" rel="noopener noreferrer">
        <div className="rounded-2xl border  text-center p-1 hover:bg-sky-300">
          Ver mi CV
        </div>
      </Link>
    </div>
  );
};

export default Cv;
