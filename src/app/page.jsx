import AboutSection from "@/pages/aboutSection";
import FaqSection from "@/pages/home/FaqSection";
import Hero from "@/pages/home/hero";
import LatestBlog from "@/pages/home/LatestBlog";
import Services from "@/pages/home/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FaqSection />
      <LatestBlog />
      <AboutSection />
    </div>
  );
}
