import ComparisonDescription from './ComparisonDescription';
import ComparisonTable from './ComparisonTable';

export default function Comparison() {
  return (
    <div className="flex flex-col w-full px-35 py-20 gap-20">
      <ComparisonDescription />
      <ComparisonTable />
    </div>
  );
}
