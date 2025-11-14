import ContactDescription from './ContactDescription';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-row w-full px-35 py-20 gap-20 justify-between items-center"
    >
      <ContactDescription />
      <ContactForm />
    </section>
  );
}
