import SkillsDescription from './SkillsDescription';
import SkillsLanguage from './SkillsLanguage';
import SkillsPercentage from './SkillsPercentage';

export default function Skills() {
  return (
    <section id='skills' className="flex flex-col w-full px-35 py-20 gap-20">
      <SkillsDescription />
      <div className="flex flex-row gap-26 justify-between">
        <SkillsLanguage />
        <SkillsPercentage />
      </div>
    </section>
  );
}
