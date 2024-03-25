import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <main className="">
        <div className="relative h-[150vh]">
          <div className="-z-10 w-full h-full absolute">
            <Image src="https://drive.google.com/uc?export=view&id=1eFoEYL-YpZjeRWx_LgKN0u0kW4gE50Kx" alt="background" fill objectFit="cover" />
          </div>
          <div className="flex flex-col text-center items-center justify-center md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2 md:mt-2">
          <Image
            src="https://drive.google.com/uc?export=view&id=1FpzFtXWsIm_jTomiMDDb1wN8L6q-zzVe"
            alt=""
            width={600}
            height={600}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className=" text-gray-800 font-bold text-4xl mt-6 md:text-5xl md:mt-0">Unlocking <span className="text-orange-500">Creativity:</span></h1>
          <h1 className="font-bold text-4xl mt-6 md:text-5xl md:mt-0"><span className="text-orange-500">Your </span> <span className="text-gray-800">Journey starts</span></h1>
          <h1 className="font-bold text-4xl mt-6 md:text-5xl md:mt-0"><span className="text-gray-800">with </span> <span className="text-orange-500">Cosmost Creative</span></h1>
        </div>
      </div>
        </div>
    </main>
  );
};

export default Herosection;
