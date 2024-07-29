import Link from "next/link";
import React from "react";

const Cv = () => {
  return (
    <div className="w-full bg-darkD-500 rounded-2xl hover:bg-darkD-400 max-w-[300px] lg:w-[20%]">
      <Link href="/docs/CVM.pdf" target="_blank" rel="noopener noreferrer">
        <div className="rounded-2xl border text-center p-2  transition-colors">
          Ver mi CV
        </div>
      </Link>
    </div>
  );
};

export default Cv;
