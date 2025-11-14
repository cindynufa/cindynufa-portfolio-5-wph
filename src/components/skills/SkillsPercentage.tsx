import SkillsPercentageConst from '@/constants/SkillsPercentage';
import SkillsPercentageItem from './SkillsPercentageItem';

export default function SkillsPercentage() {
  return (
    <div className="flex flex-col w-full gap-5">
      {SkillsPercentageConst.map((skillsLanguage, index) => (
        <SkillsPercentageItem
          key={index}
          heading={skillsLanguage.heading}
          percentage={skillsLanguage.percentage}
        />
      ))}
    </div>
  );
}
