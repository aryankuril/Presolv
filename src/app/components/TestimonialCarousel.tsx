'use client';

import React, { useState, useEffect, useRef, CSSProperties } from 'react';

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  cardClassName?: string;
}

const VISIBLE_STACK = 3; // 1 fully visible, 2 behind

const TestimonialCarousel = ({
  testimonials,
  cardClassName = '',
}: TestimonialCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const AUTO_SCROLL_DELAY = 4000;
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_SCROLL_DELAY);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total, isHovered]);

  // Get the indices of the top 3 cards in the stack
  const getStackIndices = () => {
    const indices = [];
    for (let i = 0; i < VISIBLE_STACK; i++) {
      indices.push((activeIndex + i) % total);
    }
    return indices;
  };

  // For animation: top card is pos 0, next is pos 1, next is pos 2
  const getStackStyle = (pos: number): CSSProperties => {
    if (pos >= VISIBLE_STACK) return { display: 'none' };
    const scale = 1 - pos * 0.07;
    const translateY = pos * 32;
    const zIndex = VISIBLE_STACK - pos;
    let opacity = 1;
    if (pos === 1) opacity = 0.7;
    if (pos === 2) opacity = 0.4;
    return {
      transform: `scale(${scale}) translateY(${translateY}px)`,
      zIndex,
      opacity,
      position: pos === 0 ? 'relative' : 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      pointerEvents: pos === 0 ? 'auto' : 'none' as const,
      transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), opacity 0.5s',
      boxShadow: pos === 0 ? '0 8px 32px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.08)',
      margin: 0,
    };
  };

  const stackIndices = getStackIndices();

  return (
 <div className="container relative max-sm:mt-10 mx-auto py-10 px-4 sm:px-6 lg:px-8 max-sm:py-1"


      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation - left (up) */}
      <button
        className="w-8 h-8 sm:w-10 sm:h-10 left-[-1rem]  flex items-center justify-center rounded-full bg-gradient-to-b from-[#007AFF] to-[rgba(255,255,255,0.5)] text-white hover:opacity-90 transition-opacity duration-200 absolute  max-sm:left-[-1rem] top-1/2 -translate-y-1/2 z-20"
        onClick={handlePrev}
        aria-label="Previous slide"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
      >
        <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 15L12 8L5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Navigation - right (down) */}
      <button
        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-[#007AFF] to-[rgba(255,255,255,0.5)] text-white hover:opacity-90 transition-opacity duration-200 absolute right-[-1rem] max-sm:right-[-1rem] top-1/2 -translate-y-1/2 z-20"
        onClick={handleNext}
        aria-label="Next slide"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
      >
        <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9L12 16L19 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="relative w-full h-[380px]" style={{ minHeight: 350 }}>
        {stackIndices.map((testimonialIdx, pos) => (
          <div
            key={testimonialIdx}
            style={getStackStyle(pos)}
            className="transition-all duration-500"
          >
            <div className={`custom-card flex-col gap-y-4 sm:gap-y-12 lg:gap-y-10 w-full ${cardClassName}`}>  
              <p className="mb-2">{testimonials[testimonialIdx].text}</p>
              <p className="font-semibold text-blue-400">{testimonials[testimonialIdx].author}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination dots */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
              index === activeIndex ? 'bg-white' : 'bg-white/30'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 