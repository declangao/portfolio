import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';

type Prop = {
  name: string;
  slug: string;
  image: string;
  description: string;
};

export default function ProjectCard({ name, slug, image, description }: Prop) {
  return (
    <Tilt className="h-full shadow-xl hover:shadow-sky-300">
      <motion.div
        className="h-full rounded-lg dark:bg-slate-800 text-center"
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
      >
        <Link href={`/projects/${slug}`}>
          <div className="overflow-hidden">
            <Image
              className="w-full h-[15rem] object-cover rounded-lg"
              src={`/images/${image}`}
              alt={name}
              style={{ objectFit: 'cover' }}
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
          <div className="p-4">
            <h3 className="text-2xl mx-0 my-2">{name}</h3>
            <p className="leading-6 my-4">{description}</p>
          </div>
        </Link>
      </motion.div>
    </Tilt>
  );
}
