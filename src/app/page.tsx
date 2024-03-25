"use client"
import Companyoverview from "./components/CompanyOverview";
import Companyservices from "./components/CompanyServices";
import ContactUs from "./components/ContactUs";
import Herosection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Herosection/>
      <Companyoverview/>
      <Companyservices/>
      <Testimonials/>
      <Portfolio/>
      <ContactUs/>
    </main>
  );
}
