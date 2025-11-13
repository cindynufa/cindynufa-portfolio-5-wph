import TestimonialsCard from './TestimonialsCard';
import TestimonialsDescription from './TestimonialsDescription';

export default function Testimonials() {
  return (
    <section className="flex flex-col w-full py-20 gap-20">
      <TestimonialsDescription />
      <TestimonialsCard />
    </section>
  );
}
