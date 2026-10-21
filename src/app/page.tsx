import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDo from "../components/WhatWeDo";
import LatestNewsServer from "../components/LatestNewsServer";
import OurProjects from "../components/OurProjects";
import ConsultationForm from "../components/ConsultationForm";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <LatestNewsServer />
        <OurProjects />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}