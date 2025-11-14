import Image from 'next/image';

interface SkillsLanguageItemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function SkillsLanguageItem({
  src,
  alt,
  width,
  height,
  className,
}: SkillsLanguageItemProps) {
  return (
    <div className={`absolute flex justify-center items-center skill-card ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
