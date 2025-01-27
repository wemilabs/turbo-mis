import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features/features";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FAQ />
      <CTA />
    </>
  );
}
