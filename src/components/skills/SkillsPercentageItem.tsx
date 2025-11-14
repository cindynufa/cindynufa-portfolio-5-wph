interface SkillsPercentageItemProps {
  heading: string;
  percentage: number;
}

export default function SkillsPercentageItem({
  heading,
  percentage,
}: SkillsPercentageItemProps) {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex flex-row justify-between">
        <h4 className="text-md font-semibold text-neutral-100">{heading}</h4>
        <p className="text-md font-semibold text-neutral-100">{percentage}%</p>
      </div>
      <div className="relative w-full h-3 border-0 bg-neutral-400 rounded-full overflow-hidden">
        <div className="skill-bar-gradient" style={{ width: `${percentage}%`}}></div>
      </div>
    </div>
  );
}
