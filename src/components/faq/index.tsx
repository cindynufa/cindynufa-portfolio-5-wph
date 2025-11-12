import FaqAccordion from './FaqAccordion';
import FaqDescription from './FaqDescription';

export default function Faq() {
  return (
    <div className="flex flex-col w-full px-35 py-20 gap-20">
      <FaqDescription />
      <FaqAccordion />
    </div>
  );
}
