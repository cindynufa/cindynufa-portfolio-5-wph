interface AboutCardItemProps {
  heading: string;
  text: string;
}

export default function AboutCardItem({ heading, text }: AboutCardItemProps) {
  return (
    <div className="flex flex-col justify-center items-center about-card outline-gradient">
      <h3 className="text-display-2xl font-extrabold text-neutral-100">
        {heading}
      </h3>
      <p className="text-md font-regular text-neutral-100">{text}</p>
    </div>
  );
}
