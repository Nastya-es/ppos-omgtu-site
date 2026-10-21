import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import WhatWeDo from "../src/components/WhatWeDo";
import LatestNews from "../src/components/LatestNews";
import OurProjects from "../src/components/OurProjects";
import ConsultationForm from "../src/components/ConsultationForm";
import Footer from "../src/components/Footer";
import CTASection from "../src/components/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <LatestNews />
        <OurProjects />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}