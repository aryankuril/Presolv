import TestimonialCarousel from '../components/TestimonialCarousel';
import ImpactImageCarousel from '../components/ImpactImageCarousel';
import Image from 'next/image';

const ImageGallery = [
  {
    imageSrc: '/images/impacting-images/impacting-image-1.png',
    imageAlt: 'Impacting Image 1',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-2.png',
    imageAlt: 'Impacting Image 2',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-3.png',
    imageAlt: 'Impacting Image 3',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-4.png',
    imageAlt: 'Impacting Image 4',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-5.png',
    imageAlt: 'Impacting Image 5',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-6.png',
    imageAlt: 'Impacting Image 6',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-7.png',
    imageAlt: 'Impacting Image 7',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-8.png',
    imageAlt: 'Impacting Image 8',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-9.png',
    imageAlt: 'Impacting Image 9',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-10.png',
    imageAlt: 'Impacting Image 10',
  },
  {
    imageSrc: '/images/impacting-images/impacting-image-11.png',
    imageAlt: 'Impacting Image 11',
  }

];

const testimonials = [
  {
    text: `After attending the Presolv360 training program, I gained valuable Insights into various means of Online Dispute Resolution (ODR) prevalent In India. The program provides comprehensive learning, real-life case studies, Interactive modules and sessions by Industry experts etc. It is a must for anyone Interested in dispute resolution using altennate means and technolgy and equips one with practical skills and knowledge relevant to today's digital world.`,
    author: '~ Punya Khachi',
  },
  {
    text: `Really enjoyed this course - learnt a lot. Good course. Excellent tutor. Many thanks`,
    author: '~ Farhat Jahan',
  },
  {
    text: `It was interesting course and helped me to gain knowledge about the ODR. I am passionate to work in ODR.`,
    author: '~ Tejavathi J.',
  },
  {
    text: `I had the opportunity to access exclusive tools and resources in the ODR Digital Toolbox, participate in blockchain-based smart contract simulations in dispute resolution, and experience an ADR Centre in virtual reality. A big thank you to Presolv360 for offering a transformative course. This course has truly been a game-changer, equipping me with the skills and knowledge to excel in the evolving field of ODR.`,
    author: '~ Harsh Singh',
  },
];

export default function CreatingImpact() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden"> 
      <div className="container relative mx-auto py-20 px-20 max-sm:px-5 max-sm:py-10">
          <h2 className='text-center'>Real Experience, Real Impact</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div className="container relative  max-sm:mt-10 mx-auto mt-8 px-20 max-sm:px-5 max-sm:py-1">
        <h2 className='text-center'>Event and Workshops</h2>
          <ImpactImageCarousel
            items={ImageGallery}
            scrollDelay={2000}
            showNavigation={true}
            showPagination={false}
            autoplay={true}
          />
        </div>

        <div className='container  py-15 px-15 flex flex-col items-center gap-9.5 justify-center mt-6 max-sm:mt-10  mx-auto max-sm:px-5 max-sm:py-1'>
          <h2 className='text-center'>Insights from Industry Leaders</h2>
          <div className="grid grid-cols-3 gap-10 py-10 max-sm:py-1 max-sm:grid-cols-1">
            <div className="team-card flex flex-col h-full flex-1 min-h-[400px]">
              <Image src="/images/tanu-mehta.png" alt="Tanu Mehta" width={100} height={100} />
              <h4 className="font-bold uppercase mt-5 mb-5">MS. Tanu Mehta</h4>
              <p className="mb-5">Presolv360&apos;s Course will not only help you move into the second level of engaging online,
                but will give you the confidence to say yes to ODR</p>
              <div className="text-md text-black bg-[#FBB04C] rounded-full px-5 py-3 max-sm:text-sm max-sm:px-3 max-sm:py-2">
                Legal Counsel, Mediator, Conciliator</div>
            </div>
            <div className="team-card flex flex-col h-full flex-1 min-h-[400px]">
              <Image src="/images/justice-kannan.png" alt="Justic Kannan" width={100} height={100} />
              <h4 className="font-bold mb-5 mt-5 uppercase">Justice K. Kannan</h4>
              <p className="mb-5">ODR is a method of securing a dispute resolution at your own pace,
                in the way you want, in the comfort that you desire </p>
              <div className="text-md text-black bg-[#FBB04C] rounded-full px-5 py-3 max-sm:text-sm max-sm:px-3 max-sm:py-2">
                Judge (Retd.) Punjab & Haryana High Court </div>
            </div>
            <div className="team-card flex flex-col h-full flex-1 min-h-[400px]">
              <Image src="/images/ankit-sahani.png" alt="Ankit Sahni" width={100} height={100} />
              <h4 className="mb-5 mt-5 font-bold uppercase">Mr Ankit Sahni</h4>
              <p className="mb-5">Presolv360&apos;s ODR course is a game-changer in the field,
                blending theoretical knowledge with practical, hands-on experience </p>
              <div className="text-md text-black bg-[#FBB04C] rounded-full px-5 py-3 max-sm:text-sm max-sm:px-3 max-sm:py-2"> IP & Technology Law</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


