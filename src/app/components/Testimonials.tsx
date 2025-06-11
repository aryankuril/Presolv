'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  quote: string;
  image: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Mediator & Arbitrator",
      organization: "Delhi Mediation Center",
      quote: "The ODR certification has transformed my practice completely. I've been able to expand my client base internationally and offer more flexible dispute resolution services. The practical training and platform knowledge gave me the confidence to take my practice online.",
      image: "/testimonials/priya-sharma.jpg"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Legal Counsel",
      organization: "Tech Solutions Inc.",
      quote: "As an in-house counsel, implementing ODR practices has reduced our dispute resolution costs by 40% and shortened resolution times from months to weeks. The certification provided actionable strategies that I could implement immediately in our company.",
      image: "/testimonials/rahul-mehta.jpg"
    },
    {
      id: 3,
      name: "Aisha Khan",
      role: "HR Director",
      organization: "Global Services Ltd.",
      quote: "The ODR training equipped our HR team with innovative approaches to workplace conflict resolution. The virtual mediation techniques we learned have been invaluable for our remote teams across different time zones and cultural contexts.",
      image: "/testimonials/aisha-khan.jpg"
    },
    {
      id: 4,
      name: "Vikram Desai",
      role: "Founder",
      organization: "Resolve Legal Tech",
      quote: "This certification was the cornerstone for launching my ODR platform startup. The comprehensive curriculum covered both technical aspects and dispute resolution methodologies, giving me the dual expertise needed in this evolving field.",
      image: "/testimonials/vikram-desai.jpg"
    },
    {
      id: 5,
      name: "Ananya Patel",
      role: "Judge (Retd.)",
      organization: "High Court of Mumbai",
      quote: "After 30 years in traditional courts, this program opened my eyes to the future of justice delivery. The instructors were exceptional, and the case simulations provided practical experience that prepared me for real-world online dispute resolution.",
      image: "/testimonials/ananya-patel.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-[#080816]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-medium mb-2 block">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Alumni Are Saying
          </h2>
          <p className="text-gray-600 mb-8">
            Don&apos;t just take our word for it. Here&apos;s what our users have to say about their experience with our platform.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="testimonial-slider relative overflow-hidden rounded-2xl">
            <div 
              className="transition-transform duration-700 ease-in-out flex" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="relative min-w-full p-6 md:p-10 bg-gradient-to-br from-[#121225] to-[#0A0A18] rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#1E1E3A]">
                        {/* Note: These are placeholder images. You would need to add these images to your project */}
                        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 relative flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <svg 
                        className="text-blue-500 opacity-30 w-12 h-12 mb-4" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      
                      <p className="text-lg text-gray-300 italic mb-6">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      
                      <div>
                        <h4 className="text-white font-semibold text-xl">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400">
                          {testimonial.role} | {testimonial.organization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeIndex === i ? 'bg-white' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Join hundreds of professionals who have advanced their careers with our training
          </p>
          <a 
            href="/success-stories" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
          >
            Read more success stories
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 