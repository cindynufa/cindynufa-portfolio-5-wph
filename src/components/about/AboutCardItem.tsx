interface AboutCardItemProps {
  heading: string;
  text: string;
}

export default function AboutCardItem({ heading, text }: AboutCardItemProps) {
  return (
    <div className="about-card outline-gradient">
      <div className="flex flex-col w-full translate-y-1/2 items-center">
        <h3 className="text-display-2xl font-extrabold text-neutral-100">
          {heading}
        </h3>
        <p className="text-md font-regular text-neutral-100">{text}</p>
      </div>
    </div>
  );
}
