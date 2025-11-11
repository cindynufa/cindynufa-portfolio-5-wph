export default function SectionTitle({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) {
  return (
    <h2
      className={`${className} lg:text-display-2xl font-extrabold text-neutral-100`}
    >
      {heading}
    </h2>
  );
}
