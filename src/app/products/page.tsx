import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services: React.FC = () => {
  return (
    <main>
      <div className="md:pt-20">
        <h1 className="pt-28 md:pt-10 text-center font-bold text-4xl">
          Our Services
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 md:px-28 mb-8 border-b-4 border-t-4 border-orange-500">
        <Image
          src="https://drive.google.com/uc?export=view&id=1ZcqLLXbqUUWqAy3ZfESb2K_X572OIDOw"
          alt=""
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-red-600 text-5xl">Product</h1>
          <h1 className="pl-32">Catalogue</h1>
          <br />
          <h1 className="text-red-600">
            1 Product, 2 Photos & Angle - Rp 50.000
          </h1>
          <h1>Product Focused, without model, clean</h1>
          <h1>background, natural tone, and simple styling</h1>
          <h1 className="font-bold">No Minimum Product</h1>
          <br />
          <br />
          <p className="text-xs">
            Additional 1 angle/interaction - Rp 25.000 (free 1 photo)
          </p>
          <p className="text-xs">Colored background-Rp 30.000 per product</p>
          <p className="text-xs">
            Photo outside will be charged with transportation & logistics fee
            (flat rate)
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 md:px-28 mb-8 border-b-4 border-orange-500">
        <div className="flex flex-col justify-center">
          <h1 className="text-red-600 text-5xl">Campaign</h1>
          <h1 className="pl-32">Catalogue</h1>
          <br />
          <h1 className="text-red-600">10 Photos Package - Rp 750.000</h1>
          <p className="text-xs">Maximum of 5 products,up to 2 concepts</p>
          <h1 className="text-red-600">15 Photos Package - Rp 1.000.000</h1>
          <p className="text-xs">Maximum of 8 products,up to 3 concepts</p>
          <h1 className="text-red-600">20 Photos Package - Rp 1.500.000</h1>
          <p className="text-xs">Maximum of 12 products,up to 4 concepts</p>
          <br />
          <br />
          <p className="text-xs">
            Including Req Editing and Styling, Moodboard and Concept,
          </p>
          <p className="text-xs">Free Background and Minimalist Property.</p>
          <br />
          <br />
          <p className="text-xs">Additional edited photo - Rp 50.000</p>
          <p className="text-xs">Additional concept - Rp 300.000</p>
          <p className="text-xs">
            Additional property will be charged by discuss
          </p>
        </div>
        <Image
          src="https://drive.google.com/uc?export=view&id=1W1bANWfYgeDR92jORqOsxaXs1kaE1EtI"
          alt=""
          width={500}
          height={500}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 md:px-28 mb-8 border-b-4 border-orange-500">
        <Image
          src="https://drive.google.com/uc?export=view&id=1eZjsw_rmCtpjfW4OQrHSMz40py_4vsH4"
          alt=""
          width={400}
          height={400}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-red-600 text-5xl">Portrait</h1>
          <h1 className="pl-32">Catalogue</h1>
          <br />
          <h1 className="text-red-600">
            1 Product, 3 Photos & Angle - Rp 150.000
          </h1>
          <h1>Product Focused, with model from cosmost,</h1>
          <h1>clean background, natural tone, and simple styling</h1>
          <br />
          <br />
          <p className="text-xs">Additional 1 photo - Rp 50.000</p>
          <p className="text-xs">
            Additional setting or colored background - Rp 300.000
          </p>
          <p className="text-xs">
            Photo outside will be charged with transportation & logistics fee
            (flat rate)
          </p>
          <p className="text-xs">Exclude requested model fee.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 md:px-28 mb-8 border-b-4 border-orange-500">
        <div className="flex flex-col justify-center">
          <h1 className="text-red-600 text-5xl">Campaign</h1>
          <h1 className="pl-32">Catalogue with model</h1>
          <br />
          <h1 className="text-red-600">10 Photos Package - Rp 1.200.000</h1>
          <p className="text-xs">Maximum of 3 products,up to 2 concepts</p>
          <h1 className="text-red-600">15 Photos Package - Rp 2.100.000</h1>
          <p className="text-xs">Maximum of 5 products,up to 3 concepts</p>
          <h1 className="text-red-600">20 Photos Package - Rp 2.700.000</h1>
          <p className="text-xs">Maximum of 8 products,up to 4 concepts</p>
          <br />
          <br />
          <p className="text-xs">
            Including Req Editing, Moodboard and Concept,Free Background
          </p>
          <p className="text-xs">Free Background and Minimalist Property.</p>
          <br />
          <br />
          <p className="text-xs">Additional edited photo - Rp 70.000</p>
          <p className="text-xs">Additional concept - Rp 500.000</p>
          <p className="text-xs">
            Additional property will be charged by discuss
          </p>
          <p className="text-xs">
            Photo outside will be charged with transportation and logistics
            fee(flat rate)
          </p>
          <p className="text-xs">Exclude requested model fee.</p>
        </div>
        <Image
          src="https://drive.google.com/uc?export=view&id=19k3yAy5qtEP7la4A1KllM_bwmK5Bjh_R"
          alt=""
          width={500}
          height={500}
        />
      </div>

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
                  "Terima kasih Cosmost, puas banget sama pelayanannya.
                  Responnya cepat dan hasilnya memuaskan, jadi nggak pusing lagi
                  mikirin konten di Instagram"
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
                  "Makasih tim Cosmost, Hasilnya bagus, pelayanannya
                  profesional"
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
    </main>
  );
};

export default Services;
