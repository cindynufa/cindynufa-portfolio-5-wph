import CareerCardConst from '@/constants/CareerCard';
import CareerCardItem from './CareerCardItem';
import { Fragment } from 'react/jsx-runtime';
import { Building, CalendarDays, Dot } from 'lucide-react';

export default function CareerCard() {
  return (
    <div className="flex flex-col w-full gap-6">
      {CareerCardConst.map((careerCard, index) => (
        <div
          key={index}
          className="flex flex-col w-full p-6 gap-5 border-0 bg-neutral-500 rounded-3xl"
        >
          <h3 className="text-display-xs font-bold text-white">
            {careerCard.heading}
          </h3>
          <div className="flex flex-row gap-3">
            <Building />
            <p>{careerCard.text}</p>
            <Dot />
            <CalendarDays />
            <p>{careerCard.date}</p>
          </div>
          {careerCard.description.map((description, index1) => (
            <Fragment key={index1}>
              <CareerCardItem src={careerCard.src} description={description} />
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
