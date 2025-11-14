import FooterLogo from './FooterLogo';
import FooterSocialMedia from './FooterSocialMedia';

export default function Footer() {
  return (
    <div className="flex flex-row w-full px-35 py-20 gap-20 justify-between border-0 bg-neutral-600">
      <FooterLogo />
      <FooterSocialMedia />
    </div>
  );
}
