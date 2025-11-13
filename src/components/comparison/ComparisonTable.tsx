import ComparisonItemConst from '@/constants/ComparisonItem';
import ComparisonTitleConst from '@/constants/ComparisonTitle';
import Image from 'next/image';

export default function ComparisonTable() {
  return (
    <div className="w-full p-6 border-0 bg-neutral-500 rounded-3xl">
      <div className="flex flex-row border-0 color-gradient justify-between items-center">
        {ComparisonTitleConst.map((comparisonTitle, index) => (
          <p key={index} className="w-full p-2 gap-2 text-center">
            {comparisonTitle.text}
          </p>
        ))}
      </div>
      <div className="">
        {ComparisonItemConst.map((comparisonItem, index) => (
          <div
            key={index}
            className="grid grid-cols-3 w-full p-6 text-center border-t border-t-neutral-400"
          >
            <p>{comparisonItem.text}</p>
            <Image
              src={comparisonItem.check}
              alt="Check"
              width={28}
              height={28}
              className="mx-auto"
            />
            <Image
              src={comparisonItem.uncheck}
              alt="Check"
              width={29}
              height={29}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
