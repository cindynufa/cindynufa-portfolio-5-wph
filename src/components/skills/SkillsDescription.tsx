import Description from '../component/Description';
import SectionTitle from '../component/SectionTitle';

export default function SkillsDescription() {
  return (
    <div className="w-full gap-3 text-center">
      <SectionTitle heading="My Core Skill" />
      <Description description="An overview of the key technologies and frameworks I specialize in" />
    </div>
  );
}
