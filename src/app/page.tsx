import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeetWise",
  description: "MeetWise",
};

export default function Home() {

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <About /> */}
      <CallToAction />
      {/* <Pricing /> */}
      <Testimonials />
      <Faq />
      {/* <Team /> */}
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
