interface AboutCardItemProps {
  heading: string;
  text: string;
}

export default function AboutCardItem({ heading, text }: AboutCardItemProps) {
  return (
    <div className="w-273 h-273 p-5 gap-2 border rounded-full outline-gradient">
      <div className="flex flex-col translate-y-1/2 items-center">
        <h3 className="text-display-2xl font-extrabold text-neutral-100">
          {heading}
        </h3>
        <p className="text-md font-regular text-neutral-100">{text}</p>
      </div>
    </div>
  );
}
