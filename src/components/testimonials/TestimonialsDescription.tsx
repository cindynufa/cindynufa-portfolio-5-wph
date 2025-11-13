import Description from '../component/Description';
import SectionTitle from '../component/SectionTitle';

export default function TestimonialsDescription() {
  return (
    <div className="gap-3 text-center">
      <SectionTitle heading="What People Say About Me" />
      <Description description="Hear from clients and colleagues about their experiences working with me." />
    </div>
  );
}
