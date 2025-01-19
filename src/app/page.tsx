import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeetWise",
  description: "MeetWise - Transforming Your Meetings Into Insights",
};

export default function Home() {

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <CallToAction />
      <Faq />
      <Contact />
    </main>
  );
}
