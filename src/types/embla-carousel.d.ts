declare module 'embla-carousel-react' {
  export interface EmblaOptionsType {
    align?: 'start' | 'center' | 'end';
    axis?: 'x' | 'y';
    container?: boolean;
    containScroll?: boolean | 'trimSnaps' | 'keepSnaps';
    direction?: 'ltr' | 'rtl';
    dragFree?: boolean;
    dragThreshold?: number;
    loop?: boolean;
    skipSnaps?: boolean;
    slidesToScroll?: number;
    startIndex?: number;
    watchDrag?: boolean;
    breakpoints?: { [key: string]: Partial<EmblaOptionsType> };
  }

  export interface EmblaCarouselType {
    scrollNext: () => void;
    scrollPrev: () => void;
    scrollTo: (index: number) => void;
    selectedScrollSnap: () => number;
    scrollSnapList: () => number[];
    on: (eventName: string, callback: () => void) => void;
    off: (eventName: string, callback: () => void) => void;
  }

  function useEmblaCarousel(
    options?: EmblaOptionsType,
    plugins?: Array<{ destroy: () => void }>
  ): [
    (instance: HTMLElement | null) => void,
    EmblaCarouselType | undefined
  ];

  export default useEmblaCarousel;
}

declare module 'embla-carousel-autoplay' {
  export default function Autoplay(options?: {
    delay?: number;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
    playOnInit?: boolean;
  }): { destroy: () => void };
} 