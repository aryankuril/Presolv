'use client';

import React, { useState } from 'react';
import Button from './Button';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
   const [ name, setName ] = useState('');
   const [ phone, setPhone ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ questions, setQuestions ] = useState('');
   const [ isSubmitting, setIsSubmitting ] = useState(false);
   const [ submitStatus, setSubmitStatus ] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceID = 'service_yeqteby';
    const templateID = 'template_17pf4gu';
    const publicKey = 'PIxZ6ToR73scATBvY';

    const templateParams = {
      name,
      phone,
      email,
      questions
    };
    
    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form
      setName('');
      setPhone('');
      setEmail('');
      setQuestions('');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='container odr-course-bg ellipse-bg py-15 px-15 flex flex-col items-center gap-9.5 justify-center mt-30 max-sm:mt-15  mx-auto max-sm:px-5 max-sm:py-10'>
    <div>
      <h2 className='text-center'>
      Have Questions? We&#39;re Here to Help!
      </h2>
      <p className='text-center pt-5'>
      Share your name and phone number, and we&#39;ll reach out with all the course details.
      Start your ODR journey today!
      </p>
    </div>
    <form onSubmit={handleSubmit} className='flex flex-col gap-2.5 items-center max-sm:w-full'>
      <div className='flex flex-row flex-wrap gap-8 w-full max-sm:flex-col max-sm:gap-2'>
        <input 
          type='text' 
          placeholder='Name' 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'
        />
        <input 
          type='tel' 
          placeholder='Phone Number' 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'
        />
        <input 
          type='email' 
          placeholder='Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'
        />
        <input 
          type='text' 
          placeholder='Any Questions ?' 
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          className='w-[22%] border-b border-[#C3C3C3] pb-2 bg-transparent max-sm:w-[100%]'
        />
      </div>
      <Button 
        type='submit' 
        className='custom-btn-primary relative text-center mt-4'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'SUBMIT'}
      </Button>
      
      {submitStatus === 'success' && (
        <p className="text-yellow-600 mt-2"> Message sent successfully! We&#39;ll get back to you soon.</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 mt-2">Failed to send message. Please try again later.</p>
      )}
    </form>
  </div>
  );
} 