import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import StatsBar from "../components/landing/StatsBar";
import PainPoints from "../components/landing/PainPoints";
import PersonalStory from "../components/landing/PersonalStory";
import ProcessSteps from "../components/landing/ProcessSteps";
import Benefits from "../components/landing/Benefits";
import ContactCTA from "../components/landing/ContactCTA";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div dir="rtl" className="font-heebo min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <PainPoints />
      <PersonalStory />
      <ProcessSteps />
      <Benefits />
      <ContactCTA />
      <Footer />
    </div>
  );
}