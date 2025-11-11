export default function Description({
  description,
  className,
}: {
  description: string;
  className?: string;
}) {
  return (
    <p className={`${className} lg:text-md font-regular text-neutral-200`}>
      {description}
    </p>
  );
}
