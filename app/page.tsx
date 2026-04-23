import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <Hero />
      <Experience />
      <Projects />
      <Approach />
      <Footer />
    </main>
  );
}
