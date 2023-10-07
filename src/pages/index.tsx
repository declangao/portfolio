import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import VideoCarousel from '@/components/VideoCarousel';

export default function HomePage() {
  return (
    <div className="pt-20">
      <section>
        <Hero />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Projects />
      </section>
    </div>
  );
}
