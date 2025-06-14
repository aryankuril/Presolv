'use client';

import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface CardCarouselProps {
  cards: {
    imageSrc: string;
    imageAlt: string;
    title: string;
  }[];
  showNavigation?: boolean;
  showPagination?: boolean;
  autoplay?: boolean;
  slidesPerView?: {
    mobile?: number;  // < 768px
    tablet?: number;  // 768px - 1024px
    desktop?: number; // > 1024px
  };
  slidesToScroll?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  cardClassName?: string;
}

const CardCarousel = ({ 
  cards, 
  showNavigation = true, 
  showPagination = true,
  autoplay = true,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  slidesPerView = { mobile: 1, tablet: 2, desktop: 4 },
  slidesToScroll = { mobile: 1, tablet: 2, desktop: 2 },
  /* eslint-enable @typescript-eslint/no-unused-vars */
  cardClassName = ''
}: CardCarouselProps) => {
  // Create autoplay plugin instance
  const autoplayOptions = {
    delay: 8000,
    stopOnInteraction: false,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const OPTIONS: EmblaOptionsType = {
    align: 'start',
    loop: true,
    dragFree: false,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    skipSnaps: false
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, autoplay ? [Autoplay(autoplayOptions)] : []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla-container flex">
          {cards.map((card, index) => (
            <div key={index} className="embla-slide w-full md:w-1/2 lg:w-1/4 px-5 py-5">
              <div className={`custom-card flex-col gap-y-8 sm:gap-y-12 lg:gap-y-20 min-h-[600px] md:min-h-[500px] lg:min-h-[400px] ${cardClassName}`}>
                <div className="icon-card flex justify-center items-center">
                  <Image 
                    src={card.imageSrc} 
                    alt={card.imageAlt} 
                    width={100} 
                    height={100}
                    className="w-auto h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h5 className="text-center whitespace-normal">{card.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showNavigation && (
        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 left-0 right-0 px-4 md:px-4">
          <button
            className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-[59px] bg-gradient-to-b from-[#007AFF] to-[rgba(255,255,255,0.5)] text-white hover:opacity-90 transition-opacity duration-200"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg width="16" height="16" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-[59px] bg-gradient-to-b from-[#007AFF] to-[rgba(255,255,255,0.5)] text-white hover:opacity-90 transition-opacity duration-200"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg width="16" height="16" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {showPagination && (
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                index === selectedIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardCarousel; 