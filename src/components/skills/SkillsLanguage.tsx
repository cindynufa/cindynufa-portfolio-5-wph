import SkillsLanguageConst from '@/constants/SkillsLanguage';
import SkillsLanguageItem from './SkillsLanguageItem';

export default function SkillsLanguage() {
  return (
    <div className="w-full border">
      <div className="relative w-515 h-515 border border-neutral-400 rounded-full">
        <div className="absolute w-385 h-385 border border-neutral-400 rounded-full">
          <div className="absolute w-66.5 h-66.5 border border-neutral-400 rounded-full translate-x-1/2 translate-y-1/2">
            {SkillsLanguageConst.map((skillsLanguage, index) => (
              <SkillsLanguageItem
                key={index}
                src={skillsLanguage.src}
                alt={skillsLanguage.alt}
                width={skillsLanguage.width}
                height={skillsLanguage.height}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
