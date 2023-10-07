import React from 'react';
import { motion } from 'framer-motion';

import WorkExperienceTile from '@/components/WorkExperienceTile';
import { WorkExperience } from '@/types';

export default function ExperiencePage() {
  const experience: WorkExperience[] = [
    {
      startDate: 'APR 2022',
      endDate: 'SEP 2022',
      title: 'Frontend Tech Lead (GCB4)',
      company: 'AIA Information Technology (Beijing)',
      description: '',
      duties: [
        'Fortune 500 FinTech company',
        'Led a frontend team to develop an in-house UI framework consisting of 120+ components',
        'Code review for the entire team and collaborating with external teams',
        'Experiment on Next.js, GraphQL, MongoDB and NestJS for in-house application',
      ],
      tags: [
        'React',
        'Vue',
        'Next.js',
        'Node.js',
        'GraphQL',
        'MongoDB',
        'NestJS',
      ],
    },
    {
      startDate: 'JAN 2017',
      endDate: 'MAR 2022',
      title: 'Frontend Developer',
      company: 'Donglong Technology (Beijing)',
      duties: [
        'Designed and developed the Agriculture Sales Management System for web and mobile from scratch',
        'Completed two major overhauls of the Agriculture Sales Management System which improved user experience and added professional financial module',
        'Led the frontend team to design and develop a dozen more projects',
      ],
      tags: ['Vue', 'React', 'Angular.js', 'Node.js', 'MySQL'],
    },
    {
      startDate: 'JAN 2016',
      endDate: 'JAN 2017',
      title: 'Frontend Developer (P6)',
      company: 'Hujiang Education (Shanghai)',
      duties: [
        'Independently developed Hujiang English Level Evaluation System for Children and English Level Evaluation System for Adults',
        'Participated in designing and building the internal question bank system',
        'Built a web scraper using Python to automatically collect and store questions which greatly simplified the workload of the question bank team',
        'Participated in conceptual projects like the automatic intelligent test generation system and a mobile app that recognizes and solves mathematic problems by taking a photo of the question using OCR',
      ],
      tags: ['Vue', 'Angular.js', 'Python'],
    },
    {
      startDate: 'MAR 2015',
      endDate: 'SEP 2015',
      title: 'Android Developer',
      company: 'Vodafone New Zealand',
      duties: [
        'Maintained "My Vodafone" app',
        'Assisted converting the original PhoneGap based hybrid app to a native Android app which significantly improved app performance and Play Store ratings',
        'Helped the frontend dev team build the internal customer service management platform',
      ],
      tags: ['Java', 'PhoneGap'],
    },
  ];

  return (
    <div className="pt-12 flex flex-col items-center mb-20">
      <h1 className="text-4xl text-center mb-8">My Work Experience</h1>

      <motion.ul
        className="w-full md:w-2/3"
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
        {experience.map((exp) => (
          <li key={exp.title}>
            <WorkExperienceTile
              startDate={exp.startDate}
              endDate={exp.endDate}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              duties={exp.duties}
              tags={exp.tags}
            />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
