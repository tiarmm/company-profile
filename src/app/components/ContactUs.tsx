import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div>
        <h1 className="text-center font-bold text-4xl">
          Contact Us
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-12">
        <div className=" md:w-1/2">
          <Image alt="3" src="https://drive.google.com/uc?export=view&id=1BZ4IF5dXFFSn3uVFmN9mHb-CckeSHqUC" width={200} height={200} />
          <br />
          <h1>
            Cosmost is a creative agency engaged in photo, video, design and
            focuses on the development of social media. Cosmost was established
            in August 2021 based in D.I Yogyakarta.
          </h1>
          <br />

          <div className=" space-y-1">
            <div className="flex gap-4">
              <div>
                <MapPin />
              </div>
              <p>JL. Kaliurang km 5. Gg Sitisonya 1B. Sleman, Yogyakarta</p>
            </div>

            <div className="flex gap-4">
              <div>
                <Mail />
              </div>
              <p>infocosmost@gmail.com</p>
            </div>

            <div className="flex gap-4">
              <div>
                <Phone />
              </div>
              <p>+62 878-2849-0807</p>
            </div>

            <div className="flex gap-4">
              <div>
                <Instagram />
              </div>
              <p>instagram.com/cos.most/</p>
            </div>

            <div className="flex gap-4">
              <div>
                <Linkedin />
              </div>
              <p>linkedin.com/cosmo-studio/</p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:w-1/2">
          <br />
          <h1 className="pb-2">Join our Newsletter</h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit" className="bg-orange-500">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
