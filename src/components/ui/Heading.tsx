import React from 'react';

type Props = {
  text: string;
  center?: boolean;
};

export default function Heading({ text, center }: Props) {
  return (
    <h3
      className={`tracking-[20px] text-2xl font-bold ${
        center ? 'text-center' : ''
      }`}
    >
      {text}
    </h3>
  );
}
