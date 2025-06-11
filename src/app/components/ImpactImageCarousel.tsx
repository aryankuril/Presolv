'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface ImpactImageCarouselProps {
  items: {
    imageSrc: string;
    imageAlt: string;
  }[];
  showNavigation?: boolean;
  showPagination?: boolean;
  autoplay?: boolean;
  scrollDelay?: number;
  className?: string;
}

const ImpactImageCarousel = ({ 
  items, 
  showNavigation = true, 
  showPagination = true,
  autoplay = true,
  scrollDelay = 3000,
  className = '',
}: ImpactImageCarouselProps) => {
  const autoplayOptions = {
    delay: scrollDelay,
    stopOnInteraction: false,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const OPTIONS: EmblaOptionsType = {
    align: 'start',
    loop: true,
    dragFree: false,
    containScroll: 'trimSnaps',
    skipSnaps: false
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, autoplay ? [Autoplay(autoplayOptions)] : []);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const interval = setInterval(() => {
      const currentIndex = emblaApi.selectedScrollSnap();
      const totalSlides = emblaApi.scrollSnapList().length;
      if (currentIndex === totalSlides - 1) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, scrollDelay);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay, scrollDelay]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="  container embla-viewport" ref={emblaRef}>
        <div className="embla-container flex">
          {items.map((item, index) => (
            <div key={index} className="embla-slide w-[50%] md:w-[33.333%] lg:w-[25%] flex-shrink-0 px-4">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full h-[350px] flex items-center justify-center">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.imageAlt} 
                    width={400}
                    height={350}
                    className="object-contain max-w-full max-h-full"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showNavigation && (
        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 -left-4 -right-4">
          <button
            className="w-12 h-12 flex items-center justify-center rounded-[59px] bg-gradient-to-b from-[#007AFF] to-[rgba(255,255,255,0.5)] text-white hover:opacity-90 transition-opacity duration-200 ml-4"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="w-12 h-12 flex items-center justify-center rounded-[59px] bg-gradient-to-b from-[#007AFF] to-[rgba(255,255,255,0.5)] text-white hover:opacity-90 transition-opacity duration-200 mr-4"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {showPagination && items.length > 0 && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-200"
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImpactImageCarousel; 