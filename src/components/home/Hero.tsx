import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Link from 'next/link';

import BackgroundCircles from '../ui/BackgroundCircles';

const itemVariantsLeft = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const itemVariantsRight = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      'with 8 years of experience.',
      'who loves to learn new things.',
      'who welcomes a good challenge.',
      'who does not shy away from hardwork.',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      className="h-full md:h-[calc(100vh-10rem)] container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative"
      variants={{
        hidden: {
          scale: 0,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute top-[2rem] left-[16rem] md:-top-[2rem] md:-right-[30rem]">
        <BackgroundCircles />
      </div>

      <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-10">
        <motion.h1
          className="mt-2 mb-4 text-3xl font-bold tracking-widest md:text-4xl xl:text-5xl"
          variants={itemVariantsLeft}
        >
          Declan Gao
        </motion.h1>
        <motion.h1
          className="mt-2 mb-16 text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl"
          variants={itemVariantsLeft}
        >
          <span className="text-gray-500">
            A Toronto based frontend developer
          </span>
          <br />
          <span className="text-sky-500">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </motion.h1>
        <motion.div className="flex justify-center" variants={itemVariantsLeft}>
          <Link href="/about">
            <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg">
              About Me
            </button>
          </Link>
          <Link href="/contact">
            <button className="ml-4 inline-flex text-slate-900 bg-gray-100 border border-sky-500 dark:border-none py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Contact
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="md:w-1/3 w-5/6 z-10">
        <motion.img
          className="object-cover object-center rounded"
          alt="hero"
          src="/images/front-end-developer.png"
          variants={itemVariantsRight}
        />
      </div>
    </motion.div>
  );
}
