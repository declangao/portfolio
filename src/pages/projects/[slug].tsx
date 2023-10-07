import React from 'react';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';

import { projects } from '.';
import { Project } from '@/types';
import Image from 'next/image';

export default function ProjectDetailPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="h-[calc(100vh-12rem)] flex justify-center items-center flex-col md:flex-row gap-4 relative p-2 md:p-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/circle-spin.svg"
        alt="background spinning circle"
        className="absolute top-0 md:top-20 left-10 h-[500px] animate-slowSpin"
      />

      {/* <div className="flex justify-evenly items-center mt-12 w-full"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-12 w-full z-10">
        <div className="leading-8">
          <h1 className="text-3xl pb-4">{project.name}</h1>
          <p>{project.description}</p>
          <ul className="list-disc ml-4">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden hover:shadow-lg hover:shadow-sky-500">
          <a href={project.url} target="_blank">
            <Image
              className="w-full h-[26rem] object-cover rounded-lg hover:scale-125 delay-200 duration-300 ease-in-out"
              src={`/images/${project.image}`}
              alt={project.name}
              style={{ objectFit: 'contain' }}
              width={0}
              height={0}
              sizes="100%"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = ((context) => {
  const slug = context!.params!.slug;

  return {
    props: {
      project: projects.find((p) => p.slug === slug)!,
    },
  };
}) satisfies GetStaticProps<{ project: Project }>;

export const getStaticPaths = (() => {
  const slugs = projects.map((p) => p.slug);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;
