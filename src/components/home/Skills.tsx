import React from 'react';
import { motion } from 'framer-motion';

import Heading from '../ui/Heading';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col justify-start mx-auto items-center pb-20"
    >
      <Heading text="SKILLS" center />
      <div className="grid grid-cols-4 gap-1 md:gap-8 pt-12">
        <Skill image="react.png" text="React" directionLeft />
        <Skill image="nextjs.png" text="Next.js" directionLeft />
        <Skill image="vue.png" text="Vue" directionLeft />
        <Skill image="typescript.png" text="TypeScript" directionLeft />
        <Skill image="flutter.png" text="Flutter" />
        <Skill image="node.png" text="Node.js" />
        <Skill image="tailwind.png" text="TailWindCSS" />
        <Skill image="git.png" text="Git" />
        <Skill image="javascript.png" text="JavaScript" directionLeft />
        <Skill image="html.png" text="HTML" directionLeft />
        <Skill image="css.png" text="CSS" directionLeft />
        <Skill image="bootstrap.png" text="Bootstrap" directionLeft />
        <Skill image="python.png" text="Python" />
        <Skill image="sql.svg" text="SQL" />
        <Skill image="docker.png" text="Docker" />
        <Skill image="android.png" text="Android" />
      </div>
    </motion.div>
  );
}
