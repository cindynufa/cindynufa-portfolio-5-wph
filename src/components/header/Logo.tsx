import Image from 'next/image';

export default function Logo() {
  return (
    <div className='w-10 h-10'>
      <Image src="/icons/logo.png" alt="Logo" width={40} height={40} />
    </div>
  );
}
