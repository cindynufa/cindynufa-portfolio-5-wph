import CareerCard from './CareerCard';
import CareerDescription from './CareerDescription';

export default function Career() {
  return (
    <div className="flex flex-col w-full px-35 py-20 gap-20">
      <CareerDescription />
      <CareerCard />
    </div>
  );
}
