'use client';

import AnimatedBackground from "./components/AnimatedBackground";
import Button from "./components/Button";
import CardCarousel from "./components/CardCarousel";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const cards = [
    {
      imageSrc: "./images/digital-toolbox.svg",
      imageAlt: "digital-toolbox",
      title: "ODR Digital Toolbox"
    },
    {
      imageSrc: "./images/virtual-reality.svg",
      imageAlt: "virtual-reality",
      title: "Experience ADR Centre in Virtual Reality"
    },
    {
      imageSrc: "./images/case-studies.svg",
      imageAlt: "case-studies",
      title: "Real-world Case Studies"
    },
    {
      imageSrc: "./images/certification.svg",
      imageAlt: "certificate",
      title: "Earn a recognized certification upon completion"
    },
    {
      imageSrc: "./images/top-industry-expert.svg",
      imageAlt: "top-industry-experts",
      title: "Learn from top industry experts"
    },
    {
      imageSrc: "./images/smart-contracts.svg",
      imageAlt: "smart-contracts",
      title: "Simulation of Dispute Resolution in Blockchain-based Smart Contracts"
    }
  ];
  return (
    <main className="flex flex-col ">
      <section className="flex flex-col relative overflow-hidden ">
        <div className="container hero-section relative mx-auto px-4 z-10 h-[567px] max-sm:h-[50vh] content-center">
          <AnimatedBackground />
          <h1 className="hero-section-title text-center mb-4 animate-fade-in text-5xl md:text-6xl lg:text-7xl">
            Mastering Online
            <br />
            Disputes Resolution
          </h1>

          {/* Subtitle */}
          <p className="text-white text-center mb-10 animate-fade-in text-xl md:text-2xl">
            Navigating Disputes in the Digital Age with Presolv360
          </p>

          {/*button*/}
          <div className="flex justify-center">
            <Button onClick={() => router.push('/auth')}>
              GET STARTED
            </Button>
          </div>
        </div>

        {/* Card Carousel */}
        <div className="container relative mx-auto px-4 md:px-8  mt-10 max-sm:-mt-8 lg:px-20 max-sm:px-5 max-sm:py-5">
          <CardCarousel
            cards={cards}
            showNavigation={true}
            showPagination={true}
            autoplay={true}
            slidesPerView={{
              mobile: 1,
              tablet: 2,
              desktop: 4
            }}
            slidesToScroll={{
              mobile: 1,
              tablet: 2,
              desktop: 2
            }}
          />
        </div>
        {/* Inside the Course */}
        <div className='container  px-15 flex flex-col items-center justify-center py-1 mt-30 max-sm:mt-20  mx-auto max-sm:px-5 max-sm:py-1'>
          <h2 className="text-white text-center mb-4 text-3xl md:text-4xl">Inside the Course</h2>
          <p className="text-white text-center mb-6 text-lg md:text-xl">
            Developed by Presolv360 in collaboration with industry experts, this online course offers a dynamic, tech-driven learning experience. Participants explore the evolution from ADR to ODR through real-world case studies,
            engage in masterclasses by leading professionals, and experience an ADR Centre in Virtual Reality. The course includes skill-building sessions in AI-negotiation, e-mediation, and e-arbitration while emphasizing digital communication and ethical considerations in ODR.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => router.push('/course-insider')}>
              EXPLORE MORE
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
