import ContactDescription from './ContactDescription';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-row w-full px-35 py-20 gap-20 justify-between items-center">
      <ContactDescription />
      <ContactForm />
    </div>
  );
}
