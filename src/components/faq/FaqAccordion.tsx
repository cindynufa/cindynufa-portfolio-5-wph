import FaqConst from '@/constants/Faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="flex flex-col w-full gap-5">
      {FaqConst.map((faq, index) => (
        <AccordionItem key={index} value="item">
          <div className="flex flex-col w-full py-4 px-6 border-0 bg-neutral-500 rounded-2xl">
            <AccordionTrigger className='text-xl font-semibold text-neutral-100'>{faq.question}</AccordionTrigger>
            <AccordionContent className='text-md font-regular text-neutral-200'>{faq.answer}</AccordionContent>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
