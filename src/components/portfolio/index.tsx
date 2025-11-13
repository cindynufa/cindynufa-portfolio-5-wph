import PortfolioCard from './PortfolioCard';
import PortfolioDescription from './PortfolioDescription';

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full px-35 py-20 gap-20">
      <PortfolioDescription />
      <PortfolioCard />
    </div>
  );
}
