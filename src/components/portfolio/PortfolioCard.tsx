import PortfolioConst from '@/constants/Portfolio';
import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';
import PortfolioCardLanguage from './PortfolioCardLanguage';
import { ArrowUpRight } from 'lucide-react';
import PortfolioDetailButton from './PortfolioDetailButton';

export default function PortfolioCard() {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-3 gap-12 justify-between">
        {PortfolioConst.map((portfolioCard, index) => (
          <div key={index} className="flex flex-col w-full gap-6">
            <Image
              src={portfolioCard.src}
              alt="Portfolio"
              width={370}
              height={370}
              className="w-full h-auto rounded-3xl"
            />
            <div className="flex flex-col w-full gap-10">
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold text-neutral-100">
                  {portfolioCard.heading}
                </h4>
                <div className="flex flex-row gap-2">
                  {portfolioCard.language.map((language, index1) => (
                    <Fragment key={index1}>
                      <PortfolioCardLanguage language={language} />
                    </Fragment>
                  ))}
                </div>
                <p className="text-md font-regular text-neutral-200">
                  {portfolioCard.text}
                </p>
              </div>
              <div className="flex flex-row gap-1.5">
                <button className="text-lg font-bold text-gradient">
                  {portfolioCard.button}
                </button>
                <ArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 top-[20%]">
        <PortfolioDetailButton />
      </div>
    </div>
  );
}
