import { Form } from 'radix-ui';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export default function ContactForm() {
  return (
    <div className="w-120 p-6 gap-5 border-0 bg-gray-900 rounded-3xl">
      <Form.Root className="w-full gap-5">
        <Form.Field className="" name="name">
          <Form.Message match="valueMissing" className="text-red-500">
            Please enter your name
          </Form.Message>
          <Form.Control asChild>
            <Input
              type="name"
              placeholder="Name"
              required
              className="w-full h-12 py-2 px-4 gap-2 border-0 bg-neutral-500 rounded-2xl text-md font-regular text-neutral-200"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="" name="email">
          <Form.Message match="valueMissing" className="text-red-500">
            Please enter your email
          </Form.Message>
          <Form.Control asChild>
            <Input
              type="email"
              placeholder="Email"
              required
              className="w-full h-12 py-2 px-4 gap-2 border-0 bg-neutral-500 rounded-2xl text-md font-regular text-neutral-200"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="" name="message">
          <Form.Control asChild>
            <Textarea
              placeholder="Message"
              className="w-full h-42 p-4 gap-2 border-0 bg-neutral-500 rounded-2xl text-md font-regular text-neutral-200"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <Button className="w-full h-12 p-2 gap-1.5 text-md font-medium text-white">
            Send
          </Button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
