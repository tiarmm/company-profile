import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <div>
        <h1 className="text-center font-bold text-4xl pt-10">
          Portfolio
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
      </div>

      <div>
        <Carousel>
          <CarouselContent className=" gap-8">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="i" src="https://drive.google.com/uc?export=view&id=1iiY91dtt1gF-o3pEyIQQoeal6i1Mec3u" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="ii" src="https://drive.google.com/uc?export=view&id=1BlOjAcHsnN_uuh9GV5KTsGnbvawDwdKo" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="iii" src="https://drive.google.com/uc?export=view&id=17BG-ENLRULgl8d0KNYpfFQN3vdWBCzKj" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="iv" src="https://drive.google.com/uc?export=view&id=1jkAwW0jPq5T95qTbtRz0vvib-4ka5KxF" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="v" src="https://drive.google.com/uc?export=view&id=1eX3rHqhPROSqVa-F4bXcn_JIvWV4Bx_j" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="vi" src="https://drive.google.com/uc?export=view&id=1scxhigHdjnOhhsgCEG709ARP6Ms7zdDa" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="vii" src="https://drive.google.com/uc?export=view&id=1rO27qVCjFgxOQIjwXXGQecEEZB67i-7f" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="viii" src="https://drive.google.com/uc?export=view&id=1EJYq4yVhc3YlmYPl5xGmt0vYNIyHphBF" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="ix" src="https://drive.google.com/uc?export=view&id=1eX3rHqhPROSqVa-F4bXcn_JIvWV4Bx_j" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="x" src="https://drive.google.com/uc?export=view&id=1EJYq4yVhc3YlmYPl5xGmt0vYNIyHphBF" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="xi" src="https://drive.google.com/uc?export=view&id=1pR0OH4sGBqQrb1OvksF9ds-G2g33Lq49" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="xii" src="https://drive.google.com/uc?export=view&id=1IjvMl4I597WXJ38MpfmH1M0XjSBFgXZk" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="xiii" src="https://drive.google.com/uc?export=view&id=1KVSyjPbTiUB0_TXxDo-EQTbgQ0wh1EUW" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="xiv" src="https://drive.google.com/uc?export=view&id=1m287LC-ogT2UnyzZ5T3FRvZipQYXBvCI" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="xv" src="https://drive.google.com/uc?export=view&id=1ybw8Cr8AIO9NwNBi5WtcB2_DnFk4CP-Z" width={600} height={600} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image alt="xvi" src="https://drive.google.com/uc?export=view&id=1L966NYjZVIRS1g0ibWB6eOCIYnfYqZr9" width={600} height={600} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
