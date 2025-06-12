'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/app/components/Button';
import Image from 'next/image';

interface Module {
  id: string;
  image: string;
  title: string;
  description?: string;
}

interface CourseModulesProps {
  modules: Module[];
  title?: string;
}

export default function CourseModules({ modules, title }: CourseModulesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const scrollY = window.scrollY + window.innerHeight / 2;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        const progress = (scrollY - sectionTop) / sectionHeight;
        const idx = Math.min(
          modules.length - 1,
          Math.floor(progress * modules.length)
        );
        setActiveIndex(idx);

        // Calculate overall progress for the progress bar
        setScrollProgress(progress * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [modules.length]);

  // Add click handler for direct module navigation
  const handleModuleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>

      <section
        ref={sectionRef}
        className="course-module-container relative "
        style={{ height: `${modules.length * 20}vh` }}
      >
        <div className="container course-module-sticky">
          
          {title && (
     <div className=" sticky top-0 z-40 bg-black py-10 max-sm:py-4 max-sm:px-10">
  <h2 className="text-center mb-0 text-4xl font-bold text-white">{title}</h2>
</div>

          )}
          <div className="container h-full flex items-center justify-center">
            {/* Main content area */}
            <div className="flex h-full items-start justify-center px-4 py-10 md:px-2 lg:px-6  max-w-6xl ">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-25 max-w-6xl mx-auto w-full">
                {/* Left side - Card display that matches the screenshot */}
                <div className="col-span-1 md:col-span-5 lg:col-span-4 flex justify-center">
                  <div className="relative max-sm:w-[250px] max-sm:h-[250px] sm:w-[380px] sm:h-[300px]">
                    {/* Shadow cards (positioned behind main card) */}
                    {/* <div className="absolute top-0 left-4 w-full h-full" style={{ zIndex: 1 }}>
                      <div className="course-module-card opacity-90 shadow-lg" style={{ transform: 'scale(0.98)' }}></div>
                    </div> */}
                    <div className="absolute top-0 left-8 w-full h-full" style={{ zIndex: 2 }}>
                      <div className="course-module-card opacity-90 shadow-lg" style={{ transform: 'scale(0.96)' }}></div>
                    </div>

                    {/* Main card with image */}
                    <div className="relative course-module-card" style={{ zIndex: 3 }}>
                      <div className="flex items-center justify-center w-full h-full relative ">
                        {/* Blue glow effect */}
                        <div className="absolute w-[180px] h-[180px] rounded-full bg-[rgba(0,122,255,0.15)] filter blur-[35px] z-0"></div>

                        {/* Active module image */}
                        {modules.map((module, idx) => (
                          <div
                            key={idx}
                            className="transition-opacity duration-500 w-4/5 h-4/5 flex items-center justify-center"
                            style={{
                              opacity: idx === activeIndex ? 1 : 0,
                              position: idx === activeIndex ? 'relative' : 'absolute',
                              zIndex: idx === activeIndex ? 2 : 0
                            }}
                          >
                            <Image
                              src={module.image}
                              alt={`Module ${module.id}`}
                              width={200}
                              height={200}
                              className="w-4/5 h-4/5 object-contain"
                              style={{ filter: 'brightness(1.2)' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side content */}
                <div className="col-span-1 md:col-span-7 lg:col-span-8 flex flex-col">
                  {modules.map((module, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={idx}
                        className="transition-opacity duration-700"
                        style={{
                          opacity: isActive ? 1 : 0,
                          pointerEvents: isActive ? 'auto' : 'none',
                          position: isActive ? 'relative' : 'absolute',
                        }}
                      >
                        <h2 className="mb-3 text-center md:text-left">{module.title}</h2>
                        <p className="md:text-base mb-4 opacity-80 text-center md:text-left">{module.description}</p>
                        <div className="flex justify-center md:justify-start">
                          <Link href={`/course/module-${module.id}`}>
                            <Button>
                              GET STARTED
                            </Button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Progress bar with dynamic gradient */}
            <div className="course-module-progress">
              <div className="course-module-progress-track">
                <div
                  className="course-module-progress-bar"
                  style={{ width: `${scrollProgress}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-7 gap-4">
                <div
                  className={`text-center ${activeIndex === 0 ? '' : 'opacity-50'} cursor-pointer`}
                  onClick={() => handleModuleClick(0)}
                >
                  <p>01</p>
                  <p className={`${activeIndex === 0 ? 'text-white' : 'text-gray-500'}`}>Module</p>
                </div>
                <div
                  className={`text-center ${activeIndex === 1 ? '' : 'opacity-50'} cursor-pointer`}
                  onClick={() => handleModuleClick(1)}
                >
                  <p>02</p>
                  <p className={`${activeIndex === 1 ? 'text-white' : 'text-gray-500'}`}>Module</p>
                </div>
                <div
                  className={`text-center ${activeIndex === 2 ? '' : 'opacity-50'} cursor-pointer`}
                  onClick={() => handleModuleClick(2)}
                >
                  <p>03</p>
                  <p className={`${activeIndex === 2 ? 'text-white' : 'text-gray-500'}`}>Module</p>
                </div>
                <div
                  className={`text-center ${activeIndex === 3 ? '' : 'opacity-50'} cursor-pointer`}
                  onClick={() => handleModuleClick(3)}
                >
                  <p>04</p>
                  <p className={`${activeIndex === 3 ? 'text-white' : 'text-gray-500'}`}>Module</p>
                </div>
                <div
                  className={`text-center ${activeIndex === 4 ? '' : 'opacity-50'} cursor-pointer`}
                  onClick={() => handleModuleClick(4)}
                >
                  <p>05</p>
                  <p className={`${activeIndex === 4 ? 'text-white' : 'text-gray-500'}`}>Module</p>
                </div>
                <div
                  className={`text-center ${activeIndex === 5 ? '' : 'opacity-50'} cursor-pointer`}
                  onClick={() => handleModuleClick(5)}
                >
                  <p>06</p>
                  <p className={`${activeIndex === 5 ? 'text-white' : 'text-gray-500'}`}>Module</p>
                </div>
                <div
                  className={`text-center ${activeIndex === 6 ? '' : 'opacity-50'} cursor-pointer`}
                  onClick={() => handleModuleClick(6)}
                >
                  <p>07</p>
                  <p className={`${activeIndex === 6 ? 'text-white' : 'text-gray-500'}`}>Module</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 