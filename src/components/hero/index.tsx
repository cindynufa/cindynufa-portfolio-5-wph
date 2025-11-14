import HeroHeading from './HeroHeading';
import HeroButtonPortfolio from './HeroButtonPortfolio';
import HeroDescription from './HeroDescription';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <div className="w-full items-center">
      <div className="flex flex-col w-957 h-auto mx-auto pt-273 gap-5">
        <HeroButtonPortfolio />
        <HeroHeading />
        <HeroDescription />
        <div className="text-center">
          <Button className="w-51.5 h-12 p-2 gap-1.5 text-md font-medium text-neutral-100">
            View Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
