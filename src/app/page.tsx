import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Discipline } from "@/components/sections/discipline";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Parcours } from "@/components/sections/parcours";
import { Skills } from "@/components/sections/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Parcours />
      <Discipline />
      <Contact />
    </>
  );
}
