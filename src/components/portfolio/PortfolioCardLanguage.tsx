interface PortfolioCardLanguageProps {
  language: string;
}

export default function PortfolioCardLanguage({
  language,
}: PortfolioCardLanguageProps) {
  return (
    <div className="w-auto py-2 px-4 gap-2 border border-neutral-300 rounded-full">
      <p className="text-sm font-regular text-white">{language}</p>
    </div>
  );
}
