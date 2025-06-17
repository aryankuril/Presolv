import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import Link from 'next/link';
import aboutImage from '../../../public/images/about-presolv-1.jpg';
import aboutImage2 from '../../../public/images/about-presolv-2.jpg';
import ImageCarousel from '../components/ImageCarousel';
import { FaArrowRight } from 'react-icons/fa';

interface MediaItem {
  imageSrc: string;
  imageAlt: string;
  title: string | React.ReactNode;
  link: string;
}

export default function AboutPage() {
  const recognitionItems = [
    {
      imageSrc: '/images/recognition/atjfa.png',
      imageAlt: 'ATJFA Recognition',
    },
    {
      imageSrc: '/images/recognition/sahamati.png',
      imageAlt: 'Sahamati Recognition',
    },
    {
      imageSrc: '/images/recognition/gov-maha.png',
      imageAlt: 'Government of Maharashtra Recognition',
    },
    {
      imageSrc: '/images/recognition/hc-kerala.png',
      imageAlt: 'High Court of Kerala Recognition',
    },
    {
      imageSrc: '/images/recognition/hc-bombay.png',
      imageAlt: 'High Court of Bombay Recognition',
    },
    {
      imageSrc: '/images/recognition/mlj.png',
      imageAlt: 'MLJ Recognition',
    },
  ];

  const mediaItems: MediaItem[] = [
    {
      imageSrc: '/images/media/business-world.png',
      imageAlt: 'Business World Logo',
      title: 'Business World',
      link: 'https://www.businessworld.in/article/dispute-resolution-at-a-click-485430',
    },
    {
      imageSrc: '/images/media/et.png',
      imageAlt: 'Economic Times Logo',
      title: 'Economic Times',
      link: 'https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/people-in-distress-are-dialing-legal-tech-startups/articleshow/76637752.cms',
    },
    {
      imageSrc: '/images/media/indian-conventions.png',
      imageAlt: 'Indian Conventions Logo',
      title: 'Indian Conventions',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6401710711680143360/',
    },
    {
      imageSrc: '/images/media/live-law.png',
      imageAlt: 'Live Law Logo',
      title: 'Live Law',
      link: 'https://www.livelaw.in/law-firms/presolv360-odr-advisory-council-246921',
    },
    {
      imageSrc: '/images/media/mediate.png',
      imageAlt: 'Mediate Logo',
      title: 'Mediate',
      link: 'https://mediate.com/indias-internet-citizens-can-finally-settle-online/',
    },
    {
      imageSrc: '/images/media/the-hindu.png',
      imageAlt: 'The Hindu Logo',
      title: 'The Hindu',
      link: 'https://www.thehindu.com/news/cities/mumbai/a-startup-that-helps-you-avoid-courts/article24618326.ece',
    },
    {
      imageSrc: '/images/media/toi.png',
      imageAlt: 'Times of India',
      title: 'Times of India',
      link: 'https://timesofindia.indiatimes.com/india/as-lockdown-slows-down-courts-e-mediation-across-cities-picks-up/articleshow/78204960.cms',
    },
    {
      imageSrc: '/images/media/your-story.png',
      imageAlt: 'Your Story',
      title: 'Your Story',
      link: 'https://yourstory.com/2023/05/using-digital-means-to-solve-legal-disputes-startups-odr',
    },
    {
      imageSrc: '/images/media/sound-cloud.svg',
      imageAlt: 'Sound Cloud',
      title: 'Sound Cloud',
      link: 'https://soundcloud.com/hrishikay/hrishi-k-with-namita-shah-aman-sanghvi-presolv360-mediation-out-of-court-settlements',
    },
    {
      imageSrc: '/images/media/artifical-lawyer.png',
      imageAlt: 'Artifical Lawyer',
      title: 'Artifical Lawyer',
      link: 'https://www.artificiallawyer.com/2020/03/16/in-india-civil-cases-take-13-years-but-presolv360-has-a-better-solution/',
    },
    {
      imageSrc: '/images/media/finance-story.png',
      imageAlt: 'The Finance Story',
      title: 'The Finance Story',
      link: 'https://thefinancestory.com/legatech-startup-by-chartered-accountant-in-india',
    },
    {
      imageSrc: '/images/media/business-today.png',
      imageAlt: 'Business Today',
      title: 'Business Today',
      link: 'https://www.businesstoday.in/magazine/the-buzz/story/presolv360-dispute-management-on-the-cloud-108636-2018-07-09',
    },
  ].map(item => ({
    ...item,
    title: (
      <div className="flex items-center gap-2">
        {item.title}
        <FaArrowRight className="text-white" />
      </div>
    )
  }));

  return (
    <section>
      <div className="container relative mx-auto py-20 px-20 max-sm:px-5 max-sm:py-10">
        {/*title*/}
        <h2 className="text-center mb-10">
          About Presolv360
        </h2>

        {/*image*/}
        <div className="flex flex-row gap-10 justify-center items-center mb-10 max-sm:flex-col">
          <Image 
            src={aboutImage} 
            className='rounded-2xl w-full md:w-[40%]' 
            alt="about" 
            width={500} 
            height={500}
            style={{maxWidth: '100%', height: 'auto'}}
          />
          <Image 
            src={aboutImage2} 
            className='rounded-2xl w-full md:w-[40%]' 
            alt="about" 
            width={500} 
            height={500}
            style={{maxWidth: '100%', height: 'auto'}}
          />
        </div>

        {/*about presolv360*/}
        <p className="text-center mb-10">
          Presolv360 simplifies dispute resolution through research, innovation, technology, and empathy.
          Its cloud-based ODR platform operates 24x7 in multiple languages, accessible even via smartphones.
          Equipped with digital communication tools, smart case management, automation, blockchain integration, and e-signing, it streamlines the resolution process.
          Founded by Namita Shah, Aman Sanghavi, and Bhaven Shah, Presolv360 envisions data-driven, inclusive justice.
          It also leads initiatives to educate government officials, judicial officers, students, and stakeholders on ODR and technology integration in justice delivery.
        </p>

        
          {/*button*/}
          <div className="flex justify-center">
            <Link href="/auth">
              <Button>
                BE A PART OF OUR TEAM
              </Button>
            </Link>
          </div>
      </div>

      {/*Recognition*/}
      <div className="container relative mx-auto py-20 px-20   max-sm:mt-10 max-sm:px-10 max-sm:py-10">
        <h2 className="text-center mb-10">
          Recognition and Empanelment
        </h2>

        <ImageCarousel
          items={recognitionItems}
          scrollDelay={2000}
          showNavigation={false}
          showPagination={false}
          autoplay={true}
          slidesPerView={{
            mobile: 2,
            tablet: 2,
            desktop: 4
          }}
          slidesToScroll={{
            mobile: 2,
            tablet: 2,
            desktop: 1
          }}
        />
      </div>

      {/*media*/}
      <div className='container relative mx-auto py-20 px-20   max-sm:mt-10 max-sm:px-10 max-sm:py-10'>
        <h2 className="text-center mb-10">
          Presolv360 in the media
        </h2>

        <ImageCarousel
          items={mediaItems}
          showNavigation={false}
          showPagination={false}
          autoplay={true}
          slidesPerView={{
            mobile: 2,
            tablet: 2,
            desktop: 4
          }}
          slidesToScroll={{
            mobile: 2,
            tablet: 2,
            desktop: 1
          }}
        />
      </div>
    </section>
  );
} 