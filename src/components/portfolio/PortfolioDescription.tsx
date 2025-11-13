import Description from '../component/Description';
import SectionTitle from '../component/SectionTitle';

export default function PortfolioDescription() {
  return (
    <div className="flex flex-row w-full gap-12 justify-between">
      <SectionTitle heading="Experience in Front-End Development" />
      <Description
        description="I have experience developing 30+ web projects across various industries, including marketplaces, health, fashion, sports, and more. Implemented 1000+ responsive web pages with interactive features and smooth animations"
        className="text-right"
      />
    </div>
  );
}
