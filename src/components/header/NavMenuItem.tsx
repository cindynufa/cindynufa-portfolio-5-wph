import Link from 'next/link';

interface NavMenuItemProps {
  href: string;
  text: string;
}

const scroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function NavMenuItem({ href, text }: NavMenuItemProps) {
  return (
    <li className="p-2 gap-2 text-md text-neutral-100">
      <Link href={href} onClick={() => scroll(href.replace('#', ''))}>
        {text}
      </Link>
    </li>
  );
}
