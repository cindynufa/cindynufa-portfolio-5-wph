import SectionTitle from '../component/SectionTitle';

export default function AboutDescription() {
  return (
    <div className="flex flex-row w-full gap-3 justify-between">
      <SectionTitle heading="Who am I?" className="w-full h-auto" />
      <p className="text-md font-regular text-neutral-200">
        Hi, I’m Cindy, a Front-End Developer & Web Programming Instructor based
        in Jakarta. With over{' '}
        <span className="font-bold text-white">3 years of experience</span> , I
        specialize in crafting interactive, responsive, and user-friendly
        websites that deliver exceptional digital experiences. My expertise
        spans across various industries, including e-commerce, education, and
        SaaS. I am proficient in modern front-end technologies, clean coding
        practices, and performance optimization.{' '}
      </p>
    </div>
  );
}
