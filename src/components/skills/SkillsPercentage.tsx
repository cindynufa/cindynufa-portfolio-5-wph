import SkillsPercentageConst from '@/constants/SkillsPercentage';
import SkillsPercentageItem from './SkillsPercentageItem';

export default function SkillsPercentage() {
  return (
    <div className='flex flex-col w-full gap-5'>
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

// interface SkillsPercentageProps {
//   heading: string;
//   percentage: number;
// }

// export default function SkillsPercentage({
//   heading,
//   percentage,
// }: SkillsPercentageProps) {
//   return (
//     <div className="flex flex-col gap-3">
//       {Array.from({ length: 6 }).map((_, index) => (
//         <div key={index} style={{left: `${index}rem`}}>
//           <div className="flex flex-row justify-between">
//             <h4 className="text-md font-semibold text-neutral-100">
//               {heading}
//             </h4>
//             <p className="text-md font-semibold text-neutral-100">
//               {percentage}%
//             </p>
//           </div>
//           <div className="relative w-full h-3 border-0 bg-neutral-400 rounded-full">
//             <div
//               className="absolute border-0 btn-gradient rounded-full"
//               style={{ width: `${percentage}%` }}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
