'use client'
import { useState } from 'react';
import React from 'react';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
// import ContactForm from '../components/ContactForm';


export default function FAQPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className='mx-auto relative'>
      <div className='container mt-10 odr-course-bg gap-5 flex flex-col py-20 px-10 mx-auto items-center justify-center max-sm:px-5 max-sm:py-10'>
        <h2 className='text-center'>Frequently Asked Questions</h2>
        <p className='text-center'>Have any questions? We&apos;re here to assist you.</p>
      </div>
      <div className='container mt-10 gap-5 flex flex-col py-20 px-20 mx-auto items-center justify-center w-full max-sm:px-5 max-sm:py-10'>
        <Accordion
          className="w-full"
          isFAQ={true}
          items={[
            {
              title: ' If Online Dispute Resolution simply means resolving disputes through online platforms, why choose Presolv360 instead of using Google Meet or Zoom?',
              description: ' While Online Dispute Resolution (ODR) is often perceived as just conducting meetings over Zoom or Google Meet, effective dispute resolution requires much more than just an online platform. Understanding non-verbal cues, ethical considerations, and structured negotiation techniques are essential aspects of ODR. The Presolv360 course goes beyond basic video conferencing—it equips you with in-depth knowledge of ODR principles, ethics, and best practices, ensuring a comprehensive learning experience.'
            },
            {
              title: ' Presolv360 was launched in 2017 and offers a platform for dispute resolution along with a certification. However, similar knowledge is available on public platforms like YouTube. What makes this course different?',
              description: 'While there is a vast amount of information available on ODR, navigating through it and identifying what is relevant for a legal professional can be overwhelming. The Presolv360 course provides a structured curriculum tailored for law students and professionals, offering practical insights and industry-relevant knowledge that go beyond what is freely available online. It is designed to give learners a strong foundation in ODR and equip them with the skills needed to enter this emerging field confidently.'
            },
            {
              title: ' Is this certification recognized by any university, bar council, or legally recognized body in India?',
              description: 'The certification is recognized by ADR ODR International, a globally reputed organization in the field of dispute resolution.'
            },
            {
              title: 'Beyond the knowledge gained, does this certification give an advantage in the legal field?',
              description: 'Yes, this certification not only enhances your understanding of ODR but also helps you stand out in the legal and dispute resolution industry. It demonstrates your knowledge of technology-driven dispute resolution, making you a strong candidate for opportunities in the growing legal tech sector. By completing this course, you gain a competitive edge and open doors to new career pathways in online mediation and arbitration.'
            },

          ]}
        />

        {!showMore && (
          <div className='flex flex-col gap-5'>
            <Button onClick={() => setShowMore(true)}>SHOW MORE</Button>
          </div>
        )}

        {showMore && (
          <>
            <Accordion
              className="w-full"
              isFAQ={true}
              items={[
                {
                  title: 'What is ODR?',
                  description: 'ODR stands for Online Dispute Resolution and refers to the use of technology to resolve disputes out-of-court through various alternative dispute resolution (ADR) mechanisms such as negotiation, mediation, conciliation, arbitration, etc.'
                },
                {
                  title: 'Can I take this course even if I do not have a background in law?',
                  description: 'Yes, this course is for all ODR enthusiasts - entrepreneurs, professionals, students. Prior legal education is not required.'
                },
                {
                  title: 'What are the benefits of joining the ODR Panel?',
                  description: 'Get empaneled as a dispute resolution specialist.'
                },
                {
                  title: 'How long is this course?',
                  description: 'The course is designed for self-paced learning.'
                },
                {
                  title: 'How will my performance be assessed?',
                  description: 'The course follows a self-paced learning structure without traditional grading. Assessments consist of multiple-choice questions, each of which must be answered for successful completion.'
                },
                {
                  title: 'Will I receive a certificate after completing the course?',
                  description: 'Yes, upon successful completion of the course, you will receive a certificate that will add great value to your professional career and will be a highlight on your resume and your Linkedin profile.'
                },
                {
                  title: 'Are there any scholarships available?',
                  description: 'To apply for a merit-based scholarship, please send your application to trainings@presolv360.com.'
                },
                {
                  title: 'Can I access this course on my mobile?',
                  description: 'Yes, you can access this course across devices such as desktops, tablets, smartphones.'
                },
                {
                  title: 'What is the refund policy?',
                  description: 'This course is non-refundable. We are committed to giving you a great learning experience. In case of any queries, please reach out to trainings@presolv360.com.'
                },
                {
                  title: 'What is the course validity?',
                  description: 'You will have lifetime access to the course.'
                },
                {
                  title: 'Is there a community I can join to stay updated about ODR?',
                  description: 'After completion of the course, you will become a member of an exclusive ODR community where we will share opportunities, the latest and the greatest of the ODR ecosystem.'
                },
                {
                  title: 'If I have any doubts or questions, will I be able to resolve them after completion of the course?',
                  description: 'Absolutely! We will be hosting quarterly AMA sessions with ODR experts, including judges, technologists, business stalwarts and global ODR veterans.'
                },
                {
                  title: 'What is the language of the course?',
                  description: 'The language of the course is English with more languages coming soon.'
                }
              ]}
            />
            <div className='flex flex-col gap-5'>
              <Button onClick={() => setShowMore(false)}>SHOW LESS</Button>
            </div>
          </>
        )}
      </div>

      <div className='container odr-course-bg ellipse-bg py-15 px-15 flex flex-col items-center gap-9.5 justify-center mt-5 mb-10 mx-auto max-sm:px-5 max-sm:py-10'>
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
      </div>
      {/* <ContactForm /> */}

    </section>
  );
}

