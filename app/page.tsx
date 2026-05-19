import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Solution } from "@/components/sections/Solution";
import { HowWeWork } from "@/components/sections/HowWeWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pain />
      <Solution />
      <HowWeWork />
    </main>
  );
}
