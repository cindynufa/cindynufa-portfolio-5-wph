import Image from 'next/image';

interface SkillsLanguageItemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function SkillsLanguageItem({
  src,
  alt,
  width,
  height,
}: SkillsLanguageItemProps) {
  return (
    <div className="flex w-40.5 h-20 p-2.5 gap-2.5 justify-center items-center border border-gradient">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
