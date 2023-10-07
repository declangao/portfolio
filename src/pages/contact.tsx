import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';

import { isValidEmail } from '@/utils/util';
import Spinner from '@/components/ui/spinner';

import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const subject = subjectRef.current?.value;
    const message = messageRef.current?.value;

    if (
      !name ||
      name.trim() === '' ||
      !email ||
      !isValidEmail(email) ||
      !subject ||
      subject.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      toast.error('Invalid user input...');
      return;
    }

    setIsPending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Something went wrong...');

      toast.success('Message sent!');

      nameRef.current!.value = '';
      emailRef.current!.value = '';
      subjectRef.current!.value = '';
      messageRef.current!.value = '';
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)] relative flex flex-col justify-center items-center max-w-full px-10 mx-auto">
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl text-center mb-8"
      >
        Feel free to leave me a message
      </motion.h1>

      <ToastContainer />

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <form
          className="flex flex-col space-y-4 w-fit mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-4">
            <input
              className="contact-input"
              placeholder="Name"
              type="text"
              ref={nameRef}
              required
            />
            <input
              className="contact-input"
              placeholder="Email"
              type="email"
              ref={emailRef}
              required
            />
          </div>
          <input
            className="contact-input"
            placeholder="Subject"
            type="text"
            ref={subjectRef}
            required
          />
          <textarea
            className="contact-input"
            placeholder="Message"
            rows={5}
            ref={messageRef}
            required
          />

          <button
            className="bg-sky-500 px-10 py-5 rounded-md font-bold text-lg hover:bg-sky-400 inline-flex items-center justify-center text-white"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Spinner className="mr-2" />
                Sending...
              </>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
