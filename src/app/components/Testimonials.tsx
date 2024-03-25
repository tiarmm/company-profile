import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div>
        <h1 className="pt-10 text-center font-bold text-4xl">
          Testimonials
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
      </div>
      <div>
        <Carousel>
          <CarouselContent className="pt-4 gap-10">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
              <h1 className="font-style: italic">
                "Terima kasih Cosmost, puas banget sama pelayanannya. Responnya cepat dan hasilnya memuaskan, jadi nggak pusing lagi mikirin konten di Instagram"
              </h1>
              <br />
              <p className="text-xs text-orange-500 font-bold">Amanda</p>
              <p className="text-xs">Business Owner</p>
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
              <h1 className="font-style: italic">
                "Tidak salah sih aku percaya sama tim Cosmost, buat bantu olah
                sosial media aku, prosesnya tidak susah, kualitas dan hasilnya
                setimpal dengan biaya yang aku keluarkan"
              </h1>
              <br />
              <p className="text-xs text-orange-500 font-bold">Chika</p>
              <p className="text-xs">Business Owner</p>
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
              <h1 className="font-style: italic">
                "Responnya cepat dan hasilnya sesuai dengan apa yang saya
                inginkan. Harganya juga sesuai dengan hasil yang diberikan "
              </h1>
              <br />
              <p className="text-xs text-orange-500 font-bold">Fianda</p>
              <p className="text-xs">Business Owner</p>
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
              <h1 className="font-style: italic">
                "Makasih tim Cosmost, Hasilnya bagus, pelayanannya profesional"
              </h1>
              <br />
              <p className="text-xs text-orange-500 font-bold">Rahma</p>
              <p className="text-xs">Business Owner</p>
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
              <h1 className="font-style: italic">
                "Pelayanannya ramah dan menyenangkan,jadi enak buat diajak
                diskusi"
              </h1>
              <br />
              <p className="text-xs text-orange-500 font-bold">Bagas</p>
              <p className="text-xs">Business Owner</p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
