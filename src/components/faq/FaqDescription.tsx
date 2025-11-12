import Description from '../component/Description';
import SectionTitle from '../component/SectionTitle';

export default function FaqDescription() {
  return (
    <div className="gap-3 text-center">
      <SectionTitle heading="Frequently Asked Question" />
      <Description description="Find answers to some of the frequently asked questions below." />
    </div>
  );
}
