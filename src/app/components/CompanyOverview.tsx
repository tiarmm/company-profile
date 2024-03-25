import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Companyoverview = () => {
  return (
    <section>
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h1 className="text-center font-bold text-4xl pt-10">
        About Us
        <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col md:flex-row md: space-x-5">
        <div className="text-center md:text-right md:w-1/2">
          <div className="pb-10 md:pb-20">
            <h1 className="text-2xl font-bold">COSMOST</h1>
            <h1 className="text-gray-500">is creative agency engaged in photo, video, graphic design</h1>
          </div>

          <h1 className="font-bold text-2xl">Why are</h1>
          <h1 className="text-xl font-bold text-gray-500">we here?</h1>
          <p className="text-xs">
            to solve brand problems in promoting or selling through social
          </p>
          <p className="text-xs">media with creative content and fresh idea</p>
        </div>

        <div className="text-center md:text-left mt-8 md:w-1/2">
          <Image alt="logo" src="https://drive.google.com/uc?export=view&id=18VEANdT-29aOjEIkpPN1fUA23tb0EGWp" width={150} height={150} className=" ml-24 md:pl-0" />
          <h1 className="pt-4 text-black">
            We focuses on social media development in order to maximize our
            client's brand indentity
          </h1>
        </div>
      </div>
    </main>
    <div className="pt-8 text-center">
          <Button className="bg-orange-500 text-center">
          <Link href="/about">Learn More</Link>
          </Button>
          </div>
    </section>
  );
};

export default Companyoverview;
