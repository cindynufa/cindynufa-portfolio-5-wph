import Image from 'next/image';

export default function AboutPhotoProfile() {
  return (
    <div className="w-full -mt-40">
      <Image
        src="/images/avatars/photo-profile.png"
        alt="Photo Profile"
        width={1160}
        height={459}
        className='w-290 h-459 rounded-3xl'
      />
    </div>
  );
}
