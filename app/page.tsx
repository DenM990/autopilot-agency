import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Solution } from "@/components/sections/Solution";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pain />
      <Solution />
      <HowWeWork />
      <Services />
      <Cases />
    </main>
  );
}
