import Image from 'next/image';

export default function HeroButtonPortfolio() {
  return (
    <div className=''>
      <button className="flex flex-row w-auto h-11.5 gap-1.5 outline-gradient justify-center items-center text-md font-medium">
        <Image
          src="/icons/emoticon-girl.png"
          alt="Emoticon"
          width={20}
          height={20}
        />
        Cindy’s Portfolio
      </button>
    </div>
  );
}
