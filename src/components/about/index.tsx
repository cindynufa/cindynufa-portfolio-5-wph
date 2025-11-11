import AboutCard from './AboutCard';
import AboutDescription from './AboutDescription';
import AboutPhotoProfile from './AboutPhotoProfile';

export default function About() {
  return (
    <div className="flex flex-col w-full px-35 py-20 gap-20">
      <AboutPhotoProfile />
      <AboutDescription />
      <AboutCard/>
    </div>
  );
}
