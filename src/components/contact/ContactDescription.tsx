import Description from '../component/Description';
import SectionTitle from '../component/SectionTitle';

export default function ContactDescription() {
  return (
    <div className='w-457 gap-3 justify-center items-center'>
      <SectionTitle heading="Contact Me" />
      <Description description="Feel free to drop a message for any inquiries or collaborations." />
    </div>
  );
}
