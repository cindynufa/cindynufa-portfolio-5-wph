import Image from 'next/image';
import Link from 'next/link';

export default function HeroButtonPortfolio() {
  return (
    <Link href="#projects">
      <button className="flex flex-row w-auto mx-auto h-11.5 gap-1.5 outline-gradient justify-center items-center text-md font-medium">
        <Image
          src="/icons/emoticon-girl.png"
          alt="Emoticon"
          width={20}
          height={20}
        />
        Cindy’s Portfolio
      </button>
    </Link>
  );
}
