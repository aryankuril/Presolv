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
  const [sectionHeight, setSectionHeight] = useState('50vh');

  useEffect(() => {
    // Set initial height
    setSectionHeight(`${modules.length * (window.innerWidth < 768 ? 120 : 100)}vh`);

    // Update height on window resize
    const handleResize = () => {
      setSectionHeight(`${modules.length * (window.innerWidth < 768 ? 120 : 100)}vh`);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [modules.length]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
  
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const moduleHeight = sectionHeight / modules.length;
  
      if (scrollY <= sectionTop) {
        setActiveIndex(0);
        setScrollProgress(0);
        return;
      }
  
      // Calculate which module we're on
      const currentModule = Math.floor((scrollY - sectionTop) / moduleHeight);
      
      // Calculate progress within the current module
      const moduleProgress = ((scrollY - sectionTop) % moduleHeight) / moduleHeight;
      
      // Set the active index based on the current module
      setActiveIndex(Math.min(currentModule, modules.length - 1));
      
      // Calculate total progress
      const totalProgress = (currentModule + moduleProgress) / (modules.length - 1);
      setScrollProgress(Math.min(totalProgress * 100, 100));
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [modules.length]);
  

  // Add click handler for direct module navigation
  const handleModuleClick = (index: number) => {
    setActiveIndex(index);
    const section = sectionRef.current;
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const moduleHeight = sectionHeight / modules.length;
      const targetScroll = sectionTop + (moduleHeight * index);
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>

      <section
        ref={sectionRef}
        className="course-module-container"
        style={{ height: sectionHeight }}
      >
        <div className="course-module-sticky">
          {title && (
            <div className="container mx-auto mt-15 py-5 px-4 max-sm:py-4 max-sm:px-10">
              <h2 className="text-center mb-0 text-4xl font-bold">{title}</h2>
            </div>
          )}
<div className="container h-full flex flex-col items-center justify-center mx-auto px-4 max-sm:mb-30">

            {/* Main content area */}
            <div className="flex h-full items-start justify-center mb-20 px-4 py-10 md:px-8 lg:px-16 w-full max-w-6xl max-sm:py-2">

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-25 max-w-6xl mx-auto w-full max-sm:gap-4">
                {/* Left side - Card display that matches the screenshot */}
                <div className="col-span-1 md:col-span-5 lg:col-span-4 flex justify-center items-center">
                  <div className="relative max-sm:w-[250px] max-sm:h-[250px] sm:w-[380px] sm:h-[300px]">
                    {/* Stack of cards with transition effect */}
                    {modules.map((module, idx) => {
                      const isActive = idx === activeIndex;
                      const isNext = idx === activeIndex + 1;
                      const isPrevious = idx === activeIndex - 1;
                      
                      return (
                        <div
                          key={idx}
                          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
                            isActive ? 'z-30' : 
                            isNext ? 'z-20' : 
                            isPrevious ? 'z-20' : 'z-10'
                          }`}
                          style={{
                            transform: isActive 
                              ? 'translateY(0) scale(1)' 
                              : isNext 
                                ? 'translateY(20px) scale(0.95)' 
                                : isPrevious 
                                  ? 'translateY(-20px) scale(0.95)'
                                  : 'translateY(0) scale(0.9)',
                            opacity: isActive 
                              ? 1 
                              : isNext || isPrevious 
                                ? 0.7 
                                : 0.4,
                            pointerEvents: isActive ? 'auto' : 'none'
                          }}
                        >
                          <div className="course-module-card w-full h-full">
                            <div className="flex items-center justify-center w-full h-full relative">
                              {/* Blue glow effect */}
                              <div className="absolute w-[180px] h-[180px] max-sm:h-[50px] rounded-full bg-[rgba(0,122,255,0.15)] filter blur-[35px] z-0"></div>
                              
                              <Image
                                src={module.image}
                                alt={`Module ${module.id}`}
                                width={200}
                                height={200}
                                className="w-4/5 h-4/5 object-contain max-sm:h-3/5"
                                style={{ filter: 'brightness(1.2)' }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right side content */}
                <div className="col-span-1 md:col-span-7 lg:col-span-8  flex-col items-center md:items-start hidden md:flex">
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
                        <h2 className="mb-3 text-center mt:10 md:text-left">{module.title}</h2>
                        <p className="md:text-base mb-4 opacity-80 text-center md:text-left">{module.description}</p>
                        <div className="flex justify-center md:justify-start">
                          <Link href="/auth">
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
<div className="course-module-progress w-full max-w-screen-xl px-4 mx-auto mt-40 md:mt-12">

  {/* Mobile: Progress bar, number, title, and description */}
  <div className="block md:hidden text-left py-2 mt-32">
    {/* Progress bar */}
    <div className="course-module-progress-track mb-2" style={{ height: '2px', borderRadius: '9999px', background: 'rgba(255,255,255,0.08)' }}>
      <div
        className="course-module-progress-bar"
        style={{ width: `${scrollProgress}%`, height: '2px', borderRadius: '9999px', background: 'linear-gradient(90deg, #a259ff 0%, #6a82fb 100%)' }}
      ></div>
    </div>
    {/* Number and title */}
    <span className="text-gray-400 text-sm font-semibold">{String(activeIndex + 1).padStart(2, '0')}.</span>
    <div className="text-white text-lg font-semibold leading-tight mb-1">{modules[activeIndex]?.title}</div>
    {/* Description */}
    <div className="text-gray-300 text-base mb-2">{modules[activeIndex]?.description}</div>
    {/* Get Started button */}
    <div className="mt-4">
      <Link href="/auth">
        <Button>GET STARTED</Button>
      </Link>
    </div>
  </div>

  {/* Desktop: Progress bar and module grid */}
  <div className="hidden md:block">
    <div className="course-module-progress-track">
      <div
        className="course-module-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
    <div className="grid grid-cols-7 gap-4">
      {modules.map((module, idx) => (
        <div
          key={idx}
          className="text-center cursor-pointer"
          onClick={() => handleModuleClick(idx)}
        >
          <p className={`text-2xl font-bold ${activeIndex === idx ? 'text-white' : 'text-gray-500'}`}>{String(idx + 1).padStart(2, '0')}.</p>
          <p className={`text-xs mt-1 ${activeIndex === idx ? 'text-white' : 'text-gray-500'}`}>Module</p>
        </div>
      ))}
    </div>
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
} 