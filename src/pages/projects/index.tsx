import React from 'react';
import { motion } from 'framer-motion';

import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'Portfolio Site',
    slug: 'portfolio',
    image: 'portfolio.png',
    url: 'https://github.com/declangao/portfolio',
    description:
      'My personal portfolio built with React, Next.js, TailwindCSS and TypeScript.',
    features: [
      'Full stack site with backend API and MongoDB',
      'Server side rendering',
      'Light/dark theme',
      'Multiple Framer Motion examples throughout the site',
    ],
    isFeatured: true,
  },
  {
    name: 'Household Task Manager',
    slug: 'task-manager',
    image: 'task-manager.png',
    url: 'https://github.com/declangao/household-task-manager',
    description:
      'A simple tool to "micromanage" your spouse😉 Built with React, Next.js, Prisma, TypeScript, TailwindCSS and daisyUI',
    features: [
      'Next.js 13 App router, server component and server action',
      'Fullstack app with backend authentication API',
      'Prisma ORM with MongoDB',
      'Multi-user authentication and assign task to user',
      'Markdown editor and preview',
      'Dark/light theme based on system setting',
    ],
    isFeatured: true,
  },
  {
    name: 'Next.js Markdown Blog',
    slug: 'blog',
    image: 'blog.png',
    url: 'https://github.com/declangao/nextjs-blog',
    description:
      'A minimalistic markdown blog app built with React, Next.js, TailwindCSS and TypeScript.',
    features: [
      'Server side rendering (SEO friendly)',
      'Markdown file as blog entry',
      'Backend API to store messages in MongoDB',
      'Light/dark theme',
      'Minimalistic design',
      'Interactive and engaging animations',
    ],
    isFeatured: true,
  },
  {
    name: 'Kings in the Corner Scoreboard',
    slug: 'scoreboard',
    image: 'scoreboard.png',
    url: 'https://play.google.com/store/apps/details?id=gao.declan.kings_corner_score_board',
    description: 'A score keeping mobile app written with Flutter and Dart',
    features: [
      'Follows Material 3 design',
      'Dynamic theme colour',
      'Light/dark theme',
      'Hive database',
    ],
  },
  {
    name: 'English Level Evaluation Test for Children',
    slug: 'english_test',
    image: 'english_test.png',
    url: 'https://ptest.hujiang.com',
    description:
      'An English level evaluation test for young kids designed to attract new users for an online eudcation platform',
    features: [
      'The project was designed to attract new users. It collects user information at the end of the test and passes it on to the sales team in order to make contact',
      'Built using AngularJS and Bootstrap',
      'It needs to be compatible with mobile devices by using responsive design',
    ],
  },
  {
    name: 'Agriculture Sales Management System',
    slug: 'nxl',
    image: 'nxl.png',
    url: 'https://app.nongxiao123.com',
    description:
      'A professional agriculture sales management system with 100k plus users',
    features: [
      'The project was designed to attract new users. It collects user information at the end of the test and passes it on to the sales team in order to make contact',
      'Built using AngularJS and Bootstrap',
      'It needs to be compatible with mobile devices by using responsive design',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-12 mb-20">
      <h1 className="text-4xl text-center mb-8">Projects I Worked On</h1>
      <motion.ul
        className="grid grid-cols-projects gap-8 list-none"
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
        animate="visible"
      >
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              name={project.name}
              slug={project.slug}
              image={project.image}
              description={project.description}
            />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
