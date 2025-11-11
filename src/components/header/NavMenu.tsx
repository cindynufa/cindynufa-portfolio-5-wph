import NavMenuConst from '@/constants/NavMenu';
import NavMenuItem from './NavMenuItem';

export default function NavMenu() {
  return (
    <nav>
      <ul className='flex flex-row w-full gap-6 justify-between'>
        {NavMenuConst.map((navMenu, index) => (
          <NavMenuItem key={index} href={navMenu.href} text={navMenu.text} />
        ))}
      </ul>
    </nav>
  );
}
