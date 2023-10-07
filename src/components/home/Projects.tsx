import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Heading from '../ui/Heading';
import { projects } from '@/pages/projects';
import ProjectTile from '../ProjectTile';

type Props = {};

export default function Projects({}: Props) {
  const featuredProjects = projects.filter((p) => p.isFeatured);

  return (
    <div className="pb-20">
      <Heading text="PROJECTS" center />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 py-12"
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
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
      >
        {featuredProjects.map((project) => (
          <ProjectTile
            key={project.name}
            image={project.image}
            text={project.name}
            slug={project.slug}
          />
        ))}
      </motion.div>

      <div className="flex justify-center">
        <Link href="/projects" scroll={true}>
          <button className="px-6 py-2 tracking-widest bg-sky-500 hover:bg-sky-400 rounded-md focus:outline-none border-0 text-white">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}
