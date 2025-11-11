import HeroHeading from './HeroHeading';
import HeroButtonPortfolio from './HeroButtonPortfolio';
import HeroDescription from './HeroDescription';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-957 h-auto mt-73">
        <HeroButtonPortfolio />
        <HeroHeading />
        <HeroDescription />
        <Button className="w-51.5 h-12 p-2 gap-1.5 text-md font-medium text-neutral-100">
          View Portfolio
        </Button>
      </div>
    </div>
  );
}
