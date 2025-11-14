import PortfolioCard from './PortfolioCard';
import PortfolioDescription from './PortfolioDescription';

export default function Portfolio() {
  return (
    <section id='projects' className="flex flex-col w-full px-35 py-20 gap-20">
      <PortfolioDescription />
      <PortfolioCard />
    </section>
  );
}
