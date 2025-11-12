import About from '@/components/about';
import Waves from '@/components/waves';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Career from '@/components/career';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Waves />
      <About />
      <Career />
      <Skills />
    </>
  );
}
