'use client';
import { useState, useEffect } from 'react';
import CourseModules from '@/app/components/CourseModules';
import Image from 'next/image';
import React from 'react';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import ContactForm from '../components/ContactForm';
// import ContactForm from '../components/ContactForm';

const modules = [
  {
    id: '01',
    image: '/images/slider/1.svg',
    title: 'Unravelling the Past: ADR and ODR through History',
  },
  {
    id: '02',
    image: '/images/slider/2.svg',
    title: 'ODR in Action: Integrating ODR into Daily Life',
  },
  {
    id: '03',
    image: '/images/slider/3.svg',
    title: 'The Art of Negotiation: Navigating Conflicts through ODR',

  },
  {
    id: '04',
    image: '/images/slider/4.svg',
    title: 'Mediation Magic: Unlocking Resolution Possibilities',
  },
  {
    id: '05',
    image: '/images/slider/5.svg',
    title: 'Virtual Resolution: Exploring ODR in the Arbitration Landscape',

  },
  {
    id: '06',
    image: '/images/slider/6.svg',
    title: 'Building Bridges, Not Walls: The Digital Toolbox',
  },
  {
    id: '07',
    image: '/images/slider/7.svg',
    title: 'Embracing the Future: Innovations in ODR'
  },
];

const propositions = [
  {
    title: 'Internships:',
    description:
      'We offer a select group of students a unique 6-week incubation program, providing hands-on experience in Online Dispute Resolution (ODR).',
  },
  {
    title: 'University Offering:',
    description:
      'We provide opportunities for a continuous knowledge-sharing framework, ensuring ongoing learning and growth for students.',
  },
  {
    title: 'Scholarships:',
    description:
      'We offer merit-based concessions by covering a portion of the course fees for deserving students, subject to the terms of our scholarship program.',
  },
  {
    title: 'Exclusive community:',
    description:
      'Course participants will join an exclusive ODR community, gaining access to periodic AMA sessions, job opportunities, a legal-tech innovation lab, and more.',
  },
];

export default function CourseInsiderPage()  {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setHoveredIndex(null); // Disable hover effect on mobile
      return;
    }
  
    let index = 0;
    const interval = setInterval(() => {
      setHoveredIndex(index);
      index = (index + 1) % propositions.length;
    }, 2000);    
  
    return () => clearInterval(interval);
  }, [] );
  
  
  return (
    <main className="bg-black text-white min-h-screen">

      <CourseModules modules={modules} title="Inside The Course" />

      
        <div className="container  odr-course-bg ellipse-bg grid grid-cols-2 gap-10 mx-auto py-15 px-15 mt-30 max-sm:mt-10 max-sm:grid-cols-1 max-sm:px-5 max-sm:py-5 max-sm:gap-3">

          <div className="">
            <Image src="/images/sign-up-odr-course.jpg" className='rounded-[30px]' alt="ODR Course" width={1000} height={1000} />
          </div>

          <div className='flex flex-col gap-10 max-sm:gap-5 '>
            <h2>
              Sign Up for ODR Course
            </h2>
            <ol className="tick-list space-y-4 list-none p-0 m-0">
              <li>Complete the course in just 4-5 hours</li>
              <li>Get 12 months of unlimited access</li>
              <li>Lifetime access to all course modules</li>
              <li>Learn at your own pace with complete flexibility</li>
              <li>
                Earn a prestigious certificate endorsed by Justice B. N. Srikrishna (Former Judge, Supreme Court of India)
                and Mr. Rahim Shamji (ADR ODR International, UK) Court of India
              </li>
            </ol>

            <h3>
              <span className="text-[#FBB04C]">₹4999/-</span> <span className="text-gray-500 line-through">₹5999/-</span>
            </h3>

            
          {/*button*/}
          <div className="flex justify-left">
            <Button onClick={() => router.push('/auth')}>
              GET STARTED
            </Button>
          </div>
          </div>

        </div>

         <div className="container grid grid-cols-2 gap-10 px-20 py-20 mt-20 max-sm:mt-10 max-sm:grid-cols-1 mb-10 mx-auto max-sm:px-5 max-sm:py-10">
      <div>
        <h2>Other Key Proposition</h2>
      </div>

      <div className="container flex flex-col gap-10">
        {propositions.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row gap-5 items-start key-proposition-item rounded-xl ${
              hoveredIndex === index && window.innerWidth >= 768 ? 'hovered' : ''
            }`}
          >
            <Image
              src="/images/graduation-icon.svg"
              alt="ODR Course"
              width={50}
              height={50}
              className="max-sm:w-10 max-sm:h-10"
            />
            <div>
              <h4 className="mb-2">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

      <div className='container  relative grid grid-cols-2 px-50 py-10 gap-10 mt-10 max-sm:mt-10 max-sm:grid-cols-1 mb-10 mx-auto max-sm:px-5 max-sm:py-10'>

          <div className='flex flex-col text-left sticky top-20 h-fit max-h-[calc(300vh-80px)] justify-center items-center'>
            <h2>
              What is my return on investment?
            </h2>
            <p>
              This course is designed for a diverse group of learners and professionals
              eager to explore the future of dispute resolution
            </p>
            <Image src="/images/investment.png" alt="ODR Course" width={500} height={500} className='max-sm:w-60 max-sm:h-60' />
          </div>

          <div className='flex flex-col gap-20 investment-card relative'>
            {/* Card1 */}
            <div className='return-investment flex flex-col gap-5 sticky top-20 sm-top-50 z-10 max-sm:top-45'>
              <h4 className='text-[#FBB04C]'>
                Are You a Learner/Fresher Student?
              </h4>
              <Accordion
                items={[
                  {
                    title: 'Scholarship Support',
                    description: 'Financial aid for deserving students.'
                  },
                  {
                    title: 'Industry-Endorsed Certification',
                    description: 'Strengthen your credentials'
                  },
                  {
                    title: 'ODR Ambassador Program',
                    description: 'Lead and advocate for ODR adoption.'
                  },
                  {
                    title: 'Expert-Led Masterclasses',
                    description: 'Learn directly from pioneers.'
                  },
                  {
                    title: 'Hands-On Internship',
                    description: 'Gain real-world experience in ODR.'
                  },
                  {
                    title: 'AI & Tech Skill Training',
                    description: 'Develop expertise in digital dispute resolution.'
                  },
                  {
                    title: 'Exclusive Learning Network',
                    description: 'Connect with peers and professionals.'
                  },
                  {
                    title: 'Flexible & Self-Paced Study',
                    description: 'Learn anytime, anywhere.'
                  }
                ]}
              />
            </div>

            {/* Card2 */}
            <div className='return-investment flex flex-col gap-5 sticky top-40 z-20 max-sm:top-58'>
              <h4 className='text-[#FBB04C]'>
                Are You a Legal Professional/Access-to-Justice Advocate?
              </h4>
              <Accordion
                items={[
                  {
                    title: 'ODR Panel Membership ',
                    description: 'Get empaneled as a dispute resolution specialist.'
                  },
                  {
                    title: 'Strategic Industry Networking',
                    description: 'Build connections with top legal minds.'
                  },
                  {
                    title: 'Legal-Tech Collaboration Hub',
                    description: 'Contribute to innovation in dispute resolution.'
                  },
                  {
                    title: 'Global Certification in ODR',
                    description: 'Enhance your professional standing.'
                  },
                  {
                    title: 'Thought Leadership Webinars',
                    description: 'Stay ahead with expert insights.'
                  },
                  {
                    title: 'Client & Case Referrals',
                    description: 'Expand your practice with direct opportunities.'
                  },
                  {
                    title: 'Cross-Border Dispute Resolution',
                    description: 'Leverage ODR for international cases.'
                  },
                  {
                    title: 'Regulatory & Policy Frameworks',
                    description: 'Stay updated on evolving legal standards.'
                  }
                ]}
              />
            </div>

            {/* Card3 */}
            <div className='return-investment flex flex-col gap-5 sticky top-50 z-30 max-sm:top-85 '>
              <h4 className='text-[#FBB04C]'>
                  Are You an Academician/Entrepreneur/Innovator?
              </h4>
              <Accordion
                items={[
                  {
                    title: 'Curriculum Enhancement',
                    description: 'Incorporate ODR into academic programs.'
                  },
                  {
                    title: 'Career-Ready Skill Development',
                    description: 'Equip students for future opportunities.'
                  },
                  {
                    title: 'Institutional Collaborations',
                    description: 'Partner with global ODR leaders.'
                  },
                  {
                    title: 'Prestige & Recognition',
                    description: "Elevate your institution's standing in legal-tech."
                  },
                  {
                    title: 'Exclusive Research & Insights',
                    description: 'Access the latest trends in ODR.'
                  },
                  {
                    title: 'Innovation in Dispute Resolution',
                    description: 'Drive advancements in legal technology.'
                  },
                  {
                    title: 'Influence Policy & Governance',
                    description: 'Contribute to shaping ODR regulations.'
                  },
                  {
                    title: 'Interdisciplinary Applications',
                    description: "Explore ODR's impact in various fields."
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* <div className='container odr-course-bg ellipse-bg py-15 px-15 flex flex-col items-center gap-9.5 justify-center mt-5 mb-10 mx-auto max-sm:px-5 max-sm:py-10'>
        <div>
          <h2 className='text-center'>
            Have Questions? We&apos;re Here to Help!
          </h2>
          <p className='text-center pt-5'>
            Share your name and phone number, and we&apos;ll reach out with all the course details.
            Start your ODR journey today!
          </p>
        </div>
        <form className='flex flex-col gap-2.5 items-center max-sm:w-full'>
          <div className='flex flex-row flex-wrap gap-4 w-full max-sm:flex-col max-sm:gap-2'>
            <input type='text' placeholder='Name' className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'></input>
            <input type='text' placeholder='Phone Number' className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'></input>
            <input type='text' placeholder='Email' className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'></input>
            <input type='text' placeholder='Any Questions ?' className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'></input>
          </div>
          <Button type='submit' className='custom-btn-primary relative text-center mt-4'>SUBMIT</Button>
        </form>
      </div> */}
      <ContactForm />

    </main>
  );
} 