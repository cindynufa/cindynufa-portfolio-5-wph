import TestimonialsConst from '@/constants/Testimonials';
import Image from 'next/image';

export default function TestimonialsCard() {
  return (
    <div className="grid grid-cols-3 w-full gap-5 justify-between">
      {TestimonialsConst.map((testimonialsCard, index) => (
        <div
          key={index}
          className="flex flex-col w-125 p-5 gap-5 border-0 bg-neutral-500 rounded-2xl border-gradient cursor-pointer"
        >
          <div className="flex flex-row gap-4">
            <Image
              src={testimonialsCard.src}
              alt="Photo Profile"
              width={60}
              height={60}
              className="w-15 h-15"
            />
            <div className="flex flex-col gap-0.75">
              <h4 className="text-md font-bold text-neutral-100">
                {testimonialsCard.name}
              </h4>
              <p className="text-md font-regular text-neutral-200">
                {testimonialsCard.heading}
              </p>
            </div>
          </div>
          <p className="text-md font-regular text-neutral-200">
            {testimonialsCard.text}
          </p>
        </div>
      ))}
    </div>
  );
}
