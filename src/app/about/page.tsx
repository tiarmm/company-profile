import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section>
      <div className="md:pt-20">
        <h1 className=" pt-28 md:pt-10 text-center font-bold text-4xl">
          About Us
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 md:px-28 mb-8 gap-8">
        <Image
          src="https://drive.google.com/uc?export=view&id=1w_u0Y-hytMYyuJrOdjz9Cun-6GNrZa2w"
          alt=""
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-center">
          <h1>
            Cosmost is a creative agency engaged in photo, video, design and
            focuses on the development of social media. Cosmost was established
            in August 2021 based in D.I Yogyakarta.
          </h1>
          <br />
          <br />
          <br />
          <h1 className=" text-justify text-gray-600">
            Cosmost believes that through social media, a business that is run
            can be more mobile to the maximum. Cosmost create the identity of
            brand through images and video with organized concept and
            creativity. It is our responsibility to develop a brand as desired.
          </h1>
        </div>
      </div>

      <div>
        <h1 className="pt-10 text-center font-bold text-4xl">
          Let's Meet Our Troops
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <Card className="text-center text-orange-500 ">
          <CardHeader>
            <CardTitle>CEO</CardTitle>
            <CardDescription>Mutiara Zachroaini</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://drive.google.com/uc?export=view&id=1-73SpX72ZN_YdXfEd876ndJ62HVQ3UrT"
              alt=""
              width={300}
              height={300}
              className="pl-20 md:pl-0"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center text-orange-500">
            <CardTitle>CFO</CardTitle>
            <CardDescription>Hanum Dwi Safitri</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://drive.google.com/uc?export=view&id=1iPk3iTnKRmtlynuh2PxjRGYaKK_p3HSu"
              alt=""
              width={300}
              height={300}
              className="pl-20 md:pl-0"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center text-orange-500">
            <CardTitle>COO</CardTitle>
            <CardDescription>Fatmah Syafira</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://drive.google.com/uc?export=view&id=1YNU8mQzK6-qsFuogOSY64-zWnDj7tkTU"
              alt=""
              width={300}
              height={300}
              className="pl-20 md:pl-0"
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <h1 className="pt-10 text-center font-bold text-4xl">
          Our Cultures
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
      </div>

      <div className="flex flex-col justify-between md:flex-row px-4 md:px-28 mb-8 gap-8">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold">What Makes</h1>
          <h1 className="font-bold text-orange-500">COSMOST <span className="text-black">Different?</span></h1>
          <br />
          <br />
          <h1>
            We work professionally and full of responsible to clients in
            accordance with the agreement. We are also consistent in creating
            creative ideas and discipline in every content production for
            clients.
          </h1>
        </div>
        <Image
          src="https://drive.google.com/uc?export=view&id=1kp7RrSlNRgv9uzpakkQSDVLJ0Y7sSX4x"
          alt=""
          width={300}
          height={300}
          className="pl-32 md:pl-0"
        />
        </div>
    </section>
  );
};

export default About;
