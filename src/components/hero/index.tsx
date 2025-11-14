import HeroHeading from './HeroHeading';
import HeroButtonPortfolio from './HeroButtonPortfolio';
import HeroDescription from './HeroDescription';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="w-full items-center">
      <div className="flex flex-col w-957 h-auto mx-auto pt-273 gap-5">
        <HeroButtonPortfolio />
        <HeroHeading />
        <HeroDescription />
        <Link href="#projects">
          <div className="text-center">
            <Button className="w-51.5 h-12 p-2 gap-1.5 text-md font-medium text-neutral-100">
              View Portfolio
            </Button>
          </div>
        </Link>
      </div>
    </section>
  );
}
