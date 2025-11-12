import Description from '../component/Description';
import SectionTitle from '../component/SectionTitle';

export default function CareerDescription() {
  return (
    <div className="gap-3 text-center">
      <SectionTitle heading="Career Journey" />
      <Description description="A visual timeline of key milestones and experiences from over the years." />
    </div>
  );
}
