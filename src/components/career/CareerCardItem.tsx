import Image from 'next/image';

interface CareerCardItemProps {
  src: boolean;
  description: string;
}

export default function CareerCardItem({
  src,
  description,
}: CareerCardItemProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Image
        src={`${src ? '/icons/ellipse.png' : ''}`}
        alt="Ellipse"
        width={4}
        height={4}
        className="w-1 h-1"
      />
      <p className={`${src ? 'text-neutral-200' : ''}`}>{description}</p>
    </div>
  );
}
