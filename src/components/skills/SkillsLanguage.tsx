import SkillsLanguageConst from '@/constants/SkillsLanguage';
import SkillsLanguageItem from './SkillsLanguageItem';

export default function SkillsLanguage() {
  return (
    <div className="relative flex w-full justify-center items-center">
      <div className="absolute w-515 h-515 border border-neutral-400 rounded-full" />
      <div className="absolute w-385 h-385 border border-neutral-400 rounded-full" />
      <div className="absolute w-66.5 h-66.5 border border-neutral-400 rounded-full" />
      <SkillsLanguageItem
        {...SkillsLanguageConst[0]}
        className="-top-[8%] left-1/3 -translate-x-1/2"
      />
      <SkillsLanguageItem
        {...SkillsLanguageConst[1]}
        className="top-[8%] right-[15%] -translate-y-1/2"
      />
      <SkillsLanguageItem
        {...SkillsLanguageConst[2]}
        className="left-1/5 -translate-x-1/2"
      />
      <SkillsLanguageItem
        {...SkillsLanguageConst[3]}
        className="top-[35%] right-[30%] -translate-y-1/2"
      />
      <SkillsLanguageItem
        {...SkillsLanguageConst[4]}
        className="bottom-[2%] left-[22%]"
      />
      <SkillsLanguageItem
        {...SkillsLanguageConst[5]}
        className="bottom-[15%] right-[22%]"
      />
    </div>
  );
}
