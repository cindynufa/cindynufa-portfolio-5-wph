'use client';

import { Mail } from 'lucide-react';
import { Button } from '../ui/button';
import Logo from './Logo';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header className='fixed flex z-50 w-full h-21 gap-225 px-35 justify-between items-center'>
      <Logo />
      <NavMenu/>
      <Button className='w-45 h-12 p-2 gap-1.5 text-md font-medium text-neutral-100'><Mail/>Hire Me</Button>
    </header>
  );
}
