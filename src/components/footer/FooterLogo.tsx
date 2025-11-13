import { Copyright } from 'lucide-react';
import Logo from '../header/Logo';

export default function FooterLogo(){
    return(
        <div className="flex flex-row gap-4 items-center">
        <Logo />
        <div className="flex flex-row gap-0.5 items-center text-md font-regular text-neutral-200">
          <Copyright className="w-4 h-4" />
          <p>cindy2025</p>
        </div>
      </div>
    )
}