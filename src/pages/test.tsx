import React, { useState } from 'react';

const Arrow = ({ arrowStyle }: { arrowStyle?: string }) => {
  return (
    <svg
      width="16"
      height="26"
      viewBox="0 0 16 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer ${arrowStyle}`}
    >
      <path
        d="M13.8462 2L2 13L13.8462 24"
        stroke="#e2e8f0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function Test() {
  const images = [
    'https://www.tailwindtap.com/assets/components/simple-responsive-carousel/hill-lake.jpg',
    'https://www.tailwindtap.com/assets/components/simple-responsive-carousel/plant.jpg',
    'https://www.tailwindtap.com/assets/components/simple-responsive-carousel/supernatural.jpg',
    'https://www.tailwindtap.com/assets/components/simple-responsive-carousel/valley.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const decreseIndex = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(0);
    } else setCurrentIndex(currentIndex - 1);
  };
  const increseIndex = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(images.length - 1);
    } else setCurrentIndex(currentIndex + 1);
  };
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-gray-300">
        <div className="w-[800px] relative">
          <div
            className="absolute inset-y-0 left-3 w-5 flex top-1/2 z-50"
            onClick={decreseIndex}
          >
            <Arrow />
          </div>
          <div>
            {images.map((img, index) => {
              if (currentIndex === index) {
                return (
                  <img
                    key={index}
                    src={img}
                    alt="Different different images for carousel"
                    className="object-cover w-full lg:max-h-[700px] sm:max-h-[500px] max-h-[400px]"
                  />
                );
              } else return null;
            })}
          </div>
          <div
            className="absolute inset-y-0 right-2 top-1/2 w-5 flex z-50"
            onClick={increseIndex}
          >
            <Arrow arrowStyle="rotate-180" />
          </div>
        </div>
      </div>
    </>
  );
}
