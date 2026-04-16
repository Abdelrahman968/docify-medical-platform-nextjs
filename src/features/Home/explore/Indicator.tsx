'use client';
import { useState } from 'react';

export default function Indicator({ num = 9 }: { num?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
      {Array.from({ length: num }).map((_, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(0)}
          title={index.toString()}
          className={`
            w-[40px] h-[6px] rounded-lg cursor-pointer transition-all duration-300
            ${activeIndex === index ? 'bg-[#022D70]' : 'bg-[#616577]'}
          `}
        />
      ))}
    </div>
  );
}
