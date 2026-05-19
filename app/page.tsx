import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Solution } from "@/components/sections/Solution";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { Numbers } from "@/components/sections/Numbers";
import { HowToStart } from "@/components/sections/HowToStart";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contacts } from "@/components/sections/Contacts";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pain />
      <Solution />
      <HowWeWork />
      <Services />
      <Cases />
      <Numbers />
      <HowToStart />
      <Pricing />
      <FAQ />
      <Contacts />
      <Footer />
    </main>
  );
}
