import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Publications } from "@/components/portfolio/Publications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nikita Saini — CS Engineer · Web Developer · Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Nikita Saini — final-year CS student at Manav Rachna University, intern at KPMG India. Web development, data analysis, and research.",
      },
      { property: "og:title", content: "Nikita Saini — Portfolio" },
      {
        property: "og:description",
        content:
          "Building thoughtful digital solutions at the intersection of frontend craft and data intelligence.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Achievements />
      <Contact />
    </main>
  );
}
