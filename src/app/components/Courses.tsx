'use client';

import React from 'react';
import Link from 'next/link';

interface CourseFeature {
  id: number;
  text: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  features: CourseFeature[];
  duration: string;
  level: string;
  price: string;
  popular: boolean;
}

export default function Courses() {
  const courses: Course[] = [
    {
      id: 1,
      title: "ODR Fundamentals",
      description: "Learn the basics of online dispute resolution and its applications in the modern legal landscape.",
      features: [
        { id: 1, text: "Introduction to ODR principles" },
        { id: 2, text: "Digital communication skills" },
        { id: 3, text: "Basic ODR platforms overview" },
        { id: 4, text: "Ethics in virtual resolution" },
        { id: 5, text: "Digital evidence handling" }
      ],
      duration: "4 weeks",
      level: "Beginner",
      price: "₹19,999",
      popular: false
    },
    {
      id: 2,
      title: "Advanced ODR Certification",
      description: "Comprehensive training for professionals seeking to master online dispute resolution techniques and technologies.",
      features: [
        { id: 1, text: "Advanced ODR methodology" },
        { id: 2, text: "Cross-border dispute management" },
        { id: 3, text: "ODR platform mastery" },
        { id: 4, text: "AI integration in dispute resolution" },
        { id: 5, text: "Case management systems" },
        { id: 6, text: "Capstone project with real cases" }
      ],
      duration: "8 weeks",
      level: "Intermediate",
      price: "₹49,999",
      popular: true
    },
    {
      id: 3,
      title: "ODR for Corporate Professionals",
      description: "Specialized training for in-house counsel and corporate legal teams handling digital disputes.",
      features: [
        { id: 1, text: "B2B dispute resolution" },
        { id: 2, text: "Consumer complaint handling" },
        { id: 3, text: "Compliance integration" },
        { id: 4, text: "Legal tech implementation" },
        { id: 5, text: "Department-wide ODR strategy" }
      ],
      duration: "6 weeks",
      level: "Advanced",
      price: "₹39,999",
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-[#111] to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our ODR Certification Programs
          </h2>
          <p className="text-gray-600 mb-8">
            Our comprehensive ODR certification program is designed to equip you with the skills and knowledge needed to excel in online dispute resolution. Whether you&apos;re a legal professional, mediator, or looking to enter the field, our courses will prepare you for success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-[#151515] rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-900/30 hover:-translate-y-1 ${
                course.popular ? 'md:transform md:scale-105 ring-2 ring-blue-500 relative z-10' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-gray-400 mb-6">{course.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Duration</span>
                    <span className="text-white font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Level</span>
                    <span className="text-white font-medium">{course.level}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 my-6 pt-6">
                  <h4 className="text-white font-medium mb-3">What you&apos;ll learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature) => (
                      <li key={feature.id} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <div className="text-2xl font-bold text-white mb-4">
                    {course.price}
                  </div>
                  <Link 
                    href={`/courses/${course.id}`}
                    className={`block py-3 px-6 rounded-lg font-medium transition-colors ${
                      course.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-[#222] text-white hover:bg-[#333] border border-gray-700'
                    }`}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Not sure which program is right for you? Schedule a free consultation with our experts.
          </p>
          <Link 
            href="/consultation" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
          >
            Book a Free Consultation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 