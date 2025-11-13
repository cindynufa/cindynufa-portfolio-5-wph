import About from '@/components/about';
import Waves from '@/components/waves';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Career from '@/components/career';
import Skills from '@/components/skills';
import Faq from '@/components/faq';
import Comparison from '@/components/comparison';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Waves />
      <About />
      <Career />
      <Skills />
      <Faq />
      <Comparison />
    </>
  );
}
