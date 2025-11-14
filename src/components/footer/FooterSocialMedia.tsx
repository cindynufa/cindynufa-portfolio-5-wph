import FooterConst from '@/constants/Footer';
import Image from 'next/image';

export default function FooterSocialMedia() {
  return (
    <div className="flex flex-row gap-4">
      {FooterConst.map((footerSocmed, index) => (
        <div
          key={index}
          className="flex w-12 h-12 border border-neutral-400 rounded-full justify-center items-center"
        >
          <Image
            src={footerSocmed.src}
            alt="Social Media"
            width={29}
            height={29}
          />
        </div>
      ))}
    </div>
  );
}
